import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  API = 'https://mailthis.to/gustasjanusauskas@gmail.com';

  constructor(private httpClient: HttpClient) { 

  }

  SendMessage(body: any) {
    return this.httpClient.post(this.API,body);
  }
}
