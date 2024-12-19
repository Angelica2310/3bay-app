"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { GetUser } from "@/utils/actions";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { UserProfile } from "@clerk/clerk-react";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function CstmUserBtn() {
  const [user, setUser] = useState(null);
  //
  useEffect(() => {
    async function fetchUser() {
      const x = await GetUser();
      setUser(x);
    }
    fetchUser();
  }, []);
  return (
    <>
      {user && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar.Root className="inline-flex size-[30px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="size-full rounded-[inherit] object-cover"
                src={user.image_url}
                alt={user.name}
              />
              <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium">
                {user.name}
              </Avatar.Fallback>
            </Avatar.Root>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
              <DropdownMenu.Item>Hello {user.username}</DropdownMenu.Item>
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple100 data-[highlighted]:text-bratwurst">
                <Link href="/profile">View Profile</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple100 data-[highlighted]:text-bratwurst">
                <SignOutButton />
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="m-[5px] h-px bg-black" />
              <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-black outline-none data-[highlighted]:bg-purple100 data-[highlighted]:text-bratwurst">
                <Link href="/clerk">Manage Clerk Account</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      )}
    </>
  );
}
