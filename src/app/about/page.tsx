"use client"

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-2xl mb-8">
        <Image
          src="/fotos/IMG_6372.png" 
          alt="Cotton Project Team"
          width={800}
          height={1067}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-s">About Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Welcome to Cotton Project! We are passionate about creating comfortable, stylish, and high-quality clothing inspired by the beauty of nature and the spirit of friendship. Our journey began with a simple idea: to design apparel that feels as good as it looks, perfect for every adventure. Thank you for being part of our story!
      </p>
    </div>
  );
}

