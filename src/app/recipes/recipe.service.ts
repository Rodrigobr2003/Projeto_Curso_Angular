import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from '../shopping-list/shoppin-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private slService: ShoppinListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is just a test',
      'https://s2-receitas.glbimg.com/dOFKHQfqtZEqGTLm9dYDWAQG75M=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/r/F/8mYkcQQNuwDZBx51XtiA/manjar-receita.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),

    new Recipe(
      'Test Recipe',
      'This is just a test',
      'https://s2-receitas.glbimg.com/dOFKHQfqtZEqGTLm9dYDWAQG75M=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/r/F/8mYkcQQNuwDZBx51XtiA/manjar-receita.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
