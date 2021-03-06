import styles from '../styles/HomePage.module.css'
import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <title>EZScale</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className={styles.ph}>
                Easiest way to build your own online business
            </p>
            <p className={styles.p}>
                Get beautiful, functional online stores, in-built payments, shipping, marketing tools, and a lot more. One product, many uses! Our eCommerce products will help you sell online easily in any way you want.
            </p>
            <p className={styles.ph2}>
                Why Businesses ❤ Us
            </p>
            <p className={styles.p}>
                Our products and features are built to give every business the complete eCommerce experience. Small businesses from all over India use EZScale online stores and EZScale payment gateway to sell online.
            </p>
            <p className={`${styles.p} ${styles.mgn}`}>
                EZScale started with Payment Links – a simple URL that one can copy and paste anywhere on the internet and receive payments online via any payment mode.
                Today, we provide more than just an efficient payments solution. EZScale makes custom-tailored business tools to help a business grow on the internet.
            </p>

            <p className={styles.p}>
                We are the “Operating System” for your business needs. We are here to help you grow.

            </p>
            {/*<iframe className={styles.iframe} width="460" height="275" src="https://www.youtube.com/embed/CQIGQ40MkVU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
        </>
    )
}

export default Home
