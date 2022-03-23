import { Header } from "./components/Header";
import "./styles/index.scss";
import { DataFilter } from "./components/DataFilter";
import { DataMap } from "./components/DataMap";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="w-default mx-24">
      <Header />
      <div className="flex items-center flex-col mt-2 mx-24 h-full w-default bg-gray-400 pb-24 pt-4">
        <h1 className="text-center text-gray-800 font-bold title-size">
          Covid Daily Cases
        </h1>

        {/* <DataFilter min="1" max="10" /> */}

        <DataMap />
      </div>
    </div>
  );
}

export default App;
