import { motion } from 'framer-motion'
import Head from 'next/head'

import MetaTags from './MetaTags/MetaTags'

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <MetaTags />
      </Head>
      <div className='min-h-screen overflow-hidden font-sans antialiased transition-colors duration-200 ease-in-out'>
        <main>{children}</main>
      </div>
    </motion.div>
  )
}
