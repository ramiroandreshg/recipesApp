import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})

export class HeaderComponent {
  @Output() recipesClicked = new EventEmitter();
  @Output() shoppingListClicked = new EventEmitter();

  onReipesClicked(){
    this.recipesClicked.emit();
  }
  
  onShoppingListClicked() {
    this.shoppingListClicked.emit();
  }

}