"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
// import { useState } from "react";

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[12px] font-semibold border-r font-mont text-gray-600">HOME</NavigationMenuTrigger>
          <NavigationMenuContent>
          <motion.ul className="flex flex-col w-[400px] space-y-3 md:w-[300px] lg:w-[200px] "
              initial={{ height: 0 }}
              animate={{ height: 160 }}
              transition={{ duration: .5 }}
            >
              <motion.li className="py-3 pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Homepage1</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Homepage2</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Homepage3</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Homepage4</motion.li>
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[12px] font-semibold font-mont border-r text-gray-600">PAGES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul className="flex flex-col w-[400px] space-y-3 md:w-[300px] lg:w-[220px] "
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              transition={{ duration: .5 }}
            >
              <motion.li className="py-3 pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >About Us</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >About Us( NEW )</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Our Teams</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Our Departments</motion.li>
              <motion.li className="pb-2 items-center pl-4 text-black/60 text-[12px] cursor-pointer font-semibold font-mont border-b"
                initial={{ x: 0 }}
                whileHover={{ color: '#008000', x: 5 }}
                transition={{ duration: .5 }}
              >Pricing Plan</motion.li>
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
