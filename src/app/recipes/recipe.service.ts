import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Test Recipe',
    //   'This is just a test',
    //   'https://s2-receitas.glbimg.com/dOFKHQfqtZEqGTLm9dYDWAQG75M=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/r/F/8mYkcQQNuwDZBx51XtiA/manjar-receita.jpg'
    // ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
