import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipesApp';
  currentSection = 'recipes';

  onRecipesEventFired() {
    this.currentSection = 'recipes';
  };

  onShoppingListEventFired() {
    this.currentSection = 'shoppingList';
  };
}
