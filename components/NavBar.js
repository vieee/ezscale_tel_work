import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar({children}) {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <input className={styles.input}  id="responsive-menu" type="checkbox" />
                    <label htmlFor="responsive-menu">EZScale <span className={styles.mc}></span></label>
                    <div id="overlay"></div>
                    <ul className={styles.ul}>
                        <li><Link className={styles.a} href="/home">Home</Link></li>
                        <li><Link className={styles.a} href="/about">About</Link></li>
                        <li><Link className={styles.a} href="/startup-profile">Startup Profile</Link></li>
                        <li><Link className={styles.a} href="/brochure">Brochure</Link></li>
                        <li><Link className={styles.a} href="/more-about-us">More About Us</Link></li>
                        <li><Link className={styles.a} href="/careers">Careers</Link></li>
                        <li><Link className={styles.a} href="/contact-us">Contact Us</Link></li>
                    </ul>
                    <ul className={`${styles.ul} ${styles.scm}`}>
                        <li>
                            <Link className={styles.a} href="https://twitter.com/erin_e_sullivan" passHref>
                                <span className={styles.srt}>Twitter</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.a} href="https://www.linkedin.com/in/erinesullivan1" passHref>
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.a} href="https://www.instagram.com/erin_e_sullivan/" passHref>
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <main>
                {children}
            </main>
        </>
    );
}
