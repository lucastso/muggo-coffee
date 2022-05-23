import React from "react";
import { useRouter } from "next/router";
import styles from "./nav.module.css";

const Nav = () => {
  const router = useRouter();

  const renderNavComponent = () => {
    if (router.pathname == "/") {
      return (
        <div>
          <a href="/blog">Blog</a>
          <a href="/products">
            <p>Products</p>
            <img src="/arrow.svg" alt="arrow" />
          </a>
        </div>
      );
    } else if (router.pathname == "/blog") {
      return (
        <div>
          <a href="/">Home</a>
          <a href="/products">
            <p>Products</p>
            <img src="/arrow.svg" alt="arrow" />
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/">Home</a>
          <a href="/blog">
            <p>Blog</p>
            <img src="/arrow.svg" alt="arrow" />
          </a>
        </div>
      );
    }
  };

  return (
    <nav className={styles.nav_container}>
      <img src="/logo.svg" alt="logo" />
      {renderNavComponent()}
    </nav>
  );
};

export default Nav;
