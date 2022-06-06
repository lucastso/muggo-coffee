import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_section}>
      <img src="/logo.svg" alt="" />
        <div className={styles.footer_item}>
          <div className={styles.footer_item_header}>
            <h1>Pages</h1>
            <img src="/pages.svg" alt="pages icon" />
          </div>
          <a href="/" className={styles.footer_item_link}>Home</a>
          <a href="/blog" className={styles.footer_item_link}>Blog</a>
          <a href="/products" className={styles.footer_item_link}>Products</a>
        </div>

        <div className={styles.footer_item}>
          <div className={styles.footer_item_header}>
              <h1>Informations</h1>
              <img src="/info.svg" alt="info icon" />
            </div>
            <a href="mailto:example@email.com" className={styles.footer_item_link}>example@email.com</a>
            <a href="/blog" className={styles.footer_item_link}>99-999-9999</a>
            <a href="/products" className={styles.footer_item_link_link}>Second av. Third floor bulding. 234. Upper east side</a>
        </div>

        <div className={styles.footer_item}>
          <div className={styles.footer_item_header}>
              <h1>Privacy</h1>
              <img src="/privacy.svg" alt="privacy icon" />
            </div>
            <a href="/products" className={styles.footer_item_link_link}>Document</a>
        </div>
    </footer>
  );
};

export default Footer;
