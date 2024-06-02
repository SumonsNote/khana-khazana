import { getAllRecipes } from "@/db/queries";
import CategoryRecipes from "./CategoryRecipes";
import FoodCard from "./FoodCard";

export default async function Recipes() {
  const allRecipes = await getAllRecipes();

  return (
    <section class="container py-8">
      <div class="grid grid-cols-12 py-4">
        <CategoryRecipes allRecipes={allRecipes} />

        <div class="col-span-12 md:col-span-9">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            {allRecipes.map((recipe) => (
              <FoodCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
