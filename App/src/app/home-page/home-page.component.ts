import { Component } from '@angular/core';
import { HomeProfileComponent } from '../commonModule/home-profile/home-profile.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeProfileComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(){

  }

}
