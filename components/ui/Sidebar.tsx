"use client";
import React from "react";
import { SidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {SidebarLinks.map((links) => {
          const isActive =
            pathname === links.route || pathname.startsWith(links.route);
          return (
            <Link
              href={links.route}
              key={links.lable}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={links.imgUrl}
                alt={links.lable}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {links.lable}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
