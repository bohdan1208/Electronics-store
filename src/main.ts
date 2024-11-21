import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/* eslint-disable */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
