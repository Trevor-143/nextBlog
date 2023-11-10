import Link from "next/link"
import styles from "./authLinks.module.css"

export default function AuthLinks () {
    const status = "notauthenticated"
    return (
        <>
        { status === "notauthenticated" ? (
            <Link href="/" >Login</Link>
        ):(
            <>
                <Link href="/write" >write</Link>
                <span className={styles.link} >Logout</span>
            </>
        ) }
        </>
    )
} 