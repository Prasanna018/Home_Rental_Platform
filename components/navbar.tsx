"use client";

import { Home, Building2, Heart, MessageSquare, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Properties", href: "/properties", icon: Building2 },
  { name: "Favorites", href: "/favorites", icon: Heart },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Profile", href: "/profile", icon: UserCircle },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}