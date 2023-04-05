import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [new Recipe('r1','Pancakes','Milk, Suger, Eggs, Salt, Oil, Flour',"../../assets/images/i1.jpg"),
                                new Recipe('r2', 'Fried egg bread', 'Bread, Eggs, Milk, Salt, Oil',"../../assets/images/i2.jpg")];
  constructor(private http: HttpClient) { }
  getRecipes() {
    return this.recipes.slice();
  }

  getSavedRecipes(){
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
