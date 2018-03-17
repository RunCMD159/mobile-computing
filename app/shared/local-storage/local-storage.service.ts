import {Injectable} from "@angular/core";

require("nativescript-localstorage");

@Injectable()
export class LocalStorageService {

    /**
     * Store value per key in localstorage
     * @param {string} key
     * @param value
     */
    public setItem(key: string, value: any) {
        return localStorage.setItem(key, value);
    }

    /**
     * Method returns value to provided key
     * @param {string} key
     * @returns {any}
     */
    public getItem(key: string): any {
        return localStorage.getItem(key)
    }
}