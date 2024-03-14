import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex felx-col gap-4 p-5 text-center sm:flex-row ">
        <Link href="/">
          <Image src={logo} alt="Feb sigorta logo" width={128} height={38} />
        </Link>
        <p>2023 FEB Sigorta, Tüm hakları saklıdır. </p>
      </div>
    </footer>
  );
};

export default Footer;
