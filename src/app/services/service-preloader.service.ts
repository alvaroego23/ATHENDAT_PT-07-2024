import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePreloaderService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  startPreloader() {
    setTimeout(() => {
      const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
      const preloader = document.getElementById('preloader');

      if (isMobile) {
        preloader?.parentNode?.removeChild(preloader);
      } else {
        setTimeout(() => {
          this.renderer.addClass(preloader, 'preloaded');
        }, 1000);

        setTimeout(() => {
          preloader?.parentNode?.removeChild(preloader);
        }, 2000);
      }
    }, 1000);
  }
}
