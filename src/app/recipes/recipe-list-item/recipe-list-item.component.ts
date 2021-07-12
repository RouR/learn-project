import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipeItem: Recipe;

  constructor() { }

  ngOnInit() {}

}
