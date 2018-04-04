import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Config } from "../config/config";
import { Headers } from '@angular/http';

@Injectable()
export class BackendService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Request resource with method GET
     * @param {string} path
     * @returns {Observable<any>}
     */
    public get(path: string): Observable<any> {
        return this._http.get(this.buildPath(path));
    }

    /**
     * Send PUT request
     * @param {string} path
     * @param body
     * @returns {Observable<any>}
     */
    public put(path: string, body: any): Observable<any> {
        return this._http.put(this.buildPath(path), body);
    }

    /**
     * Send POST request
     * @param {string} path
     * @param body
     * @returns {Observable<any>}
     */
    public post(path: string, body: any): Observable<any> {
        return this._http.post(this.buildPath(path), body, {headers: this.getCommonHeaders()});
    }

    /**
     * DELETE resource from server by id
     * @param {string} path
     * @param {any} id
     * @returns {Observable<any>}
     */
    public delete(path: string, id: any): Observable<any> {
        return this._http.delete(this.buildPath(path) + id);
    }

    private buildPath(path: string): string {
        return Config.apiUrl + path;
    }

    private getCommonHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", Config.authHeader);
        return headers;
    }
}