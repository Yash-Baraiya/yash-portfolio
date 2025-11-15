import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-0 pointer-events-none" #containerRef>
      <div
        *ngFor="let particle of particles; let i = index"
        class="absolute rounded-full bg-white"
        #particleRefs
      ></div>
    </div>
  `,
  styles: []
})
export class ParticleBackgroundComponent implements AfterViewInit {
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
  particles = Array(100).fill(0);

  ngAfterViewInit(): void {
    const particleElements = this.containerRef.nativeElement.querySelectorAll('.rounded-full');
    
    particleElements.forEach((particle: any) => {
      gsap.set(particle, {
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        opacity: Math.random(),
        left: Math.random() * window.innerWidth,
        top: Math.random() * (window.innerHeight + 1)
      });

      gsap.to(particle, {
        y: window.innerHeight,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        repeat: -1,
        ease: 'none'
      });
    });
  }
}

