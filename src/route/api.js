import express from "express";
import { createRecipe, deleteRecipe, getAllRecipe, getRecipeByTitle, updateRecipe, getRecipeById } from "../controller/apiController";

let router =express.Router()

const initAPIRoute =(app) => {
    router.get('/recipes/all', getAllRecipe)
    router.get('/recipes/:ingredient_id', getRecipeById)
    router.post("/recipes", createRecipe)
    router.get("/recipes", getRecipeByTitle)
    router.put('/recipes/:ingredient_id', updateRecipe)
    router.delete('/recipes/:ingredient_id', deleteRecipe)

    return app.use("/api/", router);
}

export default initAPIRoute