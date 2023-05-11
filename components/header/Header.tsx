"use client";

import Image from "next/image";
import Link from "next/link";
import { MainButton } from "../";
import { navs } from "@/constant";
import { NavTypes } from "./../../types";
import styles from "./Header.module.css";

interface HeaderType {
  isNavOpen: boolean;
  setIsNavOpen: any;
}

export default function Header({ isNavOpen, setIsNavOpen }: HeaderType) {
  const handleSignup = () => {};
  const hanldeLogin = () => {};
  const handleNavOpen = () => setIsNavOpen(true);
  const handleNavClose = () => setIsNavOpen(false);

  return (
    <header
      className={styles.header}
      // data-aos="fade-down"
      // data-aos-delay="0"
    >
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
        <div className={styles.navHeader}>
          <div className={styles.logoWrapper}>
            <Image src="logo.svg" alt="logo" fill />
          </div>

          <Image
            src="cancel.svg"
            alt="cancel"
            width={24}
            height={24}
            onClick={handleNavClose}
          />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navs.map((nav: NavTypes) => (
              <li key={nav.name} className={styles.navItem}>
                <Link href={nav.route} className={styles.navLink}>
                  <p>{nav.name}</p>
                  {isNavOpen ? (
                    <Image
                      src="dropdown_large.svg"
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
          <MainButton onClick={handleSignup} text="Sign up" type="large" />
        </div>
      </div>

      <div className={styles.menuWrapper}>
        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Login
          </Link>
          <MainButton onClick={handleSignup} text="Sign up" />
        </div>

        <Image
          src="/menu.svg"
          alt="menu"
          width="32"
          height="32"
          onClick={handleNavOpen}
        />
      </div>
    </header>
  );
}
