import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-add-table',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './add-table.component.html',
  styleUrl: './add-table.component.css'
})
export class AddTableComponent {
  mobileScreenWidth = 991;
  isresponsive: boolean=false;
  isDropdownOpen = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.is_responsive$.subscribe(parameter => {
      this.isresponsive = parameter;
    });
  }
  startDate: string | null = null;
  endDate: string | null = null;
  selectedDate: string | null = null; // Variable to store selected date

  dropdownStates: { [key: string]: string | null } = {
    dropdown1: null,
    dropdown2: null,
    dropdown3: null,
    dropdown4: null
  };

  selectDuration(dropdownId: string, duration: string): void {
    // Update only the specific dropdown's state
    this.dropdownStates[dropdownId] = duration;

    console.log('Current Dropdown States:', this.dropdownStates);
  }

  // Helper function to get the selected value of a specific dropdown
  getSelectedValue(dropdownId: string): string {
    // Custom responses based on dropdownId
    if (dropdownId === 'dropdown1') {
      return this.dropdownStates[dropdownId] ? this.dropdownStates[dropdownId] : 'دينار كويتي';
    } else if (dropdownId === 'dropdown2') {
      return this.dropdownStates[dropdownId] ? this.dropdownStates[dropdownId] : 'دينار كويتي';
    }
   else if (dropdownId === 'dropdown3') {
    return this.dropdownStates[dropdownId] ? this.dropdownStates[dropdownId] : 'حدد مدة الزيادة';
  }

     else {
      // Default response for other dropdowns
      return this.dropdownStates[dropdownId] ? this.dropdownStates[dropdownId] : 'حدد مدة الزيادة';
    }
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  isCalc: boolean = false;
  selectedOption: string = 'option2'; // Tracks the selected option
  option1Question1: string = ''; // Tracks the answer for option 1, question 1
  option1Question2: string = ''; // Tracks the answer for option 1, question 2
  option2Question1: string = ''; // Tracks the answer for option 2, question 1
  option2Question2: string = ''; // Tracks the answer for option 2, question 2

  // Handles option change and shows relevant questions
  onOptionChange(option: string) {
    this.selectedOption = option;
  }
  onIsCalc(option: boolean) {
    this.isCalc = option;
  }

  // Logs the answers or handles submission logic
  submitAnswers() {
    if (this.selectedOption === 'option1') {
      console.log('Option 1 selected');
      console.log('Question 1 Answer:', this.option1Question1);
      console.log('Question 2 Answer:', this.option1Question2);
    } else if (this.selectedOption === 'option2') {
      console.log('Option 2 selected');
      console.log('Question 1 Answer:', this.option2Question1);
      console.log('Question 2 Answer:', this.option2Question2);
    }
  }
  @ViewChild('firstModal', { static: true }) firstModalElement!: ElementRef;
  @ViewChild('secondModal', { static: true }) secondModalElement!: ElementRef;

  showModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show'); // Add 'show' class to display modal
      modal.style.display = 'block'; // Change display to block
      modal.setAttribute('aria-modal', 'true'); // Set modal role
      modal.removeAttribute('aria-hidden'); // Remove aria-hidden attribute

      // Add a backdrop if not already present
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      document.body.appendChild(backdrop);
    }
  }

  // Method to hide a modal by removing classes
  hideModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show'); // Remove 'show' class to hide modal
      modal.style.display = 'none'; // Change display to none
      modal.setAttribute('aria-hidden', 'true'); // Set aria-hidden attribute
      modal.removeAttribute('aria-modal'); // Remove aria-modal attribute

      // Remove the backdrop
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }

}
