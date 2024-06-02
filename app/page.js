import { Suspense } from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense
        fallback={
          <h2 className="text-2xl justify-center items-center flex"></h2>
        }
      >
        <Recipes />
      </Suspense>
    </main>
  );
}
