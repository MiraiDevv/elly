'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type TabPosition = 'top' | 'bottom' | 'left' | 'right' | null

export function ExitDialog() {
  const [showDialog, setShowDialog] = useState(false)
  const [tabPosition, setTabPosition] = useState<TabPosition>(null)
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now())

  useEffect(() => {
    // Desktop: Mouse leave and tab position detection
    const handleMouseLeave = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Detect which edge the user's mouse left from
      if (clientY <= 0) {
        setTabPosition('top')
        setShowDialog(true)
      } else if (clientY >= innerHeight - 1) {
        setTabPosition('bottom')
        setShowDialog(true)
      } else if (clientX <= 0) {
        setTabPosition('left')
        setShowDialog(true)
      } else if (clientX >= innerWidth - 1) {
        setTabPosition('right')
        setShowDialog(true)
      }
    }

    // Mobile: Visibility change detection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabPosition('top') // Default to top for mobile
        setShowDialog(true)
      }
    }

    // Mobile: Handle back button/switching apps
    const handleBlur = () => {
      setTabPosition('top') // Default to top for mobile
      setShowDialog(true)
    }

    // Mobile: Detect user inactivity
    const handleUserActivity = () => {
      setLastInteractionTime(Date.now())
    }

    // Check for inactivity every 30 seconds
    const inactivityInterval = setInterval(() => {
      const inactiveTime = Date.now() - lastInteractionTime
      if (inactiveTime > 30000) { // 30 seconds
        setTabPosition('top') // Default to top for inactivity
        setShowDialog(true)
      }
    }, 30000)

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('touchstart', handleUserActivity)
    document.addEventListener('scroll', handleUserActivity)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('touchstart', handleUserActivity)
      document.removeEventListener('scroll', handleUserActivity)
      clearInterval(inactivityInterval)
    }
  }, [lastInteractionTime])

  if (!showDialog) return null

  const dialogPositionClasses = {
    top: 'mt-16 md:mt-0',
    bottom: 'mb-16 md:mb-0',
    left: 'ml-16 md:ml-0',
    right: 'mr-16 md:mr-0',
  }

  const positionClass = tabPosition ? dialogPositionClasses[tabPosition] : ''

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-6">
      <div 
        className={`bg-white dark:bg-gray-800/95 rounded-2xl w-full relative 
        shadow-2xl animate-in fade-in zoom-in duration-300
        max-w-[95%] md:max-w-md
        p-4 md:p-6
        mx-auto mt-auto mb-4 md:my-auto
        md:scale-100 scale-90
        ${positionClass}`}
      >
        {/* Mobile Image - Smaller and at the top */}
        <div className="md:hidden flex justify-center -mt-12 mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-full p-1">
            <Image
              src="/assets/icon_home/elly.png"
              alt="Elly"
              width={80}
              height={80}
              className="w-auto h-auto drop-shadow-xl"
              priority
            />
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              Nossa, você vai mesmo sair sem comprar meu pack? 😢💔🥺
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Está barato e ainda tem desconto, você vai mesmo fazer isso?
            </p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:flex justify-center py-4">
            <Image
              src="/assets/icon_home/elly.png"
              alt="Elly"
              width={150}
              height={150}
              className="w-auto h-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* Buttons - Compact on mobile */}
          <div className="flex flex-col gap-2 md:gap-3 pt-2">
            <button
              onClick={() => setShowDialog(false)}
              className="w-full px-4 py-2.5 md:py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl 
              transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
              text-sm md:text-base"
            >
              Ficar e aproveitar o desconto!
            </button>
            <button
              onClick={() => setShowDialog(false)}
              className="w-full px-4 py-2.5 md:py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white 
              font-medium transition-colors rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50
              text-sm md:text-base"
            >
              Não, vou sair
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 