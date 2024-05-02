import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-anchor-text',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './anchor-text.component.html',
  styleUrl: './anchor-text.component.css'
})
export class AnchorTextComponent {
  @Input() anchorText: string = '';
  @Input() anchorLink: string = '';
  @Input() anchorTitle: string = '';
  @Input() isActive: boolean = false;
  constructor() {}
  ngOnInit(): void{

  }

}
