"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addFavouriteRecipe } from "../actions";
import { useAuth } from "../hooks/useAuth";

export default function RecipeAdditional({ recipe }) {
  const { auth } = useAuth();
  const router = useRouter();

  const isFavourite = auth?.favourites.includes(recipe.id);
  const [fav, setFav] = useState(isFavourite);

  const addFav = () => {
    if (auth) {
      addFavouriteRecipe(auth?.id, recipe.id);
      setFav(!fav);
    } else {
      router.push("/login");
    }
  };

  const shareData = {
    title: recipe.name,
    text: `Check out this recipe: ${recipe.name}`,
    url: window.location.href,
  };

  const shareRecipe = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="flex gap-4 justify-end">
      <div
        onClick={() => addFav()}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
      >
        {fav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        )}
        <span>Favourite</span>
      </div>

      <div
        onClick={() => shareRecipe()}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
}
