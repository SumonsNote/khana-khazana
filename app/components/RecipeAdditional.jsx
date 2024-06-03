"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addFavouriteRecipe } from "../actions";
import { useAuth } from "../hooks/useAuth";
import ShareButtons from "./ShareButton";

export default function RecipeAdditional({ recipe }) {
  const { auth } = useAuth();
  const router = useRouter();

  const isFavourite = auth?.favourites.includes(recipe.id);
  const [fav, setFav] = useState(isFavourite);
  const [toggleShare, setToggleShare] = useState(false);

  const toggleShareButton = () => {
    setToggleShare(!toggleShare);
  };

  const addFav = () => {
    if (auth) {
      addFavouriteRecipe(auth?.id, recipe.id);
      setFav(!fav);
    } else {
      router.push("/login");
    }
  };

  return (
    <div class="flex gap-4 justify-end">
      <div
        onClick={() => addFav()}
        class="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
      >
        {fav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
            stroke="red"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-heart"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        )}
        <span>Favourite</span>
      </div>

      <div
        onClick={() => toggleShareButton()}
        class="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
        {toggleShare && <ShareButtons recipe={recipe} />}
      </div>
    </div>
  );
}
