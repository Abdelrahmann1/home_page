import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';  // <-- Ensure this is imported

@Component({
  selector: 'app-choose-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-container.component.html',
  styleUrl: './choose-container.component.css'
})
export class ChooseContainerComponent {
  sharedParameter: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to the shared parameter changes
    this.sharedService.sharedParameter$.subscribe(parameter => {
      this.sharedParameter = parameter; // Update local variable
    });
  }
  updateParameter(newParameter: string) {
    this.sharedService.setSharedParameter(newParameter); // Change the shared variable
  }
}
