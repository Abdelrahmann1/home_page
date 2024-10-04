import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedParameterSource = new BehaviorSubject<string>('add'); // Initial value
  sharedParameter$ = this.sharedParameterSource.asObservable(); // Observable for components to subscribe

  private isresponsive = new BehaviorSubject<boolean>(false); // Initial value
  is_responsive$ = this.isresponsive.asObservable(); // Observable for components to subscribe
  setSharedParameter(parameter: string) {
    this.sharedParameterSource.next(parameter); // Update the value
  }
  setresponsive(respo : boolean) {
    this.isresponsive.next(respo); // Update the value
  }
}
