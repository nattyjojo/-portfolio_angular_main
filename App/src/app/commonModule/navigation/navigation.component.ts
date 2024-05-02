import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorTextComponent } from '../anchor-text/anchor-text.component';
import { LogoComponent } from '../logo/logo.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, AnchorTextComponent, LogoComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  anchorTextComponents = [
    { anchorLink: '/work', anchorText: 'Work', anchorTitle: 'Go to Work Page', isActive: false },
    { anchorLink: '/services', anchorText: 'Services', anchorTitle: 'go to Services', isActive: false},
    { anchorLink: '/testimonials', anchorText: 'Testimonials', anchorTitle: 'go to Testimonials', isActive: false},
    { anchorLink: '/about', anchorText: 'About', anchorTitle: 'Learn about Us', isActive: false},
    { anchorLink: '/Blog', anchorText: 'Blog', anchorTitle: 'Go to Blog', isActive: false},
    { anchorLink: '/contact', anchorText: 'Contact', anchorTitle: 'Get in Touch', isActive: false}
  ]
  constructor(private router: Router){
    this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd )
    
    ).subscribe((e: RouterEvent) =>{
      this.anchorTextComponents.forEach((component) => {
        component.isActive = component.anchorLink === e.url
      })
    })

  }
  

}
