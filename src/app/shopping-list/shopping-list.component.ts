import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient (10,'Tomato'),
    new Ingredient (20,'Ice Cream'),
    new Ingredient (5,'Baskot'),
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
