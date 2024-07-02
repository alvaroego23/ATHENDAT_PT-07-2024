import { Component } from '@angular/core';
import { BarStartMovileComponent } from "../bar-start-movile/bar-start-movile.component";
import { SilebarProfileStartComponent } from "../silebar-profile-start/silebar-profile-start.component";
import { NavPaginationComponent } from "../nav-pagination/nav-pagination.component";
import { HeroIntroductionComponent } from "../hero-introduction/hero-introduction.component";
import { AboutComponent } from "../about/about.component";
import { MeServicesComponent } from "../me-services/me-services.component";
import { SkillsComponent } from "../skills/skills.component";
import { MyResumeComponent } from "../my-resume/my-resume.component";
import { PortafolioComponent } from "../portafolio/portafolio.component";
import { BlogComponent } from "../blog/blog.component";
import { TestiminialComponent } from "../testiminial/testiminial.component";
import { ContactComponent } from "../contact/contact.component";
import { PreloaderComponent } from "../preloader/preloader.component";

@Component({
    selector: 'app-app-start',
    standalone: true,
    templateUrl: './app-start.component.html',
    styleUrl: './app-start.component.css',
    imports: [BarStartMovileComponent, SilebarProfileStartComponent, NavPaginationComponent, HeroIntroductionComponent, AboutComponent, MeServicesComponent, SkillsComponent, MyResumeComponent, PortafolioComponent, BlogComponent, TestiminialComponent, ContactComponent, PreloaderComponent]
})
export class AppStartComponent {

}
