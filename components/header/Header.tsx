"use client";

import Image from "next/image";
import Link from "next/link";
import { MainButton } from "../";
import { navs } from "@/constant";
import { NavTypes } from "./../../types";
import styles from "./Header.module.css";
import { useState } from "react";

interface HeaderType {
  isNavOpen: boolean;
  setIsNavOpen: any;
}

export default function Header({ isNavOpen, setIsNavOpen }: HeaderType) {
  const [currentNav, setCurrentNav] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);

  const handleSignup = () => {};
  const hanldeLogin = () => {};
  const handleNavOpen = () => setIsNavOpen(true);
  const handleNavClose = () => setIsNavOpen(false);

  return (
    <header className={styles.header} data-aos="fade-down" data-aos-delay="0">
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
              <li
                key={nav.name}
                className={styles.navItem}
                onClick={() => {
                  if (currentNav === nav.name) setIsCurrent((prev) => !prev);
                  else setIsCurrent(true);

                  setCurrentNav(nav.name);
                }}
              >
                <div className={styles.navLink}>
                  {/* <Link href={nav.route} className={styles.navLink}> */}
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
                </div>

                {nav.subRoutes?.length && (
                  <div className={styles.subRoutes}>
                    <div className={styles.subRoutesInner}>
                      {nav.subRoutes.map((route) => (
                        <p className={styles.subRoute} key={route.name}>
                          {route.name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {nav.subNav?.length && (
                  <div className={styles.subRoutes}>
                    <div
                      className={`${styles.subRoutesInner} ${styles.subNavsInner}`}
                    >
                      <div className={styles.subNav}>
                        {nav.subNav.map((nav) => (
                          <div key={nav.title}>
                            <h3 className={styles.subNavHeader}>{nav.title}</h3>

                            <div className={styles.navInner}>
                              {nav.content.map((nav) => (
                                <p className={styles.subRoute} key={nav.name}>
                                  {nav.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {isNavOpen &&
                  currentNav === nav.name &&
                  nav.subRoutes?.length &&
                  isCurrent && (
                    <div className={styles.subRoutesMobile}>
                      <div className={styles.subRoutesInnerMobile}>
                        {nav.subRoutes.map((route) => (
                          <p className={styles.subRouteMobile} key={route.name}>
                            {route.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                {isNavOpen &&
                  currentNav === nav.name &&
                  nav.subNav?.length &&
                  isCurrent && (
                    <div className={styles.subRoutesMobile}>
                      <div
                        className={`${styles.subRoutesInnerMobile} ${styles.subNavsInnerMobile}`}
                      >
                        <div className={styles.subNavMobile}>
                          {nav.subNav.map((nav) => (
                            <div key={nav.title}>
                              <h3 className={styles.subNavHeader}>
                                {nav.title}
                              </h3>

                              <div className={styles.navInner}>
                                {nav.content.map((nav) => (
                                  <p className={styles.subRoute} key={nav.name}>
                                    {nav.name}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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
