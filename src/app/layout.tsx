import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'
import { Header } from '@/components/header'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Fineasy',
  description: 'Finanças facilitadas',
}

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />

        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            inter.className,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>

          <Toaster />
        </body>
      </html>
    </>
  )
}
