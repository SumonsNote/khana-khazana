export default function RecipeMethod({ recipe }) {
  return (
    <div class="flex gap-4 justify-center divide-x my-12">
      <div class="flex-1 text-center">
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
          class="mx-auto"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 7v5l3 3" />
        </svg>
        <h3 class="font-medium text-lg text-gray-700 mt-2">Prep time</h3>
        <p class="text-gray-500 text-sm">{recipe.activeTime}</p>
      </div>
      <div class="flex-1 text-center">
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
          class="mx-auto"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.5 17h11" />
          <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
          <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
        </svg>
        <h3 class="font-medium text-lg text-gray-700 mt-2">Cook time</h3>
        <p class="text-gray-500 text-sm">{recipe.totalTime}</p>
      </div>
      <div class="flex-1 text-center">
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
          class="mx-auto"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
        <h3 class="font-medium text-lg text-gray-700 mt-2">Servings</h3>
        <p class="text-gray-500 text-sm">{recipe.serves}</p>
      </div>
    </div>
  );
}
