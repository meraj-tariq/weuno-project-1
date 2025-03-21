"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logoImage from "@images/logo.png";

import React from "react";
import styles from "@/styles/header.module.css";

const socialLinks = [
  {
    href: "https://tiktok.com",
    icon: "/images/tiktok.svg",
  },
  {
    href: "https://instagram.com",
    icon: "/images/instagram.svg",
  },
  {
    href: "https://twitter.com",
    icon: "/images/x.svg",
  },
  {
    href: "https://snapchat.com",
    icon: "/images/snap.svg",
  },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed w-full z-50 ${
        !isMenuOpen ? styles.headerBackground : styles.minHeaderBackground
      } `}
    >
      <header className={`mb-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Image
                src={logoImage}
                alt="The Groves Logo"
                width={220}
                height={50}
                className="text-3xl font-bold text-gold"
              />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  <Image
                    src={link.icon}
                    alt="socail media"
                    width={18}
                    height={18}
                    className="text-3xl font-bold text-gold"
                  />
                </Link>
              ))}

              <button className="bg-gold hover:bg-gold/90 font-semibold text-white/80 px-12 py-[0.8rem] rounded-[16px] text-sm  tracking-wider transition-colors">
                Log in
              </button>

              <div className="flex items-center space-x-1 text-white/80">
                <ChevronDown className="h-4 w-4" />

                <Image
                  src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg"
                  alt="English"
                  width={18}
                  height={18}
                  className="h-4 w-5"
                />
                <span className="text-sm">English</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white/80 hover:text-gold transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden  h-screen">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/dine"
                  className="block px-3 py-2 text-white/80 hover:text-gold transition-colors uppercase text-sm tracking-wider"
                >
                  Dine with us
                </Link>
                <Link
                  href="/plan"
                  className="block px-3 py-2 text-white/80 hover:text-gold transition-colors uppercase text-sm tracking-wider"
                >
                  Plan your visit
                </Link>
                <Link
                  href="/events"
                  className="block px-3 py-2 text-white/80 hover:text-gold transition-colors uppercase text-sm tracking-wider"
                >
                  Events
                </Link>
                <Link
                  href="/map"
                  className="block px-3 py-2 text-white/80 hover:text-gold transition-colors uppercase text-sm tracking-wider"
                >
                  View groves map
                </Link>
                <Link
                  href="/story"
                  className="block px-3 py-2 text-white/80 hover:text-gold transition-colors uppercase text-sm tracking-wider"
                >
                  Our story
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-white/80 hover:text-gold transition-colors uppercase text-sm tracking-wider"
                >
                  Contact us
                </Link>
                <div className="px-3 py-2 space-y-2">
                  <div className="flex items-center space-x-1 text-white/80">
                    <ChevronDown className="h-4 w-4" />

                    <Image
                      src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg"
                      alt="English"
                      width={18}
                      height={18}
                      className="h-4 w-5"
                    />
                    <span className="text-sm">English</span>
                  </div>
                  <button className="mt-6 mb-6 font-semibold bg-gold hover:bg-gold/90 text-white/80 px-12 py-[0.8rem] rounded-[16px] text-sm  tracking-wider transition-colors">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className=" text-white py-2 px-4 hidden md:block border-b-2 border-t-2 border-gold/20">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <nav className="flex w-[100%] justify-between">
            <Link
              href="/dine"
              className="text-lg hover:text-gold transition-colors uppercase tracking-wider"
            >
              Dine with us
            </Link>
            <Link
              href="/plan"
              className="text-lg hover:text-gold transition-colors uppercase tracking-wider"
            >
              Plan your visit
            </Link>
            <Link
              href="/events"
              className="text-lg hover:text-gold transition-colors uppercase tracking-wider"
            >
              Events
            </Link>
            <Link
              href="/map"
              className="text-lg hover:text-gold transition-colors uppercase tracking-wider"
            >
              View groves map
            </Link>
            <Link
              href="/story"
              className="text-lg hover:text-gold transition-colors uppercase tracking-wider"
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="text-lg hover:text-gold transition-colors uppercase tracking-wider"
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
