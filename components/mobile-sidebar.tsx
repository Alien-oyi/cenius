"use client";

import { Menu } from "lucide-react";
import { Button }  from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import  SideBar  from "./SideBar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {

  const [isMouted, setIsMoutend]= useState(false);
  useEffect(()=> {
    setIsMoutend(true)
  },[]);
  if (!isMouted) {
    return null;
  }
  return (
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SideBar />
        </SheetContent>
      </Sheet>
  );
};

export default MobileSidebar;