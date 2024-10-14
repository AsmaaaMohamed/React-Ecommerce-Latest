import ReactDOM from "react-dom/client";
import Router  from "./routes/Router";
import {Provider} from "react-redux";
import "./index.css";
import{ store, persistor}  from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
