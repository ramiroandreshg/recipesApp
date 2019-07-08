import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('1- A test Recipe', 'Description for Recipe 1', 'https://cdn.pixabay.com/photo/2017/05/05/16/42/session-2287673_960_720.jpg'),
    new Recipe('1- A test Recipe', 'Description for Recipe 1', 'https://cdn.pixabay.com/photo/2017/05/05/16/42/session-2287673_960_720.jpg'),
    new Recipe('1- A test Recipe', 'Description for Recipe 1', 'https://cdn.pixabay.com/photo/2017/05/05/16/42/session-2287673_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
