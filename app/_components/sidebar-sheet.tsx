"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { CalendarIcon, HomeIcon, LogOutIcon, LogInIcon } from "lucide-react"
import { quickSearchOptions } from "../_constants/search"
import { DialogContent, DialogTrigger } from "./ui/dialog"
import { Dialog } from "./ui/dialog"
import { useSession, signOut } from "next-auth/react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import SignInDialog from "./sign-in-dialog"

const SidebarSheet = () => {
  const { data } = useSession()

  const handleLogoutClick = () => {
    signOut()
  }

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                className="h-12 w-12 rounded-3xl"
                src={data?.user?.image ?? ""}
              />
            </Avatar>

            <div>
              <p className="font-bold">{data?.user?.name}</p>
              <p className="text-sm">{data?.user?.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/bookings">
            <CalendarIcon size={18} />
            Agendamentos
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <SheetClose asChild key={option.title}>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  width={18}
                  height={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      {data?.user && (
        <div className="flex flex-col gap-1 py-5">
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
            Sair da Conta
          </Button>
        </div>
      )}
    </SheetContent>
  )
}

export default SidebarSheet
