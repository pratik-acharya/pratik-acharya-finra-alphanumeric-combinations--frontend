import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Page } from './page.model';


@Injectable({ providedIn: 'root' })
export class AlphaNumericCombinationsService {

    private alphaNumericCombinationApiUrl = 'http://localhost:8080/alphaNumericPhoneNumbers';

    constructor(private http: HttpClient) { }


    getAlphaNumericCombinations(phoneNumber: string, page: number, size: number) {
        return this.http
            .get<Page>(this.alphaNumericCombinationApiUrl + "/" + phoneNumber + "?page=" + page + "&size=" + size);
    }
}
