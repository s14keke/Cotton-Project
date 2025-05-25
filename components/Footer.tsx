"use client";

import React from "react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

// TikTokIcon Component
interface TikTokIconProps {
  color?: string;
  className?: string;
}

const TikTokIcon: React.FC<TikTokIconProps> = ({ color = "#000000", className }) => {
  return (
    <svg
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t mt-12">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center space-y-10">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-bold uppercase">Suscribite al newsletter</h3>
          <p className="text-sm text-gray-400">Novedades y descuentos exclusivos</p>
          <div className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Email"
              className="w-64 bg-black border-white text-white placeholder:text-gray-400"
            />
            <Button variant="outline" size="icon" className="border-white text-black">
              →
            </Button>
          </div>
        </div>
        <div>
          <Image src="/icon/footer_icon.png" alt="Logo" width={100} height={40} />
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/cotton_arg/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="h-7 w-7 hover:scale-110 transition-transform cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@cotton_company" target="_blank" rel="noopener noreferrer">
            <TikTokIcon color="#ffffff" className="h-7 w-7 hover:scale-110 transition-transform cursor-pointer" />
          </a>
        </div>
        <div className="text-center">
          <a href="/contact" className="text-sm hover:underline">Contact</a>
        </div>
        <div className="text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Cotton. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
