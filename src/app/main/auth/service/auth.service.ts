import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

const token = localStorage.getItem('access_token');
const headers: HttpHeaders = new HttpHeaders({
  Authorization: 'Bearer ' + token,
  'content-type': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {
  }
  /**
   * Đămh nhập
   * @author ThanhTT92
   */
  login(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/login`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }


}
