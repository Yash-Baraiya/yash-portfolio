import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { DataService } from '../../core/services/data.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  constructor(public dataService: DataService) {}

  ngAfterViewInit(): void {
    if (!this.container) {
      return;
    }

    const elements = this.container.nativeElement.querySelectorAll('.slide-up-and-fade');

    const tlIn = gsap.timeline({
      scrollTrigger: {
        id: 'about-me-in',
        trigger: this.container.nativeElement,
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 0.5
      }
    });

    tlIn.from(elements, {
      y: 150,
      opacity: 0,
      stagger: 0.05
    });

    const tlOut = gsap.timeline({
      scrollTrigger: {
        id: 'about-me-out',
        trigger: this.container.nativeElement,
        start: 'bottom 50%',
        end: 'bottom 10%',
        scrub: 0.5
      }
    });

    tlOut.to(elements, {
      y: -150,
      opacity: 0,
      stagger: 0.02
    });
  }
}
