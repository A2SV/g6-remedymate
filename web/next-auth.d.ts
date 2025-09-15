import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			name: string;
			accessToken: string;
			role: string;
			error: string | null;
		} & DefaultSession;
	}

	interface User extends DefaultUser {
		name: string;
		accessToken: string;
		refreshToken: string;
		role: string;
		expiresIn: number | undefined;
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		name: string;
		accessToken: string;
		refreshToken: string;
		role: string;
		expiresIn: number | undefined;
	}
}
