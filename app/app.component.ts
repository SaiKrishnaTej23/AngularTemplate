    import { Component } from '@angular/core';
    import { Router, ROUTER_DIRECTIVES} from '@angular/router';
    import {AppService} from './app.service';
    
    @Component({
      selector: 'my-app',
      templateUrl:'app/app.component.html' ,
      styleUrls: ['app/app.component.css'],
      directives: [ROUTER_DIRECTIVES],
      providers: [AppService]
    })
    export class AppComponent { 
      result : any;
      constructor(
      private _appservice:AppService,
      private router: Router){
        this.result =  this._appservice.AuthorizeUser();
        console.log(this.result);
        this.CheckAuth();
       }
       
       CheckAuth(){
         console.log(this.result.IsAuthentic);
         if(this.result.IsAuthentic == true){
           console.log("hi");
            this.router.navigateByUrl('/about');
         }
         else{
          this.router.navigateByUrl('');
         }
       }
    }