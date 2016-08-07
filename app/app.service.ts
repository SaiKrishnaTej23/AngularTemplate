import { Injectable } from '@angular/core';
import { AuthModel } from './AuthModel';
//import { Http , Response } from '@angular/http';

@Injectable()
export class AppService {
    ////Authorize: AuthModel = new AuthModel();
    constructor(
        //private _http:Http
        ) { }

    AuthorizeUser(){
        return new AuthModel(true,"Avarakadabra");
                // return this._http.get("../data.json")
                //     .map((res: Response) => {
                //           console.log(res.json());
                //         return res.json();                      
                //     })
    }

    errorFunction(){
        console.log("Something Terribly went wrong");
    }
}