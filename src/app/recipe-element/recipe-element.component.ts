import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.css']
})
export class RecipeElementComponent implements OnInit{
  @Input() name="default";
  @Input() description="default";
  @Input() imagePath="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.delscookingtwist.com%2Fwp-content%2Fuploads%2F2022%2F01%2FEasy-Fluffy-American-Pancakes_1.jpg&tbnid=cBvvx2NllyJqmM&vet=12ahUKEwjisraq9o_-AhWRGuwKHTxwCkEQMygDegUIARDxAQ..i&imgrefurl=https%3A%2F%2Fwww.delscookingtwist.com%2Feasy-fluffy-american-pancakes%2F&docid=skzL-P2SG2WeQM&w=1200&h=1800&q=pancakes&ved=2ahUKEwjisraq9o_-AhWRGuwKHTxwCkEQMygDegUIARDxAQ";

  constructor() { }

  ngOnInit(): void {
  }
}
