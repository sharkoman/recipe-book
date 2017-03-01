import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipes/recipe-list-item/recipe-list-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
