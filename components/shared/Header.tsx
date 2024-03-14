import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/images/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} width={300} height={150} alt="Feb Sigorta Logo" />
        </Link>

        
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Giriş</Link>
            </Button>
            <MobileNav />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
