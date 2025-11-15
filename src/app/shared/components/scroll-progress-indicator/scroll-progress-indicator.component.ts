import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-background-light overflow-hidden">
      <div
        class="w-full bg-primary rounded-full h-full"
        #scrollBarRef
      ></div>
    </div>
  `,
  styles: []
})
export class ScrollProgressIndicatorComponent implements AfterViewInit {
  @ViewChild('scrollBarRef', { static: true }) scrollBarRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateScrollProgress();
  }

  private updateScrollProgress(): void {
    if (this.scrollBarRef?.nativeElement) {
      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;
      const scrollY = window.scrollY;
      const scrollProgress = (scrollY / scrollableHeight) * 100;

      this.scrollBarRef.nativeElement.style.transform = `translateY(-${100 - scrollProgress}%)`;
    }
  }
}

