import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [new Recipe(16,'Pancakes','Milk, Suger, Eggs, Salt, Oil, Flour','../../assets/images/i1.jpg',false),
                                new Recipe(17, 'Fried egg bread', 'Bread, Eggs, Milk, Salt, Oil',"../../assets/images/i2.jpg",false),
                                new Recipe(1, 'Spaghetti Carbonara', '1 pound spaghetti, 6 slices bacon, diced, 4 garlic cloves, minced, 2 eggs, 1/2 cup grated Parmesan cheese, Salt and black pepper, to taste', '../../assets/images/i3.jpg',false),
                                new Recipe(2, 'Grilled Chicken Salad', '2 boneless, skinless chicken breasts, 1/4 cup olive oil, Salt and black pepper, to taste, 1 head of romaine lettuce, chopped, 1/2 cup cherry tomatoes, halved, 1/4 cup red onion, thinly sliced, 1/4 cup crumbled feta cheese', '../../assets/images/i4.jpg',false),
                                new Recipe(3, 'Beef Stroganoff', '1 pound beef sirloin, thinly sliced, 2 tablespoons butter, 1 onion, diced, 1 garlic clove, minced, 1 cup beef broth, 1/2 cup sour cream, Salt and black pepper, to taste, 1 tablespoon chopped fresh parsley, for garnish', '../../assets/images/i5.jpg',false),
                                 new  Recipe(4, 'Fish Tacos', '1 pound white fish fillets, 2 tablespoons olive oil, Salt and black pepper, to taste, 1/2 teaspoon chili powder, 1/2 teaspoon cumin, 1/4 teaspoon garlic powder, 8 corn tortillas, 1 cup shredded red cabbage, 1 avocado, sliced, 1/4 cup chopped fresh cilantro, 1 lime, cut into wedges', '../../assets/images/i6.jpg',false),
                                  new Recipe(5, 'Vegetable Stir-Fry', '2 tablespoons vegetable oil, 1 onion, sliced, 2 garlic cloves, minced, 2 bell peppers, sliced, 2 cups sliced mushrooms, 1 cup broccoli florets, 1/4 cup soy sauce, 1 tablespoon cornstarch, Salt and black pepper, to taste, Cooked rice, for serving', '../../assets/images/i7.jpg',false),
                                new  Recipe(6, 'Beef and Broccoli', '1 pound flank steak, thinly sliced, 2 tablespoons cornstarch, 2 tablespoons vegetable oil, 2 garlic cloves, minced, 1 tablespoon grated fresh ginger, 1/4 cup soy sauce, 1/4 cup oyster sauce, 1 tablespoon brown sugar, 1 head of broccoli, cut into florets', '../../assets/images/i8.jpg',false),
                                  new Recipe(7, 'Roasted Vegetables', '2 cups chopped vegetables (such as carrots, bell peppers, zucchini, and onions), 2 tablespoons olive oil, Salt and black pepper, to taste, 1 teaspoon dried thyme, 1 teaspoon dried rosemary', '../../assets/images/i9.jpg',false),
                                  new Recipe(8, 'Chicken Curry', '1 pound boneless, skinless chicken breasts, cut into bite-size pieces, 2 tablespoons vegetable oil, 1 onion, chopped, 2 garlic cloves, minced, 1 tablespoon grated fresh ginger, 2 tablespoons curry powder, 1 can (14 ounces) diced tomatoes, 1 cup coconut milk, Salt and black pepper, to taste', '../../assets/images/i10.jpg',false),
                                 new Recipe(9, 'Sushi Rolls', '2 cups sushi rice, 2 tablespoons rice vinegar, 2 tablespoons sugar, 1 tablespoon salt, 4 sheets of nori, 1 avocado, sliced, 1/2 cucumber, sliced, 1/4 pound cooked shrimp, 1/4 cup soy sauce, 1 tablespoon wasabi paste', '../../assets/images/i11.jpg',false),
  ];
  constructor(private http: HttpClient) { }
  getRecipes() {
    return this.recipes.slice();
  }
  private savedRecipes: Recipe[]=[];

  getSavedRecipes() {
    return this.savedRecipes.slice();
  }

  addSavedRecipe(recipe: Recipe) {
    this.savedRecipes.push(recipe);
  }

  removeSavedRecipe(recipe: Recipe) {
    const index = this.savedRecipes.findIndex(r => r.id === recipe.id);
    if (index !== -1) {
      this.savedRecipes.splice(index, 1);
    }
  }
}
