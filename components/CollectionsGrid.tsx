'use client';

import Image from "next/image";

const collections = [
  {
    title: "By our own",
    imageUrl: "/fotos/IMG_2501.JPEG", 
  },
  {
    title: "Improvising out of orbit",
    imageUrl: "/fotos/IMG_2463.JPEG",
  },
  {
    title: "DROP 3",
    imageUrl: "/fotos/buzo resaltado_Original.PNG",
  },
  {
    title: "Verão na Cotton",
    imageUrl: "/fotos/8.png",
  },
];

export default function CollectionsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {collections.map((collection, index) => (
        <div
          key={index}
          className="relative group h-[400px] w-full cursor-pointer overflow-hidden"
        >
          <Image
            src={collection.imageUrl}
            alt={collection.title}
            fill
            className="object-cover transition duration-500 group-hover:brightness-100 brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-3xl font-bold">{collection.title}</h3>
            <p className="mt-2 text-sm tracking-wide">SHOP NOW</p>
          </div>
        </div>
      ))}
    </div>
  );
}
