import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to My 1st Project...</h1>

      <SignedOut>
        {/* Ye tab chalega jab user logged out hoga */}
        <SignInButton mode="modal">
          <button>Click me to Sign In</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        {/* Ye tab chalega jab user logged in hoga */}
        <h2>Welcome back!</h2>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </>
  );
}

export default App;
