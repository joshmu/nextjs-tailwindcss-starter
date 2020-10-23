import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import twConfigFile from '@/root/tailwind.config'

const twConfig = resolveConfig(twConfigFile)

const useTwBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState({ id: 'sm', size: 640 })

  useEffect(() => {
    const checkScreen = () => {
      const innerWidth = globalThis.window.innerWidth
      const screens = twConfig.theme.screens
      const twBreakpoint = Object.entries(screens).find(([p, c]) => {
        const breakpoint = +c.replace('px', '')
        return innerWidth < breakpoint
      })

      const formatBreakpoint = {
        id: twBreakpoint[0],
        size: +twBreakpoint[1].replace('px', ''),
      }
      setBreakpoint(formatBreakpoint)
    }
    checkScreen()

    globalThis.window.addEventListener('resize', checkScreen)
    return () => globalThis.window.removeEventListener('resize', checkScreen)
  }, [])
  return { breakpoint }
}

export default useTwBreakpoint
