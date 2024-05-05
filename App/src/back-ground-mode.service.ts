import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackGroundModeService {
  private isDarkMode = new BehaviorSubject<boolean>(false)

  constructor() {
 
   }

  getStoreBackground(): boolean {
    return this.isDarkMode.getValue()
  }

  toggleBackgroundMode() : void  {
    const NewbackgroundMode = !this.isDarkMode.getValue()
    this.isDarkMode.next(NewbackgroundMode) 
  }
  getStoredBackgroundMode(): boolean{
    return this.isDarkMode.getValue()

  }
}
