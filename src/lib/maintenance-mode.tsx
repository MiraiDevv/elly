'use client'

import { createContext, useContext, useEffect } from 'react'
import Image from 'next/image'

interface MaintenanceContextType {
  isInMaintenanceMode: boolean
}

// Simple maintenance mode check with debug logging
const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
if (typeof window !== 'undefined') {
  console.log('Maintenance Mode Value:', process.env.NEXT_PUBLIC_MAINTENANCE_MODE)
  console.log('Is in Maintenance Mode?', MAINTENANCE_MODE)
}

const MaintenanceContext = createContext<MaintenanceContextType>({ isInMaintenanceMode: MAINTENANCE_MODE })

export function MaintenanceProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('Current Maintenance Status:', MAINTENANCE_MODE)
  }, [])

  return (
    <MaintenanceContext.Provider value={{ isInMaintenanceMode: MAINTENANCE_MODE }}>
      {MAINTENANCE_MODE ? (
        <MaintenancePage />
      ) : (
        children
      )}
    </MaintenanceContext.Provider>
  )
}

export function useMaintenanceMode() {
  return useContext(MaintenanceContext)
}

function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/maintenance_icon/elly_manuntenção.png"
            alt="Elly Maintenance"
            width={200}
            height={200}
            priority
            className="w-auto h-auto"
          />
        </div>
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