import { Component, OnInit } from '@angular/core';
 import { Recipe } from '../recipe.model';
 import { RecipeService } from '../recipe.service';
import { RecipeFilterPipe } from '../pipes/recipe-filter-pipe.pipe';
import {SavedRecipesComponent} from "../saved-recipes/saved-recipes.component";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeFilterPipe]
})
export class RecipesComponent implements OnInit{

  recipes: Recipe[];
  searchTerm: string;
 constructor(private recipeService: RecipeService, private recipeFilterPipe: RecipeFilterPipe) {
   this.recipes=this.recipeService.getRecipes();
   this.searchTerm="";
 }

   ngOnInit() {
    this.getRecipes();
  }
  p:any;


   getRecipes(): void {
     this.recipeService.getRecipes();//.subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipes = recipes;
    //   },
    //   (error: Error) => {
    //     console.log(error);
    //   }
    // );
 }

  clearSearchTerm():void{
     this.searchTerm="";

  }
  filterRecipes(): Recipe[] {
    if (!this.recipes || !this.searchTerm) {
      return this.recipes;
    }

    return this.recipeFilterPipe.transform(this.recipes, this.searchTerm);
  }
  /*
  filterRecipes(): Recipe[] {
    if (!this.searchTerm.trim()) {
      return this.recipes;
    }

    const filteredRecipes = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return filteredRecipes;
  }*/

}
