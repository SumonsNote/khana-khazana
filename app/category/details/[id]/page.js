import FoodCardDetails from "@/app/components/FoorCardDetails";
import { getRecipeById } from "@/db/queries";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { id } }) {
  const recipe = await getRecipeById(id);

  return {
    title: `Khana Khazana - ${recipe.name}`,
    description: recipe.description,
    openGraph: {
      images: [recipe.image],
    },
  };
}

export default async function CategoryDetailsPage({ params: { id } }) {
  const recipe = await getRecipeById(id);
  if (!recipe) {
    notFound();
    return null;
  }
  return <FoodCardDetails recipe={recipe} />;
}
