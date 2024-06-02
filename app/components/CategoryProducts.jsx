import { getRecipesByCategoryId } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";
import { ratingStar } from "../utils/rating-util";

export default async function CategoryProducts({ categoryId }) {
  const categoryRecipe = await getRecipesByCategoryId(categoryId);

  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">{categoryId}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {categoryRecipe.map((recipe) => (
            <div key={recipe.id} className="card">
              <Image
                src={recipe.image}
                width={300}
                height={400}
                className="rounded-md"
                alt="Chef John's Turkey Sloppy Joes"
              />
              <Link href={`details/${recipe.id}`}>
                <h4 className="my-2">{recipe.name}</h4>
              </Link>
              <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>
                  {recipe.rating}.0 {ratingStar(recipe.rating)}
                </span>
                <span>By: {recipe.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
