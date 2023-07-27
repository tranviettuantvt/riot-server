const { Favourite } = require("../model/favorite");
const { Recipe } = require("../model/recipes");

let getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let createRecipe = async (req, res) => {
  const { user_id, title, step, material, origin, time, healthy, image } =
    req.body;
  try {
    const recipe = await Recipe.create({
      user_id: user_id,
      title: title,
      step: step,
      material: material,
      origin: origin,
      time: time,
      healthy: healthy,
      image: image,
    });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

let getRecipeByTitle = async (req, res) => {
  const { title } = req.query;
  try {
    const recipe = await Recipe.findAll({ where: { title: title } });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let updateRecipe = async (req, res) => {
  const { ingredient_id } = req.params;
  const { user_id, title, step, material, origin, time, healthy, image } =
    req.body;
  try {
    const recipe = await Recipe.findByPk(ingredient_id);
    if (!recipe) res.status(404).json({ error: "Recipe not found" });
    else {
      recipe.user_id = user_id;
      recipe.title = title;
      recipe.step = step;
      recipe.material = material;
      recipe.origin = origin;
      recipe.time = time;
      recipe.healthy = healthy;
      recipe.image = image;
      await recipe.save();
      res.status(200).json(recipe);
    }
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

let deleteRecipe = async (req, res) => {
  const { ingredient_id } = req.params;
  try {
    const recipe = await Recipe.findByPk(ingredient_id);
    if (!recipe) {
      res.status(404).json({ error: "Recipe not found" });
    } else {
      await recipe.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let getRecipeById = async (req, res) => {
  const { ingredient_id } = req.params;
  try {
    const recipe = await Recipe.findByPk(ingredient_id);
    if (!recipe) {
      res.status(404).json({ error: "Recipe not found" });
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let getRecipeByUserId = async (req, res) => {
  const { user_id } = req.params;
  try {
    const recipe = await Recipe.findAll({ where: { user_id: user_id } });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getFavouriteByUID = async (req, res) => {
  const { user_id } = req.params;
  try {
    const recipe = await Favourite.findAll({
      where: { user_id: user_id },
    });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllFavorite = async (req, res) => {
  try {
    const recipes = await Favourite.findAll();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const addToFavorite = async (req, res) => {
  const { user_id, ingredient_id } = req.body;
  try {
    console.log(user_id, ingredient_id);
    const recipeFavorite = await Favourite.create({
      user_id: user_id,
      ingredient_id: ingredient_id,
    });
    res.status(201).json(recipeFavorite);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteFavouriteByID = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Favourite.findByPk(id);
    if (!recipe) {
      res.status(404).json({ error: "Recipe not found" });
    } else {
      await recipe.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteFavouriteByID,
  addToFavorite,
  getAllFavorite,
  getAllRecipe,
  createRecipe,
  getRecipeByTitle,
  updateRecipe,
  deleteRecipe,
  getRecipeById,
  getRecipeByUserId,
  getFavouriteByUID,
};
