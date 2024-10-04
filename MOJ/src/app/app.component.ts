import { Component, HostListener, Inject,PLATFORM_ID  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTableComponent } from './add-table/add-table.component';
import { ChooseContainerComponent } from './choose-container/choose-container.component';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Import CommonModule
import { ImplementTableComponent } from './implement-table/implement-table.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddTableComponent,ChooseContainerComponent,CommonModule,ImplementTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MOJ';
  mobileScreenWidth = 991;
  sharedParameter: string = '';
  isresponsive: boolean=false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private sharedService: SharedService) {}
  ngOnInit(): void {
    this.checkScreenSize(); // Check screen size on initialization

    this.sharedService.sharedParameter$.subscribe(parameter => {
      this.sharedParameter = parameter;
    });
    this.sharedService.is_responsive$.subscribe(parameter => {
      this.isresponsive = parameter;
    });

  }
  ngAfterViewInit(): void {
    // Check screen size once the view has been fully initialized
    this.checkScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isresponsive = window.innerWidth <= this.mobileScreenWidth;
    }
  }

}
