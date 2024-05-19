import { Component, ViewChild, ElementRef } from '@angular/core';
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
  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: this.spanPosition, // Adjust the value as needed
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: this.spanPosition, // Adjust the value as needed
      behavior: 'smooth'
    });
  }
  onScrollClick(event : MouseEvent){
    const targetElement = event.currentTarget as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // X coordinate relative to the div
    this.spanPosition = x;
    console.log(this.spanPosition)
    this.scrollRight()


  }


}
