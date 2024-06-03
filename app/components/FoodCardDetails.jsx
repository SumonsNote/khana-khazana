import Image from "next/image";
import Link from "next/link";
import { getBlurData } from "../utils/blur-generator";
import FoodProcess from "./FoodProcess";
import RecipeAdditional from "./RecipeAdditional";
import RecipeMethod from "./RecipeMethod";

export default async function FoodCardDetails({ recipe }) {
  const { base64 } = await getBlurData(recipe?.image);
  return (
    <>
      <section>
        <div class="grid grid-cols-12 container gap-8 justify-items-center">
          <div class="col-span-12 md:col-span-6">
            <Image
              src={recipe.image}
              height={600}
              width={400}
              alt={recipe.name}
              placeholder="blur"
              blurDataURL={base64}
              class="w-full h-full rounded-lg object-contain"
            />
          </div>
          <div class="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
            <h2 class="font-semibold text-4xl lg:w-8/12 leading-10">
              {recipe.name}
            </h2>
            <Link href={`/category/${recipe.category}`}>
              <p class="text-xs text-[#eb4a36] italic my-2">
                {recipe.category}
              </p>
            </Link>
            <p class="text-gray-600 text-sm my-6 leading-6">
              {recipe.description}
            </p>

            <RecipeMethod recipe={recipe} />

            <RecipeAdditional recipe={recipe} />
          </div>
        </div>
      </section>

      <FoodProcess recipe={recipe} />
    </>
  );
}
