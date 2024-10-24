import { locales } from 'nextra/locales'

export const middleware = request => {
  const { nextUrl } = request

  if (nextUrl.pathname.startsWith('/remote/') || nextUrl.pathname.startsWith('/fonts/')) {
    // The middleware must not handle dynamic routes.
    return
  }

  return locales(request)
}
