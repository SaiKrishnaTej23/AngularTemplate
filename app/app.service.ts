import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http';

@Injectable()
export class AppService {
    
    constructor(private htt:Http) { }

}