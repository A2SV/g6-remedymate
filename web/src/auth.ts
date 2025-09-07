import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserLoginSchema } from "./lib/zod/authSchema";
import { loginUser, refreshToken } from "./utils/authUtils";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},

			authorize: async (credentials) => {
				console.log("Started to authenticate user");
				try {
					const { email, password } = await UserLoginSchema.parseAsync(credentials);
					const response = await loginUser({
						email: email,
						password: password,
					});
					let user = null;
					if (response?.success) {
						const expiresIn = jwtDecode(response.access_token).exp;
						user = {
							accessToken: response.access_token,
							refreshToken: response.refresh_token,
							name: response.username,
							role: response.role,
							expiresIn: expiresIn,
						};
					} else {
						console.log(response?.message);
					}
					return user;
				} catch (error) {
					console.log("Error occured during authentication", error);
				}
				return null;
			},
		}),
	],
	callbacks: {
		authorized: async ({ auth }) => {
			console.log("Checking authorization status:", auth);
			return !!auth?.user;
		},
		async jwt({ token, user, account }) {
			if (account) {
				token.role = user.role;
				token.accessToken = user.accessToken;
				token.refreshToken = user.refreshToken;
				token.expiresIn = user.expiresIn;
				token.name = user.name;
				return token;
			} else if (token.expiresIn && Date.now() < token.expiresIn * 1000) {
				console.log("access token is active until ", new Date(token.expiresIn * 1000).toTimeString());
				return token;
			} else {
				console.log("Refreshing access Token");
				try {
					const tokens = await refreshToken({ refresh_token: token.refreshToken });

					if (!tokens) {
						console.log("Error refreshing token", tokens);
						signOut({ redirectTo: "/" });
						return null;
					}
					const expiresIn = jwtDecode(tokens.access_token).exp;
					token.accessToken = tokens.access_token;
					token.expiresIn = expiresIn;
					console.log("New access token generated");
				} catch (error) {
					console.error("Error refreshing access_token", error);
					token.error = "RefreshTokenError";
				}
				return token;
			}
		},
		session({ session, token }) {
			if (session) {
				session.user.role = token.role;
				session.user.accessToken = token.accessToken;
				session.user.name = token.name;
			}
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
	},
	trustHost: true,
});
