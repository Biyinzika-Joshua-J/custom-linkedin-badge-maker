"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeMenuItems } from "@/constants/NavbarItems";

export function ThemeDropdownMenu() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {
                ThemeMenuItems.map((item, idx) => (
                    <DropdownMenuItem className="cursor-pointer" onClick={()=>{}}> 
                        <span>
                            <FontAwesomeIcon icon={item.icon} className="text-lg mr-2"/>
                        </span>
                        <span className="ml-2 text-lg font-semibold">
                        {item.text}
                        </span>
                    </DropdownMenuItem>
                ))
            }
         
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
