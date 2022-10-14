import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Lây danh sách sách
   * @author ThanhTT92
   */
  getLishBook(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/search`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tạo mới sách
   * @author ThanhTT92
   */
  createBook(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/create`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }
}
