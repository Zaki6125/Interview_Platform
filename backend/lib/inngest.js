// import { Inngest } from 'inngest'
// import { connectDB } from './db.js'
// import {User} from '../models/User.js'

// export const inngest = new Inngest({id: "talent-IQ"});
// const syncUser= inngest.createFunction(
//     {id: "sync-user"},
//     {event: 'clerk/user.created'},
//     async ({event}) =>{
//         await connectDB();

//         const {id , email_address, first_name , last_name , imgae_Url} = event.data
//         const newUser = {
//             clerkId: id,
//             email_address: email_address[0]?.email_address,
//             name: `${first_name || ""}, ${last_name || ""}`,
//             profileImage: imgae_Url,
//         }
//         await User.create(newUser);
//     }
// )
// const deleteUserFromDB= inngest.createFunction(
//     {id: "delete-user-from-DB"},
//     {event: 'clerk/user.deleted'},
//     async ({event}) =>{
//         await connectDB();

//         const {id } = event.data
       
//         await User.deleteOne({clerkId: id})
//     }
// export const Functions = [syncUser, deleteUserFromDB]


import { Inngest } from 'inngest';
import { connectDB } from './db.js';
import User from '../models/User.js';

// 🔹 Inngest client
export const inngest = new Inngest({ id: "talent-IQ" });

// 🔹 Function for user creation
const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: 'clerk/user.created' },
  async ({ event }) => {
    console.log("EVENT DATA:", event.data); // Debug

    await connectDB();

    const { id, email_addresses, first_name, last_name, profile_image_url } = event.data;

    const newUser = {
      clerkId: id,
     email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: profile_image_url || "",
    };

    console.log("NEW USER OBJECT:", newUser); // Debug

    try {
      await User.create(newUser);
      console.log("User saved successfully!");
    } catch (err) {
      console.error("Error saving user:", err);
    }
  }
);

// 🔹 Function for user deletion
const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-DB" },
  { event: 'clerk/user.deleted' },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;

    try {
      await User.deleteOne({ clerkId: id });
      console.log(`User with clerkId ${id} deleted`);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }
);

// 🔹 Export functions
export const functions = [syncUser, deleteUserFromDB];
