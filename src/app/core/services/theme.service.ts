import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private currentTheme: Theme = 'light';

  constructor() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.applyTheme(this.currentTheme);
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }
}
