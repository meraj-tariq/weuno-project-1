"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Instagram,
  Twitter,
  Snail as Snapchat,
  BookText as TikTok,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
const FooterLayoutPage = () => {
  return (
    <footer className="bg-[#1A1F1A] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Join us for an
              <br />
              unforgettable experience
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:items-end">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#C1A173]">
                DOWNLOAD THE GROVES APP
              </h3>
              <div className="flex gap-4">
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="transition-opacity hover:opacity-80">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 py-8 lg:grid-cols-3">
          <div className="space-y-4">
            <h4 className="font-semibold text-[#C1A173]">LOCATION</h4>
            <address className="not-italic">
              Al-Hizam Park
              <br />
              Al-Semairi, Yanbu Al Bahr 46455
              <br />
              Riyadh Saudi Arabia
            </address>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-[#C1A173]">WORKING HOURS</h4>
            <div>
              <p>Sun until Thurs: 4:00PM</p>
              <p>Fri & Sat: 2:30PM</p>
              <p className="mt-4">Gates Close at:</p>
              <p>Sat until Wed: 12:00AM</p>
              <p>Thu & Fri: 12:30AM</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-[#C1A173]">GUEST SERVICE CALL</h4>
            <div>
              <p>cc@thegroves-sa.com</p>
              <p>920001672</p>
              <p>+966556631309</p>
            </div>
          </div>
        </div>

        <img src="/images/logo.png" alt="The Groves" className="h-12" />
        <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <span className="text-sm text-gray-400">
              ©2023 The Groves for Entertainment
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
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
            </div>
            <div className="flex gap-2">
              <img src="/visa.svg" alt="Visa" className="h-6" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
              <img src="/amex.svg" alt="American Express" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayoutPage;
