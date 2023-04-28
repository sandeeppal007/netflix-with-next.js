import React from 'react'
import Link from 'next/link'
import styles from "@/app/styles/navbar.module.css"

const Nav = () => {
  return (
 <nav className={styles.navbar}>
   <div className="">
   <ul className={styles.navbarList}>


   <li className={styles.navbarItem}>
    <Link href="/">Home</Link>
   </li>
   <li className={styles.navbarItem}>
    <Link href="/About">About</Link>
   </li>
   <li className={styles.navbarItem}>
    <Link href="/Contact">Contact Us</Link>
   </li>
   <li className={styles.navbarItem}>
    <Link href="/Movies">Movies</Link>
   </li>

   </ul>

   </div>
 </nav>
  )
}

export default Nav