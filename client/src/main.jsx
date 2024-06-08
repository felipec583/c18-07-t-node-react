import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.PROD == true ? "https://c18-07-t-node-react-rcb1.onrender.com" : "http://localhost:3000"

if (import.meta.env.PROD == false) {
  console.log("Base url?", axios.defaults.baseURL)
}

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="534518513068-fhuhda3fseidliqiip21bofo47ednh9l.apps.googleusercontent.com">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>

);
