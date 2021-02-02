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
new Recipe('A Test Recipe','This is a Test',
'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
new Recipe('Another Test Recipe','This is another Test',
'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')
];
onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
}
  constructor() { }

  ngOnInit(): void {
  }

}
