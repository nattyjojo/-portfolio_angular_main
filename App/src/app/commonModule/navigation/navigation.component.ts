import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorTextComponent } from '../anchor-text/anchor-text.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

// service
import { NavigationDataService, NavigationItem } from '../navigation-data.service';
import { ClickNotifierService } from '../../../click-notifier.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, AnchorTextComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  anchorTextComponents : NavigationItem[] = this.navigationDataService.getData()
  
  navigationData : NavigationItem[] = []
  constructor(private router: Router, private navigationDataService: NavigationDataService, private clickNotifierService : ClickNotifierService){
    this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd )
    
    ).subscribe((e: RouterEvent) =>{
      this.anchorTextComponents.forEach((component) => {
        component.isActive = component.anchorLink === e.url
      })
    })

  }
  
  onClick(event: MouseEvent){
    console.log("hello")
    this.clickNotifierService.setIsOpen()

  }
  

}
