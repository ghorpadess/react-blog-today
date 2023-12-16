import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
