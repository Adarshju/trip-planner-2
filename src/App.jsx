import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero";
import CreateTrip from "./create-trip/CreateTrip";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Rootlayout from "./Rootlaout/Rootlayout";
import Viewtrip from "./view-trip/[tripId]";
import MyTrips from "./my-trips";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero  */}
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rootlayout />}>
              <Route index element={<Hero />} />
              <Route path="/create-trip" element={<CreateTrip />} />
              <Route path="/view-trip/:tripId" element={<Viewtrip />} />
              <Route path="/my-trips" element={<MyTrips />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
