{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/1YqmSp22-60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }

import Head from 'next/head'
import styles from '../styles/More.module.css'

const More = () => {
    return (
        <>
            <Head>
                <title>More About Us | EZScale</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className={styles.p}>More About Us</p>
            <iframe className={styles.iframe} width="738" height="415" src="https://www.youtube.com/embed/T7XAAvEFUiw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    )
}

export default More
