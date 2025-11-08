import { SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to the My 1st Project...</h1>
      <SignedOut>
        <SignInButton mode="model">
          <button>click me</button>
        </SignInButton>
      </SignedOut>
      
      <SignIn>
        <SignOutButton/>
      </SignIn>
      <UserButton/>
    </>
  );
}

export default App;
