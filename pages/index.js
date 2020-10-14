import Layout from '@/components/Layout'
import Reveal from '@/components/Reveal'
import { useThemeContext } from '@/context/themeContext'

export default function Home() {
  const { toggleTheme } = useThemeContext()

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <Layout>
      <Reveal>
        <h1
          onClick={handleClick}
          className='p-8 text-6xl font-bold cursor-pointer'
        >
          Next.js Tailwind CSS Starte
          <span className='uppercase animate-pulse text-themeHighlight'>r</span>
        </h1>
      </Reveal>
    </Layout>
  )
}
