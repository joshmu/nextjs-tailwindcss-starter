import { RevealInView } from '@/components/shared/ux/RevealInView'
import { useThemeContext } from '@/context/themeContext'
import { Layout } from '@/layout/Layout'

export default function Home() {
  const { toggleTheme } = useThemeContext()

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <Layout>
      <RevealInView>
        <h1
          onClick={handleClick}
          className='p-8 text-6xl font-bold cursor-pointer'
        >
          Next.js Tailwind CSS Starte
          <span className='uppercase animate-pulse text-themeAccent'>r</span>
        </h1>
      </RevealInView>
    </Layout>
  )
}
