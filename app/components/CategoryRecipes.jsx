import Link from "next/link";

export default function CategoryRecipes({ allRecipes }) {
  const categories = [...new Set(allRecipes.map((recipe) => recipe.category))];

  return (
    <div class="col-span-12 md:col-span-3">
      <h3 class="font-bold text-xl">Recipes</h3>
      <ul class="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
