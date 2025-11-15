import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './core/services/theme.service';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title = 'Yash Baraiya | Full Stack Developer';
  currentTheme: 'light' | 'dark' = 'light';
  currentYear: number = new Date().getFullYear();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();

    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80
      });
    }
  }
}
