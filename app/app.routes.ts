
import { provideRouter, RouterConfig } from '@angular/router';

import { AppAboutComponent } from './about.component'
import { AppHomeComponent } from './home.component';

export const routes: RouterConfig = [
  { path: '', component: AppHomeComponent,as :'Home' },
  { path: 'about', component: AppAboutComponent, as: 'About'    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
