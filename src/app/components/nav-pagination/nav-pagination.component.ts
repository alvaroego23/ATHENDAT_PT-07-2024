import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faHome, faUser , faBriefcase , faGraduationCap , faFileAlt , faTasksAlt, faBlog , faCommentAlt, faEnvelope , faShareAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-pagination',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-pagination.component.html',
  styleUrl: './nav-pagination.component.css'
})
export class NavPaginationComponent {
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
  
 
  

  
 
  

}
