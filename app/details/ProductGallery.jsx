"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800">
        <Image
          src={mainImage}
          alt="Product Image"
          className="h-full w-full object-cover"
          width={600}
          height={600}
          draggable={false}
        />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.slice(0, 5).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className={`aspect-square overflow-hidden rounded-lg border-2 ${
              mainImage === img
                ? "border-primary-500"
                : "border-transparent hover:border-primary-500"
            } bg-white dark:bg-gray-800`}
          >
            <Image
              src={img}
              alt={`Product ${idx + 1}`}
              className="h-full w-full object-cover"
              width={200}
              height={200}
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
