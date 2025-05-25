"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <span className="sr-only">Open Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-4 drawer-left">
              <ul className="space-y-4">
                <li>
                  <Button variant="link" asChild>
                    <a href="/products">All Products</a>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <a href="/collections">Colecciones</a>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <a href="/about">About us</a>
                  </Button>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>
          <button
            className="flex items-center"
            onClick={() => (window.location.href = "/")}
          >
            <Image
              src="/icon/icon.png"
              alt="Cotton Project"
              width={120}
              height={40}
            />
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Button variant="link" asChild>
            <a href="/products">All Products</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/collections">Colecciones</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/about">About us</a>
          </Button>
        </div>
        <div className="flex items-center space-x-4">
            <Button
              variant="link"
              className="p-3 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
            >
              <a href="/profile">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              </a>
            </Button>
            <Button
              variant="link"
              asChild
              className="p-3 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
            >
              <a href="/cart" className="flex items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
              >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 4h14M10 17a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
              />
              </svg>
              </a>
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;