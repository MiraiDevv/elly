import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maintenance - Elly',
  description: 'We are currently performing maintenance',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Under Maintenance
        </h1>
        <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          <p>
            We are currently performing scheduled maintenance to improve our services.
            We will be back shortly. Thank you for your patience!
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-pink-500" />
        </div>
      </div>
    </div>
  )
} 