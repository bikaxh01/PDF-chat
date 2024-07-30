import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function Navbar() {
  return (
    <div className=" flex justify-between px-2 shadow-sm">
      <Link href="/dashboard">
        <h2 className=" text-3xl">
          PDF <span className=" text-red-500">Chat</span>
        </h2>
      </Link>
      <SignedIn>
        <div className=" flex justify-center space-x-6 py-1 ">
          <Button asChild variant={'link'} className=" bg-red-500 hover:bg-red-600 h-8">
            <Link href={"/dashboard/pricing"}>Pricing</Link>
          </Button>
          <Button asChild variant={'link'} className="  hover:bg-gray-200 h-8">
            <Link href={"/dashboard"}>My Document</Link>
          </Button>
          <Button asChild variant={'link'} className=" hover:bg-gray-200 h-8">
            <Link href={"/dashboard/upload"}><FilePlus2/></Link>
          </Button>
          {/* 
            upgrade button
           */}
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Navbar;
