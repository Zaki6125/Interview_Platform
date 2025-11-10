import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import { useUser } from "@clerk/clerk-react";
import ProblemPage from "./Pages/ProblemPage";
import {Toaster} from 'react-hot-toast'

function App() {
  const { isSignIn } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/ProblemPage"
          element={isSignIn ? <ProblemPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster toastOptions={{duration: 3000}}/>
    </>
  );
}

export default App;
