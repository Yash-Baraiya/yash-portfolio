import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ArrowAnimationComponent } from '../../shared/components/arrow-animation/arrow-animation.component';
import { DataService } from '../../core/services/data.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ArrowAnimationComponent],
  template: `
    <section class="relative overflow-hidden" id="banner">
      <app-arrow-animation></app-arrow-animation>
      <div
        class="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        #containerRef
      >
        <div class="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <h1 class="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span class="text-primary">FULL STACK</span>
            <br /> <span class="ml-4">DEVELOPER</span>
          </h1>
          <p class="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            Hi! I'm <span class="font-medium text-foreground">Yash Baraiya</span>.
            A Full Stack Developer with a strong focus on Angular, complemented by backend experience using
            Node.js and MongoDB. Passionate about solving real-world problems through front-end excellence and end-to-end development.
          </p>
          <app-button
            as="link"
            [href]="'mailto:' + dataService.generalInfo.email"
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            Contact Me
          </app-button>
        </div>

        <div class="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <div class="slide-up-and-fade">
            <h5 class="text-3xl sm:text-4xl font-anton text-primary mb-1.5">1+</h5>
            <p class="text-muted-foreground">Year Experience</p>
          </div>
          <div class="slide-up-and-fade">
            <h5 class="text-3xl sm:text-4xl font-anton text-primary mb-1.5">3+</h5>
            <p class="text-muted-foreground">Major Projects</p>
          </div>
          <div class="slide-up-and-fade">
            <h5 class="text-3xl sm:text-4xl font-anton text-primary mb-1.5">MEAN</h5>
            <p class="text-muted-foreground">Stack Expert</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef<HTMLDivElement>;

  constructor(public dataService: DataService) {}

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerRef.nativeElement,
        start: 'bottom 70%',
        end: 'bottom 10%',
        scrub: 1
      }
    });

    tl.fromTo(
      '.slide-up-and-fade',
      { y: 0 },
      { y: -150, opacity: 0, stagger: 0.02 }
    );
  }
}

