import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { map, take, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  private url:string = 'https://x.firebaseio.com/users.json';
  headers: Headers = new Headers({'Content-Type': 'application/json'});

  saveUser(user) {
    const headers: Headers = new Headers({'Content-Type': 'application/json'} );
    return this.http.post(this.url, user)
  }

  getUsers() {
    return this.http.get(this.url).pipe(
      map(
      (response: Response) => {
        const data = response.json();
        let arr: any[] = []
        Object.entries(data).forEach(
          ([key, value]) => arr.push(value)
        );
        arr = arr.map(el => {
          el.birthDate = new Date(el.birthDate);
          return el;
        });
        return arr;
      }
    ),catchError(
        (error: Response) => {
          return throwError('Users not found!')
        }
      )
    )
  }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(
      map(
        (response: Response) => {
          let data = response.json();
          data = data.map(el => el.name);
          return data;
        }
      ), catchError(
        (error: Response) => {
          return throwError('Countries not found!');
        }
      )
    )
  }

}
