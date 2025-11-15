import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      *ngIf="isLink"
      [href]="href || '#'"
      [target]="target"
      [rel]="target === '_blank' ? 'noopener noreferrer' : null"
      [class]="buttonClasses"
    >
      <span class="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" *ngIf="variant !== 'link'"></span>
      <span class="z-[1]">
        <ng-content></ng-content>
      </span>
    </a>
    <button
      *ngIf="!isLink"
      [type]="type"
      [class]="buttonClasses"
    >
      <span class="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" *ngIf="variant !== 'link'"></span>
      <span class="z-[1]">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() as: 'link' | 'button' = 'link';
  @Input() variant: 'primary' | 'secondary' | 'link' = 'primary';
  @Input() href?: string;
  @Input() target?: string;
  @Input() type: string = 'button';
  @Input() className: string = '';

  get isLink(): boolean {
    return this.as === 'link';
  }

  get buttonClasses(): string {
    const variantClasses: { [key: string]: string } = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      link: 'text-foreground hover:text-primary'
    };

    const baseClasses = 'group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden';
    const variantClass = variantClasses[this.variant] || variantClasses['primary'];
    
    return `${baseClasses} ${variantClass} ${this.className}`;
  }
}

