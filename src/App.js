import React from "react";

import BeerList from "./beerList";

const App = () => {
  return (
    <div className="container">
      <h1 className="fw-bold text-center bg-dark-subtle p-4">- Beer - App -</h1>
      <BeerList />
    </div>
  );
};

export default App;
