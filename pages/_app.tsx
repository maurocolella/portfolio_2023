import type { AppProps } from 'next/app'
import { PT_Sans } from '@next/font/google'

import 'node_modules/normalize.css/normalize.css'
import '../styles/globals.scss'
import { DefaultLayout } from '@/containers/DefaultLayout'

export default function App({ Component, pageProps }: AppProps) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}
