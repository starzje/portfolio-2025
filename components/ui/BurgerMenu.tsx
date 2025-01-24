"use client"; // If you're using Next.js App Router

import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export default function BurgerMenu() {
  return (
    <Menu isOpen  right>
      {/* Add your mobile nav links here: */}
      <Link id="home" className="menu-item" href="/">
        Home
      </Link>
      <Link id="about" className="menu-item" href="/about">
        About
      </Link>
      <Link id="blog" className="menu-item" href="/blog">
        Blog
      </Link>
      <Link id="contact" className="menu-item" href="/contact">
        Contact
      </Link>
    </Menu>
  );
}
