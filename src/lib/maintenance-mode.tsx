'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Image from 'next/image'

interface MaintenanceContextType {
  isInMaintenanceMode: boolean
}

const MaintenanceContext = createContext<MaintenanceContextType>({ isInMaintenanceMode: false })

export function MaintenanceProvider({ children }: { children: React.ReactNode }) {
  const [isInMaintenanceMode, setIsInMaintenanceMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check maintenance mode on mount and every 30 seconds
    const checkMaintenanceMode = () => {
      const maintenanceMode = window.localStorage.getItem('MAINTENANCE_MODE') === 'true' ||
                             process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
      setIsInMaintenanceMode(maintenanceMode)
      setIsLoading(false)
    }

    checkMaintenanceMode()
    const interval = setInterval(checkMaintenanceMode, 30000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-pink-500" />
      </div>
    )
  }

  return (
    <MaintenanceContext.Provider value={{ isInMaintenanceMode }}>
      {isInMaintenanceMode ? (
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