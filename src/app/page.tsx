import { Spinner } from "@/components/ui/spinner";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-bottom">
          Denta Glow is coming soon
        </h1>
        <Spinner />

        <div>
          <SignedOut>
            <SignUpButton mode="modal" />
          </SignedOut>
        </div>

        <div>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </ClerkProvider>
  );
}
