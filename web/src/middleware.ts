import { auth } from "@/auth";
const publicRoutes = ["/", "/login", "/denied", "/chat", "/verify"];
const rolePaths = {
	admin: "/admin",
	superadmin: "/manager",
};
export default auth((req) => {
	const isAuthenticated = !!req.auth;
	const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
	const newUrl = new URL("/", req.nextUrl.origin);
	const role = req.auth?.user.role;
	if (!isAuthenticated && !isPublicRoute) {
		return Response.redirect(newUrl);
	}
	if (isAuthenticated && !isPublicRoute) {
		if (role && !req.nextUrl.pathname.startsWith(rolePaths[role as keyof typeof rolePaths])) {
			return Response.redirect(new URL("/denied", req.nextUrl.origin));
		}
	}
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
