import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';
import { ScrollProgressIndicatorComponent } from './shared/components/scroll-progress-indicator/scroll-progress-indicator.component';
import { ParticleBackgroundComponent } from './shared/components/particle-background/particle-background.component';
import { StickyEmailComponent } from './shared/components/sticky-email/sticky-email.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    ScrollProgressIndicatorComponent,
    ParticleBackgroundComponent,
    StickyEmailComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Yash Baraiya | Full Stack Developer';
}
