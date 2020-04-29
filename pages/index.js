import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! I'm Ricardo Seromenho. I'm a hands on software engineer with a big passion for best practices, reusable patterns and scalable infrastructures that are built to last.</p>
        <div className={utilStyles.social}><a href="https://www.linkedin.com/in/rseromenho/"><img height="32" height="32" src="/images/linkedin.svg" alt="LinkedIn"/></a><a href="https://twitter.com/rseromenho"><img height="32" height="32" src="/images/twitter.svg" alt="Twitter"/></a><a href="https://github.com/seromenho"><img height="32" height="32" src="/images/github.svg" alt="Github"/></a></div>
      </section>
    </Layout>
  )
}