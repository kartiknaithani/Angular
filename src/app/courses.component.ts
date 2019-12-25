
import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
selector: 'courses',
template : `<h1 (mouseenter)="onClick()">{{title}}</h1>
<input [value]="email" (keyup.enter)="email=$event.target.value; onPress()"/>
<input [(ngModel)]="email" (keyup.enter)="onPress()"/>
<button class="btn btn-primary" [style.backgroundColor]="isActive==true? 'green':'blue'" (mouseenter)="onClick()">Save</button>
`
})
export class CoursesComponent
{
  email="knaithan@adobe.com";
  title="Apples";
  isActive=true;
  courses;
  colspan=2;
  imgsrc="https://seeklogo.com/images/A/Adobe-logo-14D7FF4DA5-seeklogo.com.png"
  onClick()
  {
    this.isActive=!this.isActive;
    if(this.isActive)
    {
      this.title="Apples";
    }
    else
    {
      this.title="Oranges";
    }
  }
  onPress()
  {
    console.log(this.email);
  }

  constructor(service : CoursesService)
  {
    this.courses = service.getCourses();
  }


}
