import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-implement-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './implement-table.component.html',
  styleUrl: './implement-table.component.css'
})
export class ImplementTableComponent {
  mobileScreenWidth = 991;
  isresponsive: boolean=false;
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.is_responsive$.subscribe(parameter => {
      this.isresponsive = parameter;
    });
  }
  @ViewChild('firstModal', { static: true }) firstModalElement!: ElementRef;
  @ViewChild('secondModal', { static: true }) secondModalElement!: ElementRef;

  // ngAfterViewInit(): void {
  //   // Show the first modal by default (optional)
  //   this.showModal('firstModal');
  // }

  // Method to show a modal by adding classes
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

  // Method to show the second modal and hide the first modal
  openSecondModal(): void {
    this.hideModal('firstModal'); // Hide the first modal
    this.showModal('secondModal'); // Show the second modal
  }

}
