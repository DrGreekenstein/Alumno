import checkUser from "@/lib/checkUser";
import { SignInButton, SignUpButton,SignedOut } from "@clerk/nextjs";

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await checkUser();

  return (
    <nav className="flex gap-4 justify-end p-4">
      <SignedOut>
        <SignInButton>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign In</button>
        </SignInButton>
        <SignUpButton>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
        </SignUpButton>
      </SignedOut>
      
    </nav>
  );
} 
