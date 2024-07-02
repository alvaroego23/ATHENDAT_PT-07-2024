import { Component, OnInit } from '@angular/core';
import { ServicePreloaderService } from '../../services/service-preloader.service';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit{
  constructor(private preloaderService: ServicePreloaderService) {}

  ngOnInit() {
    this.preloaderService.startPreloader();
  }


}
