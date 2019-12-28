import { FavoriteComponent, argsFavoriteChanged } from './favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  view= 'map';
  onFavoriteChanged(dataEvenObject: argsFavoriteChanged)
  {
    console.log("Favorite changed: ",dataEvenObject);
  }
}

