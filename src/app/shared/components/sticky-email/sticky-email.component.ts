import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-sticky-email',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-xl:hidden fixed bottom-32 left-0 block">
      <a
        [href]="'mailto:' + dataService.generalInfo.email"
        class="px-3 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-foreground hover:!bg-center"
        [style.text-orientation]="'mixed'"
        [style.writing-mode]="'vertical-rl'"
      >
        {{ dataService.generalInfo.email }}
      </a>
    </div>
  `,
  styles: []
})
export class StickyEmailComponent {
  constructor(public dataService: DataService) {}
}

