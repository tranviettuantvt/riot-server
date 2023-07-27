import express from "express";
import {deleteFavouriteByID,getFavouriteByUID,getAllFavorite, createRecipe, deleteRecipe,addToFavorite, getAllRecipe, getRecipeByTitle, updateRecipe, getRecipeById, getRecipeByUserId } from "../controller/apiController";

let router =express.Router()

const initAPIRoute =(app) => {
    router.get('/recipes/all', getAllRecipe)
    router.get('/recipes/:ingredient_id', getRecipeById)
    router.get('/recipes/userId/:user_id', getRecipeByUserId)

    router.post("/recipes", createRecipe)
    router.get("/recipes", getRecipeByTitle)
    router.put('/recipes/:ingredient_id', updateRecipe)
    router.delete('/recipes/:ingredient_id', deleteRecipe)

    router.post('/favourite', addToFavorite)
    router.get('/favourite', getAllFavorite)
    router.get('/favourite/:user_id', getFavouriteByUID)
    router.delete('/favourite/:id', deleteFavouriteByID)

    return app.use("/api/", router);
}

export default initAPIRoute