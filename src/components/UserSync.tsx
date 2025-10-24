"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { syncUser } from "@/lib/actions/users";

function UserSync() {

    const { isSignedIn, isLoaded } = useUser();
    useEffect(() => {
        const handleUserSync = async () => {
            if (isSignedIn && isLoaded) {
                try {
                    await syncUser();
                } catch (error) {
                    console.log("Error in syncUser", error);
                }
            }
        }
        handleUserSync();
    }, [isSignedIn, isLoaded])


    return null;
}

export default UserSync;
