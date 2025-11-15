import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-arrow-animation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      id="banner-arrow-svg"
      width="376"
      height="111"
      viewBox="0 0 376 111"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-20 left-1/2 -translate-x-1/2 z-0"
      #svgRef
    >
      <path
        class="svg-arrow svg-arrow-1"
        d="M1 1V39.9286L188 110V70.6822L1 1Z"
        stroke="#1a1a1a"
        #arrow1Ref
      />
      <path
        class="svg-arrow svg-arrow-2"
        d="M375 1V39.9286L188 110V70.6822L375 1Z"
        stroke="#1a1a1a"
        #arrow2Ref
      />
    </svg>
  `,
  styles: []
})
export class ArrowAnimationComponent implements AfterViewInit {
  @ViewChild('svgRef', { static: true }) svgRef!: ElementRef<SVGSVGElement>;
  @ViewChild('arrow1Ref', { static: true }) arrow1Ref!: ElementRef<SVGPathElement>;
  @ViewChild('arrow2Ref', { static: true }) arrow2Ref!: ElementRef<SVGPathElement>;

  ngAfterViewInit(): void {
    gsap.set('#banner-arrow-svg', { fill: 'transparent', autoAlpha: 0 });
    
    const arrow1Length = this.arrow1Ref.nativeElement.getTotalLength();
    const arrow2Length = this.arrow2Ref.nativeElement.getTotalLength();
    
    gsap.set('.svg-arrow-1', {
      strokeDasharray: arrow1Length,
      strokeDashoffset: arrow1Length
    });
    gsap.set('.svg-arrow-2', {
      strokeDasharray: arrow2Length,
      strokeDashoffset: arrow2Length
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to('#banner-arrow-svg', { autoAlpha: 1, duration: 0.1 });
    tl.to('.svg-arrow', {
      duration: 2,
      delay: 1,
      strokeDashoffset: 0
    });
    tl.to('#banner-arrow-svg', {
      duration: 0.5,
      delay: 0.5,
      fill: '#ffffff08'
    });
    tl.to('#banner-arrow-svg', {
      duration: 1,
      y: 300
    });
    tl.to('#banner-arrow-svg', {
      duration: 0,
      autoAlpha: 0
    });
  }
}

