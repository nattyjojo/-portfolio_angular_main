import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-indicator',
  standalone: true,
  imports: [],
  templateUrl: './scroll-indicator.component.html',
  styleUrl: './scroll-indicator.component.css',
})
export class ScrollIndicatorComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollIndicator();
  }
  updateScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    scrollIndicator.style.setProperty(
      '--scroll-percentage',
      scrollPercentage + '%'
    );
    scrollIndicator.style.transform = `scale(${scrollPercentage / 100})`;
  }
}
