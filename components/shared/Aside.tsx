import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type otherInsurancesType = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
}[];

const Aside = ({
  otherInsurances,
}: {
  otherInsurances: otherInsurancesType;
}) => {
  const linkPath = decodeURIComponent(usePathname()).replaceAll(" ", "-");

  return (
    <div className="h-auto rounded-md bg-[#eaeaf1]">
      <div className="h-[50px] flex items-center pl-5 rounded-t-md bg-[#2e3ba6]">
        <p className="p-semibold-18 text-center text-white">
          Tüm Hizmetlerimiz
        </p>
      </div>
      <div className="px-5 py-5">
        <ul className="flex flex-col gap-4">
          {otherInsurances.map((a) => (
            <Link
              key={a.id}
              href={`/insurances/${decodeURIComponent(a.title).replaceAll(
                " ",
                "-"
              )}`}
            >
              <li
                className={`${
                  linkPath ===
                  "/insurances/" +
                    decodeURIComponent(a.title).replaceAll(" ", "-")
                    ? "bg-[#28b79a] text-white"
                    : ""
                } w-full w-64 p-2 font-semibold bg-gray-50 hover:text-white hover:bg-[#28b79a] transition-colors ease-linear duration-75 cursor-pointer`}
              >
                {a.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
