import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://www.frugalupstate.com/wp-content/uploads/2015/07/NY-hotdog-4-1024x768.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

}
