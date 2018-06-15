import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Hot Dogs', 'This is a test', 'http://www.frugalupstate.com/wp-content/uploads/2015/07/NY-hotdog-4-1024x768.jpg'),
    new Recipe('Macaroni', 'This is a test', 'https://uz71pyzpz0-flywheel.netdna-ssl.com/wp-content/uploads/2017/08/garlic-parmesan-macaroni-cheese-3-700x726.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
