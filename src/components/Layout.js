import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Next.js Tailwind CSS Starter</title>
      </Head>
      <div className='min-h-screen overflow-hidden font-sans antialiased transition-colors duration-300 ease-in-out text-themeText bg-themeBg'>
        <main>{children}</main>
      </div>
    </motion.div>
  )
}
