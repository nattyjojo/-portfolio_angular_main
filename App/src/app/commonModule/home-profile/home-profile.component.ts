import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgScrollbarModule } from '@ngx-scrollbar/core';

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
  scrollTestimonials(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: this.spanPosition, // Adjust the value as needed
      behavior: 'smooth'
    });

  }


  scrollLeftButton(event: MouseEvent){
    this.spanPosition = -600;
    this.scrollTestimonials()
  }
  scrollRightButton(event: MouseEvent){
    console.log("clicked")
    this.spanPosition = 600;
    this.scrollTestimonials()
  }
  onScrollClick(event : MouseEvent){
    const targetElement = event.currentTarget as HTMLElement;
    const containerWidth = (event.currentTarget as HTMLElement).offsetWidth;
    const rect = targetElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // X coordinate relative to the div
    let stringX = x.toString().split('.')[0]
    console.log({"isthis": stringX})
    this.spanPosition = Number(stringX);
    this.scrollTestimonials()


  }


}
