import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-home-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  spanPosition: number = 0;


  ngAfterViewInit() {
    // You can access targetButton here, after the view has been initialized
  }
  scrollTestimonials(scrollPosition : number): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: scrollPosition, // Adjust the value as needed
      behavior: 'smooth'
    });

  }
  getElementWidth(ele: HTMLElement): number{
    const targetElement = ele as HTMLElement;
    const ElementWidth = (targetElement as HTMLElement).offsetWidth;
    const rect = targetElement.getBoundingClientRect();
    return rect.width
  }
  scrollLeftButton(event: MouseEvent){
    const scollPosition = this.spanPosition - this.getElementWidth(this.scrollContainer.nativeElement);
    this.scrollTestimonials(scollPosition)
  }
  scrollRightButton(event: MouseEvent){
    const scrollPosition = this.getElementWidth(this.scrollContainer.nativeElement);
    console.log(scrollPosition)
    this.scrollTestimonials(scrollPosition)
  }

  onScrollClick(event : MouseEvent){
    console.log('hello')
    // const targetElement = event.currentTarget as HTMLElement;
    // const containerWidth = (event.currentTarget as HTMLElement).offsetWidth;
    // this.getElementWidth(targetElement)
    // this.spanPosition = Number();
    // this.scrollTestimonials()


  }


}





// <svg width="1em" height="1em" viewBox="0 0 100 100" fill="var(--sb-foreground-highlight)"><path d="M50 6C33.7 6 22 18.05 22 34.7c0 9.7 4.37 15.96 8.15 21.4 2.96 4.25 5.44 7.9 5.44 12.28 0 5.79 9.57 8.27 14.41 8.27s14.41-2.48 14.41-8.27c0-4.49 2.6-8.15 5.44-12.29C73.63 50.66 78 44.4 78 34.71 78 18.17 66.3 6 50 6zm17.01 48.08c-3.19 4.5-6.14 8.75-6.14 14.3 0 2.36-6.26 4.73-10.87 4.73-4.6 0-10.87-2.37-10.87-4.73 0-5.55-2.95-9.8-6.14-14.3-3.67-5.31-7.56-10.75-7.56-19.37 0-14.53 10.27-25.17 24.45-25.17s24.46 10.64 24.46 25.17c.12 8.62-3.66 14.06-7.33 19.37zM37.24 79.01c3.43 2.48 7.56 3.67 12.88 3.67 5.2 0 9.33-1.19 12.76-3.67.82-.59.94-1.65.35-2.48-.59-.83-1.65-.94-2.48-.35-2.72 2-6.26 2.95-10.63 2.95-4.5 0-7.92-.94-10.75-2.95a1.83 1.83 0 00-2.48.35c-.71.83-.48 1.9.35 2.48zM60.75 82.44c-3.19 2.24-7.2 2.6-10.63 2.6-4.96 0-8.15-.83-10.75-2.72a1.83 1.83 0 00-2.48.36c-.6.82-.36 1.89.35 2.48a16.86 16.86 0 005.79 2.6 7.16 7.16 0 007.09 6.38 7.16 7.16 0 007.09-6.38c2-.48 3.9-1.3 5.67-2.6.82-.6.94-1.66.35-2.48-.59-.83-1.77-.83-2.48-.24zM46.57 12.73c-5.43.95-9.68 3.55-13.46 8.4-.6.82-.48 1.88.23 2.47.36.24.71.36 1.07.36.47 0 1.06-.24 1.41-.71 3.2-4.02 6.74-6.26 11.34-7.09a1.67 1.67 0 001.42-2c-.12-.95-.94-1.54-2-1.43z"></path><path d="M46.96 54.06l14.39-16.13c.31-.36.3-.77.03-1.13-.26-.36-.78-.6-1.36-.59l-6.53-.15L56.9 27c.24-.54-.2-1.09-.95-1.35s-1.6-.05-1.94.39L39.62 42.16c-.32.37-.3.78-.04 1.14.26.36.78.6 1.36.59l6.53.15-3.4 9.06c-.24.54.21 1.08.96 1.35.74.26 1.67-.05 1.93-.4z"></path></svg>
//lightBulb svg