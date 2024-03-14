import React from "react";
import { collectionData } from "@/constans";
import Link from "next/link";
import { Replace } from "lucide-react";
import { useEffect } from "react";
import { connectToDatabase } from "@/lib/database";
import { createInsurance, createUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { Input } from "postcss";
import Newsletter from "./Newsletter";

const Collection = () => {
  return (
    <>
      {collectionData.length > 1 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {collectionData.map((data) => {
              return (
                <li key={data.id} className="flex justify-center">
                  <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
                    <Link
                      href={data.link}
                      style={{
                        backgroundImage: `url(${data.image})`,
                      }}
                      className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-50"
                    />
                    <Link
                      href={data.link}
                      className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
                    >
                      <div className="flex gap-2 ">
                        <span className="p-semibold-10  rounded-full bg-green-100 px-4 py-1 text-green-60">
                          {data.type}
                        </span>
                      </div>
                      <p className="p-bold-16 text-gray-600">{data.title}</p>
                      <p className="p-medium-14 md:p-medium-18 md:line-clamp-4 line-clamp-4  flex-1 text-black">
                        {data.description}
                      </p>
                      <div className="flex-between w-full">
                        <p className="p-medium-12 md:p-medium-14 text-gray-600">
                          Feb Sigorta
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-gray-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">Herhangi bir data yok</h3>
        </div>
      )}
    </>
  );
};

export default Collection;
