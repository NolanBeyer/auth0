import React from "react";
import Navbar from "./components/Navbar";
import { useAuth0 } from "./react-auth0-spa";
import routes from "./routes";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <Navbar />
        {routes}
      </header>
    </div>
  );
}

export default App;
