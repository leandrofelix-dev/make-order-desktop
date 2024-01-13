import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <div className='mt-4 bg-red-600'>
      <Head>
        <title>Home</title>
        <p>Tela inicial</p>
      </Head>
      <Link href="/next">
          <a className="btn-blue">Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
