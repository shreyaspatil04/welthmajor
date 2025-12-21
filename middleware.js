// import arcjet, { createMiddleware, detectBot, shield } from '@arcjet/next';
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


// const  isProtectedRoute = createRouteMatcher([
//     "/dashboard(.*)",
//     "/account(.*)",
//     "/transaction(.*)",
// ]);

// const aj = arcjet({
//   key : process.env.ARCJET_KEY,
//   rules:[
//     shield({
//       mode:"LIVE",
//     }),
//     detectBot({
//       mode:"LIVE",
//       allow:["CATEGORY:SEARCH_ENGINE","GO_HTTP"],
//     })
//   ]
// })

// const clerk = clerkMiddleware(async(auth,req)=>{
//     const { userId } =  await auth();
    
//     if(!userId && isProtectedRoute(req)){
//         const { redirectToSignIn } =  await auth();
        
//         return redirectToSignIn();
//     }
// });

// export default createMiddleware(aj ,clerk);

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import { createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

export default async function middleware(req) {
  // Lazy-load heavy dependencies to reduce Edge Function size
  const { clerkMiddleware } = await import('@clerk/nextjs/server');
  const arcjet = (await import('@arcjet/next')).default;
  const { shield, detectBot, createMiddleware } = await import('@arcjet/next');

  // Arcjet configuration
  const aj = arcjet({
    key: process.env.ARCJET_KEY,
    rules: [
      shield({ mode: "LIVE" }),
      detectBot({
        mode: "LIVE",
        allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
      }),
    ],
  });

  // Clerk authentication
  const clerk = clerkMiddleware(async (auth) => {
    const { userId, redirectToSignIn } = await auth();

    if (!userId && isProtectedRoute(req)) {
      return redirectToSignIn();
    }
  });

  // Combine Arcjet + Clerk middleware
  return createMiddleware(aj, clerk)(req);
}

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
