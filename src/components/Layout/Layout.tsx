import { motion } from 'framer-motion'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}

const metaRef: { [key: string]: string } = {
  title: 'Nextjs TailwindCss Starter Template',
  description: 'This is the meta description for the website',
  keywords: 'josh mu, web dev, nextjs, tailwindcss',
  origin: 'https://localhost:3000',
  imgUrl: 'https://localhost:3000/assets/avatar.jpg',
}
console.log('TODO: update origin & imgUrl in production')

export const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{metaRef.title}</title>

        {/* // * meta needs to be direct child of <Head> otherwise nextjs breaks... */}
        {/* HTML Meta Tags */}
        {/* Meta Tags Generated via http://heymeta.com</meta> */}
        <meta name='description' content={metaRef.description} />
        <meta name='keywords' content={metaRef.keywords} />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={metaRef.title} />
        <meta itemProp='description' content={metaRef.description} />
        <meta itemProp='image' content={metaRef.imgUrl} />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={metaRef.origin} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={metaRef.title} />
        <meta property='og:description' content={metaRef.description} />
        <meta property='og:image' content={metaRef.imgUrl} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metaRef.title} />
        <meta name='twitter:description' content={metaRef.description} />
        <meta name='twitter:image' content={metaRef.imgUrl} />
      </Head>
      <div className='min-h-screen overflow-hidden font-sans antialiased transition-colors duration-200 ease-in-out'>
        <main>{children}</main>
      </div>
    </motion.div>
  )
}
