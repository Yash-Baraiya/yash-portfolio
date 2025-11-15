import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="text-center pb-5" id="contact">
      <div class="container">
        <p class="text-lg">Have a project in mind?</p>
        <a
          [href]="'mailto:' + dataService.generalInfo.email"
          class="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
        >
          {{ dataService.generalInfo.email }}
        </a>

        <div>
          <p class="leading-none text-muted-foreground">
            © {{ currentYear }} Yash Baraiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  constructor(public dataService: DataService) {}
}

