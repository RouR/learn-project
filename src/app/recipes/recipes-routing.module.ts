import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

import {RecipesPage} from './recipes.page';
import {RecipeDetailPage} from './recipe-detail/recipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  {
    path: 'details/:recipeId',
    component: RecipeDetailPage
    // loadChildren: () => import('./recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations:[
    RecipesPage,
    RecipeDetailPage
  ],
  exports: [RouterModule],
})
export class RecipesModule {
}
