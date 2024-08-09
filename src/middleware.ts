import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['br', 'en', 'es'],
  defaultLocale: 'br'
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};