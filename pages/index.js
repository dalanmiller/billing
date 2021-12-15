import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>advent of billing</title>
        <meta name="description" content="Advent of Billing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="https://unpkg.com/htmx.org@1.6.1" async></script>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com" async></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🎄 Advent of Billing 🎁
        </h1>
        <div className="grid flex">
          <div className="log items-center justify-center" hx-get="https://billing.miller.cool/log" hx-trigger="every 3s">
          {/* <table>
            <tr>
              <td>Team dalan has <strong>successfully</strong> completed problem 1</td>
            </tr>
            <tr>
              <td>Team dalan has successfully completed problem 1</td>
            </tr>
            <tr>
              <td>Team dalan has successfully completed problem 1</td>
            </tr>
            <tr>
              <td>Team dalan has successfully completed problem 1</td>
            </tr>
          </table> */}
        {/* <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span> */}
          </div>
          <div className="completed items-center justify-center" hx-get="https://billing.miller.cool/completed" hx-trigger="every 3s">

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @dalan
        </a>
      </footer>
    </div>
  )
}
