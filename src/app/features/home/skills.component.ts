import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { DataService } from '../../core/services/data.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="my-stack" #containerRef>
      <div class="container">
        <app-section-title title="My Stack"></app-section-title>

        <div class="space-y-20">
          <div *ngFor="let category of skillCategories" class="grid sm:grid-cols-12">
            <div class="sm:col-span-5">
              <p class="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                {{ category.key }}
              </p>
            </div>

            <div class="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
              <div
                *ngFor="let item of category.value"
                class="slide-up flex items-center leading-none"
              >
                <span class="text-2xl capitalize px-4 py-2 bg-background-light border border-border rounded-lg hover:border-primary transition-colors">
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
  
  skillCategories: { key: string; value: any[] }[] = [];

  constructor(private dataService: DataService) {
    this.skillCategories = Object.entries(this.dataService.myStack).map(([key, value]) => ({
      key,
      value
    }));
  }

  ngAfterViewInit(): void {
    const slideUpEl = this.containerRef.nativeElement.querySelectorAll('.slide-up');

    if (slideUpEl.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.containerRef.nativeElement,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.5
        }
      });

      tl.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.4
      });
    }

    const tlOut = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerRef.nativeElement,
        start: 'bottom 50%',
        end: 'bottom 10%',
        scrub: 1
      }
    });

    tlOut.to(this.containerRef.nativeElement, {
      y: -150,
      opacity: 0
    });
  }
}

