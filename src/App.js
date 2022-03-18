import PokemonList from "./components/PokemonList";
import React from "react";

function App() {
  return (
    <>
      <header className="bg-gray-800">
        <section className="flex bg-gray-100 py-24 justify-center">
          <div className="p-12 text-center max-w-2xl">
            <h1 className="md:text-3xl text-3xl font-bold"> React-Dex</h1>
            <h2 className="text-xl font-normal mt-4">
              Simple Pokedex made using ReactJS and TailwindCSS
            </h2>
          </div>
        </section>
      </header>
      {/* Main Content */}
      <div>
        <PokemonList />
      </div>
    </>
  );
}

export default App;
