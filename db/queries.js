import { recipesModel } from "@/app/models/recipes-models";
import { userModel } from "@/app/models/users-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/app/utils/data-util";
import mongoose from "mongoose";
import { dbConnect } from "./connectDB";

async function getAllRecipes() {
  await dbConnect();
  const allRecipes = await recipesModel.find().lean();
  return replaceMongoIdInArray(allRecipes);
}

async function getRecipeById(recipeId) {
  await dbConnect();
  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    return null;
  }
  const recipe = await recipesModel.findById(recipeId).lean();
  return replaceMongoIdInObject(recipe);
}

async function getRecipesByCategoryId(categoryId) {
  await dbConnect();
  const recipes = await recipesModel.find({ category: categoryId }).lean();
  return replaceMongoIdInArray(recipes);
}

async function createUser(user) {
  await dbConnect();
  return await userModel.create(user);
}

async function findUserByCredential(credentials) {
  await dbConnect();

  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function addFavourites(userId, recipeId) {
  await dbConnect();
  const user = await userModel.findById(userId);

  if (user) {
    const foundUser = user.favourites.find((id) => id.toString() === recipeId);

    if (foundUser) {
      user.favourites.pull(recipeId);
    } else {
      user.favourites.push(recipeId);
    }
    user.save();
  }
}

export {
  addFavourites,
  createUser,
  findUserByCredential,
  getAllRecipes,
  getRecipeById,
  getRecipesByCategoryId,
};
