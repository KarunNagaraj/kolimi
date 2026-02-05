"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/ulsoor-2bhk-dining1.jpg",
  "/images/ulsoor-2bhk-bedroom1.jpg",
  "/images/ulsoor-2bhk-bedroom2.jpg",
  "/images/ulsoor-2bhk-kitchen2.jpg",
];

export default function BHKCarousel() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="mt-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
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
