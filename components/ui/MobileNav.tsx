import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="logo"
              className="max-sm:size-10"
            />
            <p className="text-[26x] font-extrabold text-white max-sm:hidden">
              Zoom
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px )] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {SidebarLinks.map((links) => {
                  const isActive =
                    pathname === links.route ||
                    pathname.startsWith(links.route);
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
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
