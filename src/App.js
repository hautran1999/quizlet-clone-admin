import React from "react";
import Router from "./router";
import { AuthProvider } from "./context/auth";
import "./App.scss";
const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
