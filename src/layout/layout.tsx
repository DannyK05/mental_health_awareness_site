"use client";
import ArrowIcon from "@/assets/svgs/ArrowIcon";
import "./layout.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomeIcon from "@/assets/svgs/HomeIcon";
import TypesIcon from "@/assets/svgs/TypesIcon";
import HelpIcon from "@/assets/svgs/HelpIcon";
import HowToHelpIcon from "@/assets/svgs/HowToHelpIcon";
import Link from "next/link";
export default function PageLayout({
  children,
  step,
}: Readonly<{
  children: React.ReactNode;
  step: number;
}>) {
  const router = useRouter();

  const pageRoutes = [
    "/",
    "/mental-health-facts",
    "/mental-health-types",
    "/need-help",
    "/how-to-help",
  ];
  const next = step === pageRoutes.length - 1 ? 0 : step + 1;
  const prev = step === 0 ? 0 : step - 1;

  return (
    <div className="page-layout">
      <button
        onClick={() => {
          router.push(pageRoutes[prev]);
        }}
        disabled={step === 0}
        className=" scroll-button page-layout__left-arrow"
      >
        <ArrowIcon />
      </button>
      <main className="">{children}</main>
      <button
        onClick={() => {
          router.push(pageRoutes[next]);
        }}
        className=" scroll-button page-layout__right-arrow"
      >
        <ArrowIcon />
      </button>
      <nav className="page-layout__nav">
        <div
          className={`${
            step == 0 ? "active-link" : ""
          } page-layout__nav__links`}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
          <span>home</span>
        </div>
        <div
          className={`${
            step == 1 ? "active-link" : ""
          } page-layout__nav__links`}
        >
          <Link href="/mental-health-facts">
            <TypesIcon />
          </Link>
          <span>facts</span>
        </div>
        <div
          className={`${
            step == 2 ? "active-link" : ""
          } page-layout__nav__links`}
        >
          <Link href="/mental-health-types">
            <TypesIcon />
          </Link>
          <span>types</span>
        </div>
        <div
          className={`${
            step == 3 ? "active-link" : ""
          } page-layout__nav__links`}
        >
          <Link href="/need-help">
            <HelpIcon />
          </Link>
          <span>help</span>
        </div>
        <div
          className={`${
            step == 4 ? "active-link" : ""
          } page-layout__nav__links`}
        >
          <Link href="/how-to-help">
            <HowToHelpIcon />
          </Link>
          <span>how</span>
        </div>
      </nav>
      <footer className=""></footer>
    </div>
  );
}
