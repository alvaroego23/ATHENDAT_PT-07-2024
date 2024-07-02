import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css'
})
export class CustomCursorComponent implements AfterViewInit {
  anchors!: NodeListOf<HTMLAnchorElement>;
  cursor!: HTMLElement
  cursorInner!: HTMLElement
  

  constructor(
   
    private renderer: Renderer2, 
    private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.cursor = this.el.nativeElement.querySelector('.custom_cursor_one');
    this.cursorInner = this.el.nativeElement.querySelector('.custom_cursor_two');
    this.anchors = this.el.nativeElement.querySelectorAll('a');

    this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
    this.renderer.listen('document', 'mousedown', this.onMouseDown.bind(this));
    this.renderer.listen('document', 'mouseup', this.onMouseUp.bind(this));
    
    this.anchors.forEach(anchor => {
      this.renderer.listen(anchor, 'mouseover', this.onAnchorMouseOver.bind(this));
      this.renderer.listen(anchor, 'mouseleave', this.onAnchorMouseLeave.bind(this));
    });
  }

  private onMouseMove(event: MouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;
    this.cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    this.cursorInner.style.left = `${x}px`;
    this.cursorInner.style.top = `${y}px`;
  }

  private onMouseDown(): void {
    this.cursor.classList.add('click');
    this.cursorInner.classList.add('custom_cursor_hover');
  }

  private onMouseUp(): void {
    this.cursor.classList.remove('click');
    this.cursorInner.classList.remove('custom_cursor_hover');
  }

  private onAnchorMouseOver(): void {
    this.cursor.classList.add('custom_cursor_hover');
  }

  private onAnchorMouseLeave(): void {
    this.cursor.classList.remove('custom_cursor_hover');
  }

}
