import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import React from "react";
import image from "@/public/assets/images/about2.jpg";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";

const page = () => {
  return (
    <>
      <div className="wrapper">
        <div className="max-w-screen-xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-16">
            <div className="flex mx-auto items-center">
              <Image
                className="object-cover"
                src={image}
                alt=""
                width={800}
                height={800}
              />
            </div>
            <div className="">
              <div className="flex items-center font-[Caveat] font-semibold text-[26px] text-primaryFeb">
                <div className="w-[60px] h-[2px] bg-primaryFeb mx-[20px]"></div>
                <div className="">FEB Sigorta Hakkında</div>
              </div>
              <div className="text-[#171a1d] leading-[50px] text-[50px] font-medium mt-[20px]">
                <div className="">Finansal Hizmetlere Dayanan</div>
                <div className="hidden md:block">Güvenilir Hizmetler</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14 mt-10">
                <div className="">
                  <div className="flex mb-5">
                    <div className="text-[#ff5100] text-[14px]">
                      <FontAwesomeIcon
                        className="bg-primaryFeb"
                        icon={faCheckSquare}
                      />
                      <i className="fa-check-square"></i>
                    </div>
                    <div className="ps-4">
                      <div className="text-[20px] text-[#171a1d] font-medium mb-[10px]">
                        Güvenilirlik
                      </div>
                      <div className="">
                        Finansal güçlüğe düşmeden yatırımlarınızı korurken, FEB
                        Sigorta ile güven içinde olabilirsiniz.
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-5">
                    <div className="text-[#ff5100] text-[14px]">
                      <i className="far fa-check-square"></i>
                    </div>
                    <div className="ps-4">
                      <div className="text-[20px] text-[#171a1d] font-medium mb-[10px]">
                        Müşteri Memnuniyeti
                      </div>
                      <div className="">
                        Müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi
                        hizmeti sunmak için buradayız.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex mb-[30px]">
                    <div className="text-[#ff5100] text-[14px]">
                      <i className="far fa-check-square"></i>
                    </div>
                    <div className="ps-4">
                      <div className="text-[20px] text-[#171a1d] font-medium mb-[10px]">
                        Yenilikçi Çözümler,
                      </div>
                      <div className="">
                        İhtiyaçlarınıza uygun özelleştirilmiş sigorta
                        çözümleriyle sizi koruyoruz.
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-[30px]">
                    <div className="text-[#ff5100] text-[14px]">
                      <i className="far fa-check-square"></i>
                    </div>
                    <div className="ps-4">
                      <div className="text-[20px] text-[#171a1d] font-medium mb-[10px]">
                        Güvenle Geleceğe Bakın
                      </div>
                      <div className="">
                        FEB Sigorta ile, geleceğe daha güvenle
                        ilerleyebilirsiniz.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
