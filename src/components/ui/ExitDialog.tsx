'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type TabPosition = 'top' | 'bottom' | 'left' | 'right' | null

export function ExitDialog() {
  const [showDialog, setShowDialog] = useState(false)
  const [tabPosition, setTabPosition] = useState<TabPosition>(null)

  useEffect(() => {
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

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!tabPosition) setTabPosition('top')
      setShowDialog(true)
      // Modern approach
      e.preventDefault()
      return undefined
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [tabPosition])

  if (!showDialog) return null

  const dialogPositionClasses = {
    top: 'mt-16',
    bottom: 'mb-16',
    left: 'ml-16',
    right: 'mr-16',
  }

  const positionClass = tabPosition ? dialogPositionClasses[tabPosition] : ''

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white dark:bg-gray-800/95 rounded-2xl p-6 max-w-md w-full relative 
        shadow-2xl animate-in fade-in zoom-in duration-300 ${positionClass}`}
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nossa, você vai mesmo sair sem comprar meu pack? 😢💔🥺
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Está barato e ainda tem desconto, você vai mesmo fazer isso?
            </p>
          </div>

          {/* Elly Image */}
          <div className="flex justify-center py-4">
            <Image
              src="/assets/icon_home/elly.png"
              alt="Elly"
              width={150}
              height={150}
              className="w-auto h-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => setShowDialog(false)}
              className="w-full px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl 
              transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Ficar e aproveitar o desconto!
            </button>
            <button
              onClick={() => setShowDialog(false)}
              className="w-full px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white 
              font-medium transition-colors rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Não, vou sair
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 