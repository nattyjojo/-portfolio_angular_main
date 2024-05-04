import { Component } from '@angular/core';
import { BackgroundModeComponent } from '../background-mode/background-mode.component';
@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [BackgroundModeComponent],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {

}
