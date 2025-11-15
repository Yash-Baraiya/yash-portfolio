import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleTheme()" 
      class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      [class.bg-gray-200]="currentTheme === 'light'"
      [class.text-gray-800]="currentTheme === 'light'"
      [class.bg-gray-800]="currentTheme === 'dark'"
      [class.text-white]="currentTheme === 'dark'"
      [attr.aria-label]="currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
    >
      <ng-container *ngIf="currentTheme === 'light'; else darkIcon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </ng-container>
      <ng-template #darkIcon>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </ng-template>
    </button>
  `,
  styles: []
})
export class ThemeToggleComponent {
  currentTheme: Theme = 'light';

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }
}
