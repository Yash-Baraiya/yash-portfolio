import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-4 mb-10">
      <svg
        *ngIf="!icon"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="animate-spin duration-7000"
      >
        <circle cx="12.5" cy="12.5" r="10" stroke="currentColor" stroke-width="2" class="text-primary"/>
      </svg>
      <ng-container *ngIf="icon">
        <ng-content></ng-content>
      </ng-container>
      <h2 class="text-xl uppercase leading-none">{{ title }}</h2>
    </div>
  `,
  styles: []
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() icon?: any;
}

