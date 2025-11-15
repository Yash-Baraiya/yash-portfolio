import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-[6] flex" #preloaderRef>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>
      <div class="preloader-item h-full w-[10%] bg-black"></div>

      <p class="name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
        <span class="inline-block translate-y-full">Y</span>
        <span class="inline-block translate-y-full">A</span>
        <span class="inline-block translate-y-full">S</span>
        <span class="inline-block translate-y-full">H</span>
        <span class="inline-block translate-y-full">&nbsp;</span>
        <span class="inline-block translate-y-full">B</span>
        <span class="inline-block translate-y-full">A</span>
        <span class="inline-block translate-y-full">R</span>
        <span class="inline-block translate-y-full">A</span>
        <span class="inline-block translate-y-full">I</span>
        <span class="inline-block translate-y-full">Y</span>
        <span class="inline-block translate-y-full">A</span>
      </p>
    </div>
  `,
  styles: []
})
export class PreloaderComponent implements AfterViewInit {
  @ViewChild('preloaderRef', { static: true }) preloaderRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power1.inOut'
      }
    });

    tl.to('.name-text span', {
      y: 0,
      stagger: 0.05,
      duration: 0.2
    });

    tl.to('.preloader-item', {
      delay: 1,
      y: '100%',
      duration: 0.5,
      stagger: 0.1
    })
      .to('.name-text span', { autoAlpha: 0 }, '<0.5')
      .to(
        this.preloaderRef.nativeElement,
        {
          autoAlpha: 0
        },
        '<1'
      );
  }
}

