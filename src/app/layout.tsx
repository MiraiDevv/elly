import { Inter } from 'next/font/google'
import Footer from '@/components/ui/Footer'
import Navigation from '@/components/ui/Navigation'
import { ThemeProvider } from '@/components/theme-provider'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { MaintenanceProvider } from '@/lib/maintenance-mode'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elly',
  description: 'Elly - Your Personal Assistant',
  icons: {
    icon: [
      {
        url: '/assets/icon_home/elly.png',
        sizes: 'any',
        type: 'image/png',
      }
    ],
    shortcut: '/assets/icon_home/elly.png',
    apple: '/assets/icon_home/elly.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaintenanceProvider>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
              {/* Header */}
              <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                      href="/"
                      className="text-2xl font-bold text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                    >
                      Elly
                    </Link>

                    {/* Navigation */}
                    <Navigation />

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-grow">{children}</main>

              {/* Footer */}
              <Footer />
            </div>
          </MaintenanceProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
} 