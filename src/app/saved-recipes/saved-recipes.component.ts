import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  savedRecipes: Recipe[]=[new Recipe(2, 'Fried egg bread', 'Bread, Eggs, Milk, Salt, Oil',"../../assets/images/i2.jpg", false)];


    constructor(private recipeService: RecipeService) {
    }
  ngOnInit() {
    this.recipeService.savedRecipes$.subscribe((recipes) => {
      this.savedRecipes = recipes;
    });
  }

  savedRecipesM() {
    return this.savedRecipes;
  }
p:any;
}
