"use server";

const {
  createUser,
  findUserByCredential,
  addFavourites,
} = require("@/db/queries");
const { redirect } = require("next/navigation");

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");
    const found = await findUserByCredential(credentials);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addFavouriteRecipe(userId, recipeId) {
  try {
    await addFavourites(userId, recipeId);
  } catch (error) {
    throw error;
  }
}

export { addFavouriteRecipe, performLogin, registerUser };
