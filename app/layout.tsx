import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Piltri Studio - Digitaliza tu negocio sin complicaciones',
  description: 'Estudio de desarrollo de software que ofrece soluciones enlatadas y a medida para negocios pequeños, profesionales y emprendedores.',
  keywords: 'desarrollo software, digitalización, soluciones empresariales, software a medida',
  authors: [{ name: 'Piltri Studio' }],
  openGraph: {
    title: 'Piltri Studio - Digitaliza tu negocio sin complicaciones',
    description: 'Soluciones de software simples y efectivas para digitalizar tu negocio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}