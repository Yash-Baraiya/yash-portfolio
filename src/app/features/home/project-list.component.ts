import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { DataService, Project } from '../../core/services/data.service';
import { ProjectComponent } from './project.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ProjectComponent],
  template: `
    <section class="pb-section" id="selected-projects">
      <div class="container">
        <app-section-title title="SELECTED PROJECTS"></app-section-title>

        <div class="group/projects relative" #containerRef>
          <div
            *ngIf="selectedProject !== null"
            class="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[300px] xl:w-[400px] bg-background-light border border-border rounded-lg p-6 opacity-0 overflow-y-auto max-h-[500px]"
            #detailsContainer
          >
            <div
              *ngFor="let project of dataService.projects"
              [class.hidden]="project.slug !== selectedProject"
            >
              <h5 class="text-2xl font-anton text-primary mb-3">{{ project.title }}</h5>
              <p class="text-sm text-muted-foreground mb-4">{{ project.description }}</p>
              <div class="mb-4">
                <p class="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let tech of project.techStack"
                    class="px-2 py-1 text-xs bg-background border border-border rounded"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div>
                <p class="text-xs text-muted-foreground mb-2">Key Features:</p>
                <ul class="list-disc list-inside space-y-2 text-sm text-foreground">
                  <li *ngFor="let bullet of project.bullets" class="leading-relaxed">{{ bullet }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-col max-md:gap-10" #projectListRef>
            <app-project
              *ngFor="let project of dataService.projects; let i = index"
              [project]="project"
              [index]="i"
              [selectedProject]="selectedProject"
              (mouseEnter)="handleMouseEnter($event)"
            ></app-project>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectListComponent implements AfterViewInit {
  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('detailsContainer', { static: false }) detailsContainer?: ElementRef<HTMLDivElement>;
  
  selectedProject: string | null = null;

  constructor(public dataService: DataService) {
    if (this.dataService.projects.length > 0) {
      this.selectedProject = this.dataService.projects[0].slug;
    }
  }

  ngAfterViewInit(): void {
    if (window.innerWidth < 768) {
      this.selectedProject = null;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.containerRef.nativeElement,
        start: 'top bottom',
        end: 'top 80%',
        toggleActions: 'restart none none reverse',
        scrub: 1
      }
    });

    tl.from(this.containerRef.nativeElement, {
      y: 150,
      opacity: 0
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.containerRef?.nativeElement || !this.detailsContainer?.nativeElement) return;
    if (window.innerWidth < 768) return;

    const containerRect = this.containerRef.nativeElement.getBoundingClientRect();
    const detailsRect = this.detailsContainer.nativeElement.getBoundingClientRect();
    const offsetTop = e.clientY - containerRect.y;

    if (
      containerRect.y > e.clientY ||
      containerRect.bottom < e.clientY ||
      containerRect.x > e.clientX ||
      containerRect.right < e.clientX
    ) {
      gsap.to(this.detailsContainer.nativeElement, {
        duration: 0.3,
        opacity: 0
      });
      return;
    }

    gsap.to(this.detailsContainer.nativeElement, {
      y: offsetTop - detailsRect.height / 2,
      duration: 1,
      opacity: 1
    });
  }

  handleMouseEnter(slug: string): void {
    if (window.innerWidth < 768) {
      this.selectedProject = null;
      return;
    }
    this.selectedProject = slug;
  }
}

