"use client"
import { Avatar} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import React from 'react';
import { UpdateUserModal } from "@/components/UpdateUserModal";


const ProfilePage = () => {

    const userData = authClient.useSession();

    const user = userData.data?.user;

    console.log(user)

    return (
        <div>

            <Card className=" w-xl mx-auto flex flex-col items-center border mt-5">
                 <Avatar className="h-20 w-20">
                        <Avatar.Image alt="John Doe"
                        referrerPolicy="no-referrer" src={user?.image} />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                      </Avatar>

                      <h2 className="font-bold">{user?.name}</h2>
                      <p className="text-muted">{user?.email}</p>

                     <UpdateUserModal></UpdateUserModal>
            </Card>
            
        </div>
    );
};

export default ProfilePage;

