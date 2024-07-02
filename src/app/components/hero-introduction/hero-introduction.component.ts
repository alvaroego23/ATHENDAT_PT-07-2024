import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-hero-introduction',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero-introduction.component.html',
  styleUrl: './hero-introduction.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroIntroductionComponent {
  home = faHome;

}
