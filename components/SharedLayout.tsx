import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import { BookHeart, Twitter, Linkedin, Facebook } from "lucide-react";

interface SharedLayoutProps {
  children: React.ReactNode;
}

export const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <BookHeart size={28} />
            <span>Book2Byte</span>
          </Link>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              About
            </NavLink>
            <NavLink
              to="/get-involved"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Get Involved
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p>&copy; {new Date().getFullYear()} Book2Byte. All rights reserved.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};