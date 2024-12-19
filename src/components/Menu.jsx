import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger className="items-center">
        <div aria-label="navigation menu">
          <Menu />
        </div>
      </DropDownMenu.Trigger>
      <DropDownMenu.Portal>
        <DropDownMenu.Content className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
          <DropDownMenu.Item>Site Navigation</DropDownMenu.Item>
          <Link href="/">
            <DropDownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple-100 data-[highlighted]:text-bratwurst">
              Homepage
            </DropDownMenu.Item>
          </Link>
          <Link href="/browse">
            <DropDownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple-100 data-[highlighted]:text-bratwurst">
              Browse
            </DropDownMenu.Item>
          </Link>
          <Link href="/about">
            <DropDownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple-100 data-[highlighted]:text-bratwurst">
              About
            </DropDownMenu.Item>
          </Link>
          <Link href="/contact">
            <DropDownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple-100 data-[highlighted]:text-bratwurst">
              Contact
            </DropDownMenu.Item>
          </Link>

          <DropDownMenu.Arrow className="fill-white" />
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
}
