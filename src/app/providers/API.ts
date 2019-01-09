import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
    constructor(public http: HttpClient) {

    }
    getUrlApi(): string {
        return 'bilssAPI';
    }
    getApiKey(): string {
        return 'token';
    }
}
