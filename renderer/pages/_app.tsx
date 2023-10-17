import { SessionProvider } from "next-auth/react"
import { Global } from '@emotion/react'

import { global } from '../global-style'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Global styles={global} />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
