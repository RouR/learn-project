import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {
}
