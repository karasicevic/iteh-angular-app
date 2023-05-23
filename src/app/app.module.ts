import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeElementComponent } from './recipe-element/recipe-element.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import {NgxPaginationModule} from "ngx-pagination";
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from'@angular/forms';
import { RecipeFilterPipe } from './pipes/recipe-filter-pipe.pipe';
import { ColorOfButtonDirective } from './directives/color-of-button.directive';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HomeComponent,
    NavbarComponent,
    RecipeElementComponent,
    SavedRecipesComponent,
    FooterComponent,
    RecipeFilterPipe,
    ColorOfButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
