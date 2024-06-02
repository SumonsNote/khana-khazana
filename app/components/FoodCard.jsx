import Image from "next/image";
import Link from "next/link";
import { ratingStar } from "../utils/rating-util";

export default function FoodCard({ recipe }) {
  return (
    <div class="card">
      <Image
        src={recipe.image}
        class="rounded-md"
        alt={recipe.name}
        width={400}
        height={300}
      />
      <Link href={`details/${recipe.id}`}>
        <h4 class="my-2">{recipe.name}</h4>
      </Link>
      <div class="py-2 flex justify-between text-xs text-gray-500">
        <span>
          {recipe.rating}.0 {ratingStar(recipe.rating)}
        </span>
        <span>By: {recipe.author}</span>
      </div>
    </div>
  );
}
