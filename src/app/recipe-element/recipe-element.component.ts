import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {SavedRecipesComponent} from "../saved-recipes/saved-recipes.component";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.css']
})
export class RecipeElementComponent implements OnInit{
  @Input() recipe=new Recipe(2, 'Fried egg bread', 'Bread, Eggs, Milk, Salt, Oil',"../../assets/images/i2.jpg",false);

  constructor(private service: RecipeService) { }

  isButtonDisabled=false;
  onSave(recipe: Recipe) {
    if (recipe.isSaved) {
      recipe.isSaved = false;
      this.service.removeSavedRecipe(recipe);
      // const index = this.service.findIndex(r => r.id === recipe.id);
      // if (index !== -1) {
      //   this.service.splice(index, 1);
      // }
    } else {
      recipe.isSaved = true;
      this.service.addSavedRecipe(recipe);
      // this.service.push(recipe);
    }
  }

  ngOnInit(): void {
  }

}
