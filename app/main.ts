import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { AppService } from './app.service';



bootstrap(AppComponent,
[
    APP_ROUTER_PROVIDERS,
   AppService
]);