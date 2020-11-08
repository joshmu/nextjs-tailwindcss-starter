import { motion } from 'framer-motion'
import Head from 'next/head'

const meta = {
  title: 'Nextjs TailwindCss Starter Template',
  description: 'This is the meta description for the website',
  keywords: 'josh mu, web dev, nextjs, tailwindcss',
  origin: 'https://www.example.com',
  imgUrl: 'https://www.example.com/assets/avatar.jpg',
}

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{meta.title}</title>

        {/* // * meta needs to be direct child of <Head> otherwise nextjs breaks... */}
        {/* HTML Meta Tags */}
        {/* Meta Tags Generated via http://heymeta.com</meta> */}
        <meta name='description' content={meta.description} />
        <meta name='keywords' content={meta.keywords} />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={meta.title} />
        <meta itemProp='description' content={meta.description} />
        <meta itemProp='image' content={meta.imgUrl} />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={meta.origin} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.imgUrl} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.imgUrl} />
      </Head>
      <div className='min-h-screen overflow-hidden font-sans antialiased transition-colors duration-200 ease-in-out'>
        <main>{children}</main>
      </div>
    </motion.div>
  )
}
