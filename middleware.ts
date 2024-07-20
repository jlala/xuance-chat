import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export { auth as middleware } from "@/app/libs/auth/auth"

const isProtectedRoute = createRouteMatcher([
  '/settings(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};