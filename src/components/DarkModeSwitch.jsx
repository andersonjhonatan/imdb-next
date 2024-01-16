'use client'

import { MdLightMode, MdDarkMode } from 'react-icons/md'

import { useTheme } from 'next-themes'

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode onClick={toggleTheme} className="hover:cursor-pointer hover:text-amber-500" />
      ) : (
        <MdDarkMode onClick={toggleTheme} className="hover:cursor-pointer hover:text-amber-500" />
      )}
    </div>
  )
}

export default DarkModeSwitch
