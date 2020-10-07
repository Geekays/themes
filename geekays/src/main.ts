import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export class WindowScrollDirective {

  ngOnInit() {
      window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
    
    if (angular.element(document).scrollTop() > 50) {
			$('nav').addClass('shrink');
		  } else {
			$('nav').removeClass('shrink');
		  }
  };

}