// dependancies
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavigationComponent } from './commonModule/navigation/navigation.component';
import { LogoComponent } from './commonModule/logo/logo.component';
import { SearchEngineComponent } from './commonModule/search-engine/search-engine.component';
import { BackgroundModeComponent } from './commonModule/background-mode/background-mode.component';
import { HomePageComponent } from './home-page/home-page.component';

// services
import { BackGroundModeService } from '../back-ground-mode.service';
import { ClickNotifierService } from '../click-notifier.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, CommonModule, NavigationComponent, SearchEngineComponent, LogoComponent, BackgroundModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent {
  constructor(private backGroundModeService : BackGroundModeService, private clickNotifierService : ClickNotifierService){
    

  }
  isDarkMode() :  boolean {
    return this.backGroundModeService.getStoredBackgroundMode()
  }

  onClick(event: MouseEvent): void{
    this.clickNotifierService.setIsOpen()

  }
  isOpen() : boolean {
    return this.clickNotifierService.isOpen()

  }
  title = 'freelancer';
}
