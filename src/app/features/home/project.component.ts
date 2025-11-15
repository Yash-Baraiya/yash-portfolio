import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/services/data.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
    >
      <div class="flex gap-2 md:gap-5">
        <div class="font-anton text-muted-foreground">
          _{{ (index + 1).toString().padStart(2, '0') }}.
        </div>
        <div class="flex-1">
          <div class="flex items-start justify-between gap-4 mb-3">
            <h4 class="text-4xl xs:text-6xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
              {{ project.title }}
            </h4>
            <span class="text-sm text-muted-foreground mt-2">{{ project.description }}</span>
          </div>
          <div class="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
            <div
              *ngFor="let tech of project.techStack.slice(0, 4); let idx = index"
              class="gap-3 flex items-center"
            >
              <span>{{ tech }}</span>
              <span
                *ngIf="idx !== project.techStack.slice(0, 4).length - 1"
                class="inline-block size-2 rounded-full bg-background-light"
              ></span>
            </div>
            <span *ngIf="project.techStack.length > 4" class="text-muted-foreground">+{{ project.techStack.length - 4 }} more</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() index: number = 0;
  @Input() selectedProject: string | null = null;
  @Output() mouseEnter = new EventEmitter<string>();

  onMouseEnter(): void {
    this.mouseEnter.emit(this.project.slug);
  }

  onMouseLeave(): void {
    // Handle mouse leave if needed
  }
}

