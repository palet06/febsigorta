"use client";
import { sendEmailW } from "@/lib/actions/sendMail";

import React, { useRef, useState } from "react";

const Newsletter = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const enteredEmail = useRef();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    setEmailMessage("Email listesine eklendiniz. Teşekkür ederiz.");
    sendEmailW();
    setTimeout(() => {
      `${(enteredEmail.current.value = "")}`;
      setEmailMessage("");
    }, 5000);
  };
  return (
    <div className="wrapper w-full bg-indigo-200  sm:px-0 md:px-0 lg:px-0">
      <div className="relative overflow-hidden bg-dotted-pattern bg-contain py-10 sm:-mx-6 sm:px-6 md:mx-0  md:px-5 xl:px-8 xl:py-10">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
          <div>
            <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
              Güncel Kalın
            </p>
            <p className="mt-4 text-lg tracking-tight text-blue-900">
              Avantajlı tekliflerimiz ve indirimlerimizden haberdar olmak ister
              misiniz?
            </p>
          </div>
          <form onSubmit={handleClick}>
            <h3 className="text-lg font-semibold tracking-tight text-blue-900">
              Bilgilendirme sistemine kayıt olun.
              <span aria-hidden="true">↓</span>
            </h3>
            <div className="mt-5 flex  bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
              <input
                ref={enteredEmail}
                type="email"
                required
                placeholder="Email adresiniz"
                aria-label="Email address"
                className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />

              <button
                className="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                type="submit"
              >
                <span className="sr-only sm:not-sr-only">Kayıt ol</span>
                <span className="sm:hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      d="m14 7 5 5-5 5M19 12H5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex-auto mt-5 bg-transparent text-base text-green-600">
              <p className="py-1">
                {emailMessage && "Listeye başarılı bir şekilde eklendiniz"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
