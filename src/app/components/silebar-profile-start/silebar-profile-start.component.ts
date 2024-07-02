import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-silebar-profile-start',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './silebar-profile-start.component.html',
  styleUrl: './silebar-profile-start.component.css'
})
export class SilebarProfileStartComponent {

  name: string = "Brown Reddick";
  specialty: string[] = ["Web Developer", "Photographers", "Web Designer"];
  specialityOne: string = this.specialty[0];
  residence: string = "Canada";
  city: string = "Toronto";
  age: string = "26";

  /**Skills datos */

  skills: { name: string, porciento: string }[] = [
    {  name: "HTML", porciento: "90%" },
    {  name: "CSS", porciento: "80%" },
    {  name: "JS", porciento: "80%" },
    {  name: "PHP", porciento: "90%" },  
  ];







}
