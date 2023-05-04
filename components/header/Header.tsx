"use client";

import Image from "next/image";
import Link from "next/link";
import { MainButton } from "../";
import { navs } from "@/constant";
import { NavTypes } from "./../../types";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignup = () => {};
  const hanldeLogin = () => {};
  const handleNavOpen = () => setIsNavOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src="logo.svg" alt="logo" fill />
      </div>

      <div
        className={
          isNavOpen
            ? `${styles.navWrapper} ${styles.navWrapperOpen}`
            : styles.navWrapper
        }
      >
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navs.map((nav: NavTypes) => (
              <li key={nav.name}>
                <Link href={nav.route} className={styles.navLink}>
                  <p>{nav.name}</p>
                  {isNavOpen ? (
                    <Image
                      src="dropdown_light.svg"
                      alt="dropdown"
                      width="24"
                      height="24"
                    />
                  ) : (
                    <Image
                      src="dropdown.svg"
                      alt="dropdown"
                      width="24"
                      height="24"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Login
          </Link>
          <MainButton onClick={handleSignup} text="Sign up" />
        </div>
      </div>

      <div className={styles.menuWrapper} onClick={handleNavOpen}>
        <Image src="/menu.svg" alt="menu" width="32" height="32" />
      </div>
    </header>
  );
}
