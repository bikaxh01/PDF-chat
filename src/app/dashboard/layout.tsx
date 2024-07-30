import Navbar from "@/components/Navbar";
import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";
import { Separator } from "@/components/ui/separator"
function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div>

        <Navbar/>
      </div>
      <Separator/>
      <div>{children}</div>
    </ClerkLoaded>
  );
}

export default dashboardLayout;
