import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import { useUser } from "@clerk/clerk-react";
import ProblemPage from "./Pages/ProblemPage";
import {Toaster} from 'react-hot-toast'
import DashboardPage from './Pages/DashboardPage'
function App() {
  const { isSignedIn , isLoaded } = useUser();
  if(!isLoaded) return null;
  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={'/dashboard'}/>} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to={'/'}/>}/>
        <Route
          path="/ProblemPage"
          element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster toastOptions={{duration: 3000}}/>
    </>
  );
}

export default App;
