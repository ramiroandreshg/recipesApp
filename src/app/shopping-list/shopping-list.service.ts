import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { splitClasses } from '@angular/compiler';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.notifyIngredientChanged();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.notifyIngredientChanged();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.notifyIngredientChanged();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.notifyIngredientChanged();
  }

  private notifyIngredientChanged() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
