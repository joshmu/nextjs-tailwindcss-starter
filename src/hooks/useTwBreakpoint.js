import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import twConfigFile from '@/root/tailwind.config'

const twConfig = resolveConfig(twConfigFile)

const useTwBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState({
    id: 'sm',
    size: 640,
  })
  const [breakpoints, setBreakpoints] = useState({})

  useEffect(() => {
    const checkScreen = () => {
      const innerWidth = globalThis.window.innerWidth
      const screens = twConfig.theme.screens

      // grab values
      const formattedBreakpoints = {}
      Object.entries(screens)
        // format {id, size}
        .forEach(([key, val]) => {
          formattedBreakpoints[key] = +val.replace('px', '')
        })
      setBreakpoints(formattedBreakpoints)

      // largest first so 'find' gets max breakpoint
      let twBreakpoint = Object.entries(formattedBreakpoints)
        .map(([key, val]) => ({ id: key, size: val }))
        // largest to smallest so find can grab the appropriate breakpoint
        .sort((a, b) => b.size - a.size)
        // min width breakpoints so grab when we go over
        .find(breakpoint => {
          return innerWidth > breakpoint.size
        })

      // if not found then it must be the less than the smallest breakpoint
      if (!twBreakpoint) twBreakpoint = { id: 'xs', size: 0 }

      setCurrentBreakpoint(twBreakpoint)
    }
    checkScreen()

    globalThis.window.addEventListener('resize', checkScreen)
    return () => globalThis.window.removeEventListener('resize', checkScreen)
  }, [])
  return { currentBreakpoint, BREAKPOINTS: breakpoints }
}

export default useTwBreakpoint

// @example :  currentBreakpoint.size < BREAKPOINTS['md']
