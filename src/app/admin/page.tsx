import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import AdminDashboardClient from './AdminDashboardClient';

const AdminPage = async () => {

    const user = await currentUser();
    // if user does not come from clerk
    if(!user) redirect("/");

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;
    
    // if user is not an admin
    if(!adminEmail && userEmail !== adminEmail) redirect("/dashboard");
    // if(userEmail !== adminEmail) redirect("/admin");
    return (
    <AdminDashboardClient/>
  ) 
}

export default AdminPage