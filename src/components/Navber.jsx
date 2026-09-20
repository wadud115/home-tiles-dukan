"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {
  const pathname = usePathname();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

 
  const navLinkClass = (path) =>
    `rounded-lg px-3 py-2 transition-all duration-200 ${
      pathname === path
        ? "bg-pink-500 text-white shadow-sm"
        : "text-gray-700 hover:bg-pink-50 hover:text-pink-500"
    }`;

  return (
    <div className="border-b border-gray-200 px-2">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between py-3">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              loading="eager"
              width={50}
              height={50}
              className="h-auto w-auto object-cover"
            />

            <h3 className="text-lg font-black">
              Tiles Gallery
            </h3>
          </div>
        </Link>

     
        <ul className="hidden items-center gap-2 text-sm font-semibold md:flex">
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-tiles"
              className={navLinkClass("/all-tiles")}
            >
              All Tiles
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={navLinkClass("/profile")}
            >
              My Profile
            </Link>
          </li>
        </ul>

      
        <div className="hidden gap-4 font-semibold md:flex">
          {!user && (
            <Link
              href="/auth/login"
              className={navLinkClass("/auth/login")}
            >
              Log In
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image
                  alt={user?.name || "User"}
                  referrerPolicy="no-referrer"
                  src={user?.image}
                />

                <Avatar.Fallback>
                  {user?.name?.[0]?.toUpperCase()}
                </Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleLogOut}
                variant="danger"
              >
                Log Out
              </Button>
            </div>
          )}
        </div>

    
        <div className="font-semibold md:hidden">
          <Dropdown>
            <Button
              aria-label="Menu"
              variant="secondary"
              className="text-xl"
            >
              ☰
            </Button>

            <Dropdown.Popover>
              <Dropdown.Menu>

                {/* Home */}
                <Dropdown.Item
                  id="home"
                  textValue="Home"
                >
                  <Link
                    href="/"
                    className={`block w-full rounded-md px-2 py-2 ${
                      pathname === "/"
                        ? "text-pink-500 "
                        : ""
                    }`}
                  >
                    <Label>Home</Label>
                  </Link>
                </Dropdown.Item>

              
                <Dropdown.Item
                  id="all-tiles"
                  textValue="All Tiles"
                >
                  <Link
                    href="/all-tiles"
                    className={`block w-full rounded-md px-2 py-2 ${
                      pathname === "/all-tiles"
                        ? "text-pink-500 "
                        : ""
                    }`}
                  >
                    <Label>All Tiles</Label>
                  </Link>
                </Dropdown.Item>

             
                <Dropdown.Item
                  id="profile"
                  textValue="Profile"
                >
                  <Link
                    href="/profile"
                    className={`block w-full rounded-md px-2 py-2 ${
                      pathname === "/profile"
                        ? "text-pink-500 "
                        : ""
                    }`}
                  >
                    <Label>Profile</Label>
                  </Link>
                </Dropdown.Item>

                
                {!user && (
                  <Dropdown.Item
                    id="signin"
                    textValue="Sign In"
                  >
                    <Link
                      href="/auth/login"
                      className={`block w-full rounded-md px-2 py-2 ${
                        pathname === "/auth/login"
                          ? "text-pink-500 "
                          : ""
                      }`}
                    >
                      <Label>Log In</Label>
                    </Link>
                  </Dropdown.Item>
                )}

          
                {user && (
                  <Dropdown.Item
                    id="signout"
                    textValue="Sign Out"
                    variant="danger"
                    onAction={handleLogOut}
                  >
                    <Label>Log Out</Label>
                  </Dropdown.Item>
                )}

              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default Navber;