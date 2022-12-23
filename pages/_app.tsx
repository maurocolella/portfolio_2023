import type { AppProps } from 'next/app'
import { PT_Sans } from '@next/font/google'

import 'node_modules/normalize.css/normalize.css'
import '../styles/globals.scss'
import { DefaultLayout } from '@/containers/DefaultLayout'
const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
        html {
          font-family: ${ptSans.style.fontFamily}, sans-serif;
        }
      `}</style>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </>
}
