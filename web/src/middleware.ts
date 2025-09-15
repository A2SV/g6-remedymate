import { auth } from "@/auth";
import { NextResponse } from "next/server";
const publicRoutes = ["/", "/login", "/forbidden", "/chat", "/verify"];
const rolePaths = {
	admin: "/admin",
	superadmin: "/manager",
};
export default auth((req) => {
	const isAuthenticated = !!req.auth && !req.auth?.user?.error;
	const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
	const newUrl = new URL("/", req.nextUrl.origin);
	const role = req.auth?.user.role;
	if (!isAuthenticated && !isPublicRoute) {
		return NextResponse.redirect(newUrl);
	}
	if (isAuthenticated && !isPublicRoute) {
		if (role && !req.nextUrl.pathname.startsWith(rolePaths[role as keyof typeof rolePaths])) {
			return NextResponse.redirect(new URL("/forbidden", req.nextUrl.origin));
		}
	}
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
