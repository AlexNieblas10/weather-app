import { Form } from "./components/Form";
import React, { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import { Context } from "./context/Context";
import { router } from "./router/routes";
import "./styles/app.css";

function App() {
  const { setLocation, location } = useContext(Context);

  return (
    <main className="mainContainer">
      <Navbar />
      <h1 className="title">Welcome to the weather app</h1>
      <Form setLocation={setLocation} location={location} />
      <RouterProvider router={router}>
      </RouterProvider>
    </main>
  );
}

export default App;
