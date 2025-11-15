import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { BannerComponent } from './banner.component';
import { SkillsComponent } from './skills.component';
import { ExperiencesComponent } from './experiences.component';
import { ProjectListComponent } from './project-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    BannerComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
