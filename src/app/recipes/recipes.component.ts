import { Component, OnInit } from '@angular/core';
import { Re;cipe } from './recipe.model'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: REcipe
  constructor() { }

  ngOnInit() {
  }

}
