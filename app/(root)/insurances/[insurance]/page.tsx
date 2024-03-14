"use client";
import Image from "next/image";
import React from "react";
import { collectionData } from "@/constans/index";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { Separator } from "@/components/ui/separator";

//import { insuranceParamProps } from "@/types";

const Page = ({ params }: { params: { insurance: string } }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const foundData = collectionData.find(
    (a) => a.link.split("/")[2] == params.insurance
  );
  //console.log("/insurances/genel-saglik-sigortasi".split("/")[2]);

  if (foundData) {
    const otherInsurances = [
      ...collectionData.filter((a) => a.link.split("/")[2] != params.insurance),
    ];

    return (
      <>
        <section className="flex md:max-w-7xl md:mx-auto  justify-center bg-primary-50 bg-dotted-pattern bg-contain">
          <div className=" grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl ">
            <Image
              src={foundData!.image}
              alt={foundData!.title}
              width={1000}
              height={1000}
              className="max-h-fit min-h-[300px] object-cover object-center"
            />
            <div className="flex w-full flex-col gap-8 p-5 md:p-10">
              <div className="flex flex-col gap-6">
                <h2 className="h2-bold">{foundData?.title}</h2>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex gap-3">
                    <p className="p-semibold-12 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                      Kişiye Özel
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="p-medium-16 lg:p-regular-18">
                  {foundData?.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper flex flex-col px-4 mt-10 mb-10 space-y-12 md:space-y-0 md:flex-row text-lg">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              Neden Yaptırmalı?
            </h2>
            <p className="max-w-sm text-center text-zinc-500 md:text-left ">
              {foundData!.why}
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2 ">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primaryFeb">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {foundData!.whyq1}
                  </h3>
                </div>
              </div>
              <div className="">
                {" "}
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {foundData!.whyq1}
                </h3>
                <p className="text-blue-950">{foundData!.whya1}</p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primaryFeb">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {foundData!.whyq2}
                  </h3>
                </div>
              </div>
              <div className="">
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {foundData!.whyq2}
                </h3>
                <p className="text-blue-950">{foundData!.whya2}</p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-blue-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primaryFeb">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {foundData!.whyq3}
                  </h3>
                </div>
              </div>
              <div className="">
                {" "}
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {foundData!.whyq3}
                </h3>
                <p className="text-blue-950">{foundData!.whya3}</p>
              </div>
            </div>
          </div>
        </div>
        <Separator />

        <div className="wrapper max-w-6xl px-5 max-auto mt-20 mb-10 text-center md:text-left ">
          <h2 className="text-4xl font-bold w-full text-center">
            Akla Gelen Birkaç Soru ve Cevapları
          </h2>

          <div className="mt-12 w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto">
            <Accordion className="text-lg" type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-primaryFeb text-left md:text-left">
                  {foundData!.sssq1}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-left md:text-left">
                  {foundData!.sssa1}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-primaryFeb  text-left md:text-left">
                  {foundData!.sssq2}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-left md:text-left">
                  {foundData!.sssa2}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-primaryFeb  text-left md:text-left">
                  {foundData!.sssq3}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-left md:text-left">
                  {foundData!.sssa3}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <Separator />

        <section className="wrapper max-w-6xl px-5 max-auto mt-20 text-center md:text-left">
          <h2 className="text-4xl font-bold w-full text-center">Diğer Hizmetlerimiz</h2>
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full sm:w-1/1 md:w-3/3 xl:w-3/3 lg:w-3/3 mt-10"
          >
            <CarouselContent className="-ml-1 ">
              {otherInsurances.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 wrapper sm:basis-3/4 md:basis-3/5 lg:basis-1/3 xl:basis-1/3 "
                >
                  <div className="p-1 border-none">
                    <Card className="border-none flex min-h-[380px] w-full max-w-[400px] ">
                      <CardContent className="flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
                        <Link
                          href={_.link}
                          style={{
                            backgroundImage: `url(${_.image})`,
                          }}
                          className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-50"
                        />
                        <Link
                          href={_.link}
                          className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
                        >
                          <div className="flex gap-2 ">
                            <span className="p-semibold-10  rounded-full bg-green-100 px-4 py-1 text-green-60">
                              {_.type}
                            </span>
                          </div>
                          <p className="p-bold-16 text-gray-600">{_.title}</p>
                          <p className="p-medium-14 md:p-medium-18 md:line-clamp-4 line-clamp-4  flex-1 text-black">
                            {_.description}
                          </p>
                          <div className="flex-between w-full">
                            <p className="p-medium-12 md:p-medium-14 text-gray-600">
                              Feb Sigorta
                            </p>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </>
    );
  }

  // return (
  //   <section className="flex flex-col items-center justify-center bg-primary-50 bg-dotted-pattern bg-contain">
  //     <h1 className="h1-bold">
  //       Aradığınız sigorta türünde bir sigorta türü yok{" "}
  //     </h1>

  //     <p className="p-semibold-20">
  //       İstersen
  //       <Link
  //         className="underline text-primaryFeb cursor-pointer pl-2 pr-2"
  //         href={`https://www.google.com/search?q=${params.insurance}`}
  //         target="_blank"
  //       >
  //         buraya tıklayarak
  //       </Link>
  //       google'da arama yapabilirsin.
  //     </p>
  //   </section>
  // );

  //console.log(decodeURIComponent(foundData!.title).replaceAll(" ", "-"));
};

export default Page;
