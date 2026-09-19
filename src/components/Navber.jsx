


"use client";

// import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navber = () => {

//   const userData = authClient.useSession();

//   const user = userData.data?.user;

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

  return (
    <div className="  border-b border-b-gray-200 px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        
        <div className="flex gap-2 items-center">
          <Image
          
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />

          <h3 className="font-black text-lg">Tiles Gallery</h3>
        </div>


       
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>

       
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>


      
        <div className="hidden md:flex gap-4">

         
            <ul className="flex items-center gap-3 text-sm">
             

              <li>
                <Link href={"/auth/login"}>Log In</Link>
              </li>
            </ul>
          
      
            <div className="flex gap-3 items-center">

              {/* <Avatar>
                <Avatar.Image
                  alt={user?.name || "User"}
                  referrerPolicy="no-referrer"
                  src={user?.image}
                />

                <Avatar.Fallback>
                
                </Avatar.Fallback>
              </Avatar> */}

              {/* <Button>
                SignOut
              </Button> */}

            </div>
        

        </div>


      
        <div className="md:hidden">
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

                <Dropdown.Item id="home" textValue="Home">
                  <Link href="/">
                    <Label>Home</Label>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item id="all-photos" textValue="All Photos">
                  <Link href="/all-photos">
                    <Label>All Photos</Label>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item id="pricing" textValue="Pricing">
                  <Link href="/pricing">
                    <Label>Pricing</Label>
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item id="profile" textValue="Profile">
                  <Link href="/profile">
                    <Label>Profile</Label>
                  </Link>
                </Dropdown.Item>

                
              
                  <>
                   
                    <Dropdown.Item id="signin" textValue="SignIn">
                      <Link href="/auth/login">
                        <Label>log In</Label>
                      </Link>
                    </Dropdown.Item>
                  </>
                

{/*                
                  <Dropdown.Item
                    id="signout"
                    textValue="SignOut"
                    variant="danger"
                  
                  >
                    <Label>SignOut</Label>
                  </Dropdown.Item> */}
             

              </Dropdown.Menu>
            </Dropdown.Popover>

          </Dropdown>
        </div>

      </nav>
    </div>
  );
};

export default Navber;

