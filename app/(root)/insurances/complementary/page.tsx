import React from "react";
import mainImage from "@/public/assets/images/tamamlayici.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl ">
          <Image
            src={mainImage}
            alt="FEB Tamamlayıcı Sağlık Sigortası"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold"></h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-semibold-12 rounded-full bg-primaryFeb px-5 py-2 text-white">
                    Kişiye Özel
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-gray-600">
                Tamamlayıcı Sağlık Sigortası: <br />
                Sağlık Harcamalarınızı Güvence Altına Alın
              </p>
              <p className="p-medium-16 lg:p-regular-18">
                Temel sağlık sigortasının ötesinde ek koruma sağlayan bir
                sigorta türüdür. Beklenmedik sağlık harcamalarını karşılar ve
                daha geniş kapsamlı bir sağlık hizmeti sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrapper flex flex-col px-4 mt-10 space-y-12 md:space-y-0 md:flex-row text-lg">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Neden Yaptırmalı?
          </h2>
          <p className="max-w-sm text-center text-zinc-500 md:text-left ">
            Tamamlayıcı sağlık sigortası yaptırmak, sağlık masraflarınızı
            kontrol altına almak ve ek koruma sağlamak için önemli bir adımdır.
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
                  Ek Koruma Sağlar
                </h3>
              </div>
            </div>
            <div className="">
              {" "}
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Ek Koruma Sağlar
              </h3>
              <p className="text-blue-950">
                Genel sağlık sigortası poliçeniz kapsamında olmayan veya kısmi
                olarak karşılanan sağlık hizmetlerini tamamlayıcı sağlık
                sigortası ile güvence altına alabilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-blue-300 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primaryFeb">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Mali Yükü Hafifletir
                </h3>
              </div>
            </div>
            <div className="">
              {" "}
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Mali Yükü Hafifletir
              </h3>
              <p className="text-blue-950">
                Beklenmedik sağlık harcamalarıyla karşılaşmanız durumunda,
                tamamlayıcı sağlık sigortası mali yükünüzü azaltarak sizi korur.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-blue-300 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primaryFeb">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Acil Durumlara Hazırlıklı Olun
                </h3>
              </div>
            </div>
            <div className="">
              {" "}
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Acil Durumlara Hazırlıklı Olun
              </h3>
              <p className="text-blue-950">
                Ani hastalık veya kaza durumlarında, tamamlayıcı sağlık
                sigortası hızlı erişim sağlayarak tedavi masraflarınızı
                karşılayabilir ve acil durumlarda huzurunuzu korur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper max-w-6xl px-5 max-auto mt-20 text-center md:text-left ">
        <h2 className="text-4xl font-bold ">
          Akla Gelen Birkaç Soru ve Cevapları
        </h2>

        <div className="mt-12">
          <Accordion className="text-lg" type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primaryFeb text-left md:text-left">
                Tamamlayıcı sağlık sigortası, genel sağlık sigortası ile aynı
                mıdır?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left md:text-left">
                Hayır, tamamlayıcı sağlık sigortası genel sağlık sigortasının
                tamamlayıcısıdır. Genel sağlık sigortası belirli bir standart
                kapsama sahipken, tamamlayıcı sağlık sigortası ek koruma sağlar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primaryFeb  text-left md:text-left">
                Hangi sağlık harcamalarını kapsar?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left md:text-left">
                Tamamlayıcı sağlık sigortası, genel sağlık sigortasının
                kapsamadığı veya kısmen karşıladığı sağlık hizmetlerini kapsar.
                Bunlar arasında diş tedavileri, göz muayeneleri, ilave ilaçlar
                ve alternatif tıp gibi hizmetler bulunabilir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primaryFeb  text-left md:text-left">
                Tamamlayıcı sağlık sigortası primleri nasıl belirlenir?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left md:text-left">
                Primler genellikle yaşınız, sağlık geçmişiniz, seçtiğiniz kapsam
                düzeyi ve sigorta şirketinin politikalarına göre belirlenir.
                Bazı sigorta şirketleri ayrıca sigortalının risk profiline göre
                primleri ayarlayabilir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
