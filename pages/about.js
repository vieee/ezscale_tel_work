import styles from '../styles/HomePage.module.css'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>About | EZScale</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className={styles.ph2}>
                India’s largest full-stack SME platform
            </p>

            <p className={styles.pz}>
                Our mission is to make MSMEs, truly enterprising
            </p>

            <p className={styles.p}>
                Micro-entrepreneurs, startups, MSMEs use EZScale to instantly start, sell, manage and grow, using our suite of offerings like payments, free online store, logistics, credit, and financing, and more, across mobile &amp; web.
            </p>

            <p className={styles.pz2}>
                Over 1,500,000+ MSMEs from 29 States and 7 Union Territories with 100+ million customers<br /> have used EZScale
            </p>

            <p className={styles.p}>


                <b>Rajat</b>, <b>Harshita</b> and <b>Deepak</b> started EZScale to solve one problem – make the internet a trustworthy place for a business to grow.
            </p>

            <p className={styles.p}>
                EZScale started with Payment Links – a simple URL that one can copy and paste anywhere on the internet and receive payments online via any payment mode.
                Today, we provide more than just an efficient payments solution. EZScale makes custom-tailored business tools to help a business grow on the internet.
            </p>

            <p className={styles.p}>
                We are the “Operating System” your business needs. We are here to help you grow.

            </p>
        </>
    )
}

export default About
