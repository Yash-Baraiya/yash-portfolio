import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="sticky top-0 z-[4]">
      <button
        class="group size-12 absolute top-5 right-5 md:right-10 z-[2]"
        (click)="isMenuOpen = !isMenuOpen"
      >
        <span
          class="inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]"
          [class.rotate-45]="isMenuOpen"
          [class.-translate-y-1/2]="isMenuOpen"
          [class.md:group-hover:rotate-12]="!isMenuOpen"
        ></span>
        <span
          class="inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]"
          [class.-rotate-45]="isMenuOpen"
          [class.-translate-y-1/2]="isMenuOpen"
          [class.md:group-hover:-rotate-12]="!isMenuOpen"
        ></span>
      </button>
    </div>

    <div
      class="overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150"
      [class.opacity-0]="!isMenuOpen"
      [class.invisible]="!isMenuOpen"
      [class.pointer-events-none]="!isMenuOpen"
      (click)="isMenuOpen = false"
    ></div>

    <div
      class="fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform transition-transform duration-700 z-[3] overflow-hidden gap-y-14 flex flex-col lg:justify-center py-10"
      [class.translate-x-full]="!isMenuOpen"
      [class.translate-x-0]="isMenuOpen"
    >
      <div
        class="fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]"
        [class.translate-x-0]="isMenuOpen"
      ></div>

      <div class="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
        <div class="flex gap-10 lg:justify-between max-lg:flex-col w-full">
          <div class="max-lg:order-2">
            <p class="text-muted-foreground mb-5 md:mb-8">SOCIAL</p>
            <ul class="space-y-3">
              <li *ngFor="let link of dataService.socialLinks">
                <a
                  [href]="link.url"
                  target="_blank"
                  rel="noreferrer"
                  class="text-lg capitalize hover:underline"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-muted-foreground mb-5 md:mb-8">MENU</p>
            <ul class="space-y-3">
              <li *ngFor="let link of menuLinks; let idx = index">
                <button
                  (click)="navigateTo(link.url)"
                  class="group text-xl flex items-center gap-3"
                >
                  <span
                    class="size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all"
                    [ngClass]="colors[idx]"
                  >
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      class="scale-0 group-hover:scale-100 transition-all"
                    >
                      <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" stroke-width="1"/>
                    </svg>
                  </span>
                  {{ link.name }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full max-w-[300px] mx-8 sm:mx-auto">
        <p class="text-muted-foreground mb-4">GET IN TOUCH</p>
        <a [href]="'mailto:' + dataService.generalInfo.email">
          {{ dataService.generalInfo.email }}
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class NavbarComponent {
  isMenuOpen = false;
  colors = [
    'bg-blue-500 text-white',
    'bg-purple-500 text-white',
    'bg-cyan-500 text-black',
    'bg-indigo-500 text-white',
    'bg-blue-600 text-white',
    'bg-purple-600 text-white'
  ];

  menuLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/#about-me' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Skills', url: '/#my-stack' },
    { name: 'Projects', url: '/#selected-projects' },
    { name: 'Contact', url: '/#contact' }
  ];

  constructor(public dataService: DataService, private router: Router) {}

  navigateTo(url: string): void {
    if (url.startsWith('/#')) {
      const hash = url.split('#')[1];
      this.router.navigate(['/'], { fragment: hash });
    } else {
      this.router.navigate([url]);
    }
    this.isMenuOpen = false;
  }
}

