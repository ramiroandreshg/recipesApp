import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Hamburguers',
      'A super tasty hamburguer with delicious mashed potatos',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      , [
        new Ingredient('meat', 2),
        new Ingredient('bread', 1),
        new Ingredient('potatoes', 1)
      ]),
    new Recipe(
      'Chicken wings',
      'Simply the best chicken wings in the city',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      , [
        new Ingredient('chicken wing', 10),
        new Ingredient('french fries', 20)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
