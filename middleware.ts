import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['en', 'nl'],

  // Default locale if no match
  defaultLocale: 'en'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(nl|en)/:page*']
  matcher: '/((?!api|static|.*\\..*|_next).*)'
  //  matcher: '/(nl|en)/.*'
  // matcher: ['/(nl)/', '/(en)/', '/(nl|en)/.*']

  // matcher: ['/nl/:page*', '/en/:page*']
};