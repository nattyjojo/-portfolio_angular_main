import { Injectable } from '@angular/core';

export interface NavigationItem {
  anchorLink: string;
  anchorText: string;
  anchorTitle: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class NavigationDataService {
  
  data: NavigationItem[] = [
    { anchorLink: '/', anchorText: 'Home', anchorTitle: 'Go to Home Page', isActive: false },
    { anchorLink: '/work', anchorText: 'Work', anchorTitle: 'Go to Work Page', isActive: false },
    { anchorLink: '/services', anchorText: 'Services', anchorTitle: 'go to Services', isActive: false},
    { anchorLink: '/testimonials', anchorText: 'Testimonials', anchorTitle: 'go to Testimonials', isActive: false},
    { anchorLink: '/about', anchorText: 'About', anchorTitle: 'Learn about Us', isActive: false},
    { anchorLink: '/Blog', anchorText: 'Blog', anchorTitle: 'Go to Blog', isActive: false},
    { anchorLink: '/contact', anchorText: 'Contact', anchorTitle: 'Get in Touch', isActive: false}
  ]

  constructor() { }
  getData(): NavigationItem[] {
    return this.data;

  }
}
