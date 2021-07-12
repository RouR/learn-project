import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {filter, map, Observable, Subject, takeUntil, tap} from 'rxjs';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe$: Observable<Recipe | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {
  }

  ngOnInit() {
    this.loadedRecipe$ = this.activatedRoute.paramMap.pipe(
      map(params => this.recipesService.getRecipe(params.get('recipeId'))),
      tap(recipe => {
        console.log(recipe);
          if (!recipe) {
            console.warn('todo navigate');
          }
        }
      )
    );
  }

}
