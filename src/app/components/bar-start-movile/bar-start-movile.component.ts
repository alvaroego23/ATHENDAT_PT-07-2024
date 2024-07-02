import { Component, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faTimes, faHome, faUser , faBriefcase , faGraduationCap , faFileAlt , faTasksAlt, faBlog , faCommentAlt, faEnvelope , faShareAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bar-start-movile',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bar-start-movile.component.html',
  styleUrl: './bar-start-movile.component.css'
})
export class BarStartMovileComponent implements OnInit {
  //icons
  home = faHome;
  user = faUser;
  briefcase =faBriefcase;
  graduationCap = faGraduationCap;
  fileAlt = faFileAlt;
  tasksAlt = faTasksAlt;
  blog = faBlog;
  commentAlt = faCommentAlt;
  envelope = faEnvelope;
  sharedAlt =faShareAlt;
  times = faTimes;
  //END icons

  
  private menuSelector = '.menu_toggle, .close-menu';
  private actionSelector = '.mobile-menu, .minfo__app, .menu-overlay';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.setupMenu();
  }

  setupMenu() {
    const menuElements = this.el.nativeElement.querySelectorAll(this.menuSelector);
    const actionElements = this.el.nativeElement.querySelectorAll(this.actionSelector);

    menuElements.forEach((element: HTMLElement) => {
      this.renderer.listen(element, 'click', () => {
        actionElements.forEach((actionElement: HTMLElement) => {
          if (actionElement.classList.contains('is-menu-open')) {
            this.renderer.removeClass(actionElement, 'is-menu-open');
          } else {
            this.renderer.addClass(actionElement, 'is-menu-open');
          }
        });
      });
    });

    this.renderer.listen(document, 'click', (event) => {
      if (!this.isClickInside(event, actionElements) && !this.isClickInside(event, menuElements)) {
        actionElements.forEach((actionElement: HTMLElement) => {
          this.renderer.removeClass(actionElement, 'is-menu-open');
        });
        menuElements.forEach((menuElement: HTMLElement) => {
          this.renderer.removeClass(menuElement, 'is-menu-open');
        });
      }
    });
  }

  isClickInside(event: Event, elements: NodeListOf<HTMLElement>): boolean {
    return Array.from(elements).some(element => element.contains(event.target as Node));
  }

  @HostListener('click', ['$event'])
  onLinkClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.matches('.mobile-menu .main-menu a, .menu-overlay')) {
      const actionElements = this.el.nativeElement.querySelectorAll(this.actionSelector);
      const menuElements = this.el.nativeElement.querySelectorAll(this.menuSelector);

      actionElements.forEach((actionElement: HTMLElement) => {
        this.renderer.removeClass(actionElement, 'is-menu-open');
      });
      menuElements.forEach((menuElement: HTMLElement) => {
        this.renderer.removeClass(menuElement, 'is-menu-open');
      });
    }
  }

  
}
