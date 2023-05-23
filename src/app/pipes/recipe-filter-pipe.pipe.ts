import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../recipe.model';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {
  transform(recipes: Recipe[], searchText: string): Recipe[] {
    if (!recipes || !searchText) {
      return recipes;
    }

    return recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
