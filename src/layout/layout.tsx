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
  const [next, setNext] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);
  const pageRoutes = [
    "/",
    "/mental-health-facts",
    "/mental-health-types",
    "/need-help",
    "/how-to-help",
  ];
  useEffect(() => {
    if (step == 0) {
      setNext(1);
      setPrev(0);
    } else if (step == pageRoutes.length - 1) {
      setNext(0);
      setPrev(step - 1);
    } else {
      setNext(step + 1);
      setPrev(step - 1);
    }
    console.log(step);
  });

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
        <div className="page-layout__nav__links">
          <Link href="/">
            <HomeIcon />
          </Link>
          <span>home</span>
        </div>
        <div className="page-layout__nav__links">
          <Link href="/mental-health-facts">
            <TypesIcon />
          </Link>
          <span>facts</span>
        </div>
        <div className="page-layout__nav__links">
          <Link href="/mental-health-types">
            <TypesIcon />
          </Link>
          <span>types</span>
        </div>
        <div className="page-layout__nav__links">
          <Link href="/need-help">
            <HelpIcon />
          </Link>
          <span>help</span>
        </div>
        <div className="page-layout__nav__links">
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
