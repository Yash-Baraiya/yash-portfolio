import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { DataService } from '../../core/services/data.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section class="py-section" id="my-experience" #containerRef>
      <div class="container">
        <app-section-title title="Work Experience"></app-section-title>

        <div class="grid gap-14">
          <div
            *ngFor="let item of dataService.myExperience"
            class="experience-item"
          >
            <p class="text-xl text-muted-foreground">{{ item.company }}</p>
            <p class="text-5xl font-anton leading-none mt-3.5 mb-2.5">
              {{ item.title }}
            </p>
            <p class="text-lg text-muted-foreground mb-4">{{ item.duration }} · {{ item.location }}</p>
            <p class="text-sm text-muted-foreground mb-4">Tech Stack: {{ item.techStack }}</p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li *ngFor="let bullet of item.bullets" class="text-base">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperiencesComponent implements AfterViewInit {
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef<HTMLDivElement>;

  constructor(public dataService: DataService) {}

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerRef.nativeElement,
        start: 'top 60%',
        end: 'bottom 50%',
        toggleActions: 'restart none none reverse',
        scrub: 1
      }
    });

    tl.from('.experience-item', {
      y: 50,
      opacity: 0,
      stagger: 0.3
    });

    const tlOut = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerRef.nativeElement,
        start: 'bottom 50%',
        end: 'bottom 20%',
        scrub: 1
      }
    });

    tlOut.to(this.containerRef.nativeElement, {
      y: -150,
      opacity: 0
    });
  }
}

