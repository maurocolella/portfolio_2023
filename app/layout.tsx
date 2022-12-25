import type { AppProps } from 'next/app'

// import 'node_modules/normalize.css/normalize.css'
import '../styles/globals.scss'
import { PageLayout as Layout } from '@/containers/PageLayout'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return <Layout>
    {children}
  </Layout>
}
