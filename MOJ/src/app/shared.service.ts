import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedParameterSource = new BehaviorSubject<string>('add'); // Initial valueis_intro_done
  sharedParameter$ = this.sharedParameterSource.asObservable(); // Observable for components to subscribe
  private is_intro_done= new BehaviorSubject<boolean>(false); // Initial value
  is_intro_done$ = this.is_intro_done.asObservable(); // Observable for components to subscribe
  private isresponsive = new BehaviorSubject<boolean>(false); // Initial value
  is_responsive$ = this.isresponsive.asObservable(); // Observable for components to subscribe
  setSharedParameter(parameter: string) {
    this.sharedParameterSource.next(parameter); // Update the value
  }
  setresponsive(respo : boolean) {
    this.isresponsive.next(respo); // Update the value
  }
  isintrodone(respo : boolean) {
    this.is_intro_done.next(respo); // Update the value
  }
}
