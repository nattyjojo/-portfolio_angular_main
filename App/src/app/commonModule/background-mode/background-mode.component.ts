import { Component } from '@angular/core';
import { BackGroundModeService } from '../../../back-ground-mode.service';
@Component({
  selector: 'app-background-mode',
  standalone: true,
  imports: [],
  templateUrl: './background-mode.component.html',
  styleUrl: './background-mode.component.css'
})
export class BackgroundModeComponent {
 
  constructor(private backGroundModeService : BackGroundModeService){}

  toggleBackgroundMode() : void {
    this.backGroundModeService.toggleBackgroundMode();
      
  };
  isDark() : boolean {
    return this.backGroundModeService.getStoredBackgroundMode();
      
  };
  // Toggle the text visibility   "&#127765;" : "&#127761;"
  onClick(event: MouseEvent): void {
    console.log("hello")
    this.toggleBackgroundMode()
  }
}
