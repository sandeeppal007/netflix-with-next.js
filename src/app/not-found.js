import React from 'react'
import Link from 'next/link'
import styles from "@/app/styles/common.module.css"

const notfound = () => {
    return (
        <section className={styles.contianer}>
            <div className={styles.error_page}>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Could not find requested resources</p>
                <Link href="/">
                    <button>
                        Go to Home Page
                    </button>

                </Link>
              

            </div>

        </section>
    )
}

export default notfound