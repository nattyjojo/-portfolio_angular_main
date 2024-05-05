import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickNotifierService {
  private behaviorSubject = new BehaviorSubject<boolean>(false)
  setIsOpen(): void {
    this.behaviorSubject.next(!this.behaviorSubject.getValue())
  }
  isOpen() : boolean {
    return this.behaviorSubject.getValue()
  } 
  
}
