import { db } from './db';
import { currentUser } from '@clerk/nextjs/server';

export default async function checkUser() {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  // console.log(user);
  const User = await db.user.findUnique({
    where: { 
      clerkUserId: user.id,
    },
  });
  if (User) {
    return User;
  }
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
    },
  });
  return newUser;
}
