'use client'

import { MdLightMode, MdDarkMode } from 'react-icons/md'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => setMounted(true), [])

  return (
    <div>
      {mounted && currentTheme === 'dark' ? (
        <MdLightMode
          onClick={toggleTheme}
          className="hover:cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={toggleTheme}
          className="hover:cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  )
}

export default DarkModeSwitch
