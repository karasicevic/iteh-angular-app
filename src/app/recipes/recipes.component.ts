import { Component, OnInit } from '@angular/core';
 import { Recipe } from '../recipe.model';
 import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipes: Recipe[];
  searchTerm: string;
 constructor(private recipeService: RecipeService) {
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
    if (!this.searchTerm.trim()) {
      return this.recipes;
    }

    const filteredRecipes = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    return filteredRecipes;
  }

}