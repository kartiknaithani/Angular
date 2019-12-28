import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent
{
    @Input('isFavorite') isFavorite=true;
    @Output() change1=new EventEmitter();
    onClick()
    {
        this.isFavorite=!this.isFavorite;
        this.change1.emit({myValue:this.isFavorite});
    }
    
}
export interface argsFavoriteChanged
{
    myValue:boolean;
}