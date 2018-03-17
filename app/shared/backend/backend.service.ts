import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

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
        return this._http.get(path);
    }

    /**
     * Send PUT request
     * @param {string} path
     * @param body
     * @returns {Observable<any>}
     */
    public put(path: string, body: any): Observable<any> {
        return this._http.put(path, body);
    }

    /**
     * Send POST request
     * @param {string} path
     * @param body
     * @returns {Observable<any>}
     */
    public post(path: string, body: any): Observable<any> {
        return this._http.post(path, body);
    }

    /**
     * DELETE resource from server by id
     * @param {string} path
     * @param {any} id
     * @returns {Observable<any>}
     */
    public delete(path: string, id: any): Observable<any> {
        return this._http.delete(path + '/' + id);
    }
}