import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './commonModule/navigation/navigation.component';
import { LogoComponent } from './commonModule/logo/logo.component';
import { SearchEngineComponent } from './commonModule/search-engine/search-engine.component';
import { BackgroundModeComponent } from './commonModule/background-mode/background-mode.component';

import { HomePageComponent } from './home-page/home-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, NavigationComponent, SearchEngineComponent, LogoComponent, BackgroundModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'freelancer';
}
