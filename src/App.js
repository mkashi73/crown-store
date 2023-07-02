import { Routes, Route } from "react-router-dom";
import "./App.css";
import * as React from "react";
import Home from "./routes/home/home";
import Nav from "./routes/navigation/nav";
import SignIn from "./routes/signIn/SignIn";

const Shop = () => {
  return (
    <div>
      <h1>Iam shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* navigation is parent comp */}
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        {/* siblings comes inside the route */}
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
