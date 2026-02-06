"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

const images = [
    "/images/307/2BHK FLAT RENT ULSOOR.jpg",
    "/images/307/ulsoor-2bhk-balcony.jpg",
    "/images/307/ulsoor-2bhk-balcony2.jpg",
    "/images/307/ulsoor-2bhk-bathroom1.jpg",
    "/images/307/ulsoor-2bhk-bathroom2.jpg",
    "/images/307/ulsoor-2bhk-bathroom3.jpg",
    "/images/307/ulsoor-2bhk-bathroom4.jpg",
    "/images/307/ulsoor-2bhk-bathroomdoor1.jpg",
    "/images/307/ulsoor-2bhk-bathroomdoor2.jpg",
    "/images/307/ulsoor-2bhk-bedroom1.jpg",
    "/images/307/ulsoor-2bhk-bedroom2.jpg",
    "/images/307/ulsoor-2bhk-bedroom3.jpg",
    "/images/307/ulsoor-2bhk-bedroom4.jpg",
    "/images/307/ulsoor-2bhk-dining1.jpg",
    "/images/307/ulsoor-2bhk-dining2.jpg",
    "/images/307/ulsoor-2bhk-kitchen.jpg",
    "/images/307/ulsoor-2bhk-kitchen2.jpg",
    "/images/307/ulsoor-2bhk-living-room.jpg",
    "/images/307/ulsoor-2bhk-living-room2.jpg",
    "/images/307/ulsoor-2bhk-living-room3.jpg",
];


export default function BHKCarousel() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="mt-6">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false, // keeps autoplay after click/drag
                    }}
                    loop={true}
                    className="rounded-lg"
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={src}
                                alt="2 BHK apartment for rent in Ulsoor Bangalore"
                                width={800}
                                height={400}
                                className="h-40 w-full object-cover rounded-lg cursor-pointer"
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />
        </>
    );
}
