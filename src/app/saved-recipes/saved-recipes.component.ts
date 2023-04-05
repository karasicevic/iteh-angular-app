import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent {
  recipes: Recipe[];
  isEmpty=true;
  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getSavedRecipes();
    if (this.recipes.length>0){
      this.isEmpty=false;
    }
  }
}
