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
  "/images/G4/3BHK Bangalore Flat Rent Common Room.jpg",
  "/images/G4/3BHK Ulsoor Apartment Balcony 1 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Balcony 2 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Balcony 3 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Balcony Attached.jpg",
  "/images/G4/3BHK Ulsoor Apartment Common Room Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Common Room.jpg",
  "/images/G4/3BHK Ulsoor Apartment Dining 1 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Dining 3Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Dining 5 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Dining 6 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Dining2Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Floor Plan Rent.gif",
  "/images/G4/3BHK Ulsoor Apartment Kitchen 1 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Kitchen 2 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Living 1 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Living 4 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Living 5 Rent.jpg",
  "/images/G4/3BHK Ulsoor Apartment Living1.jpg",
  "/images/G4/3BHK Ulsoor Apartment Utility Door Rent.jpg"
];




export default function G4BHKCarousel() {
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
                                alt="3 BHK apartment for rent in Ulsoor Bangalore"
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
