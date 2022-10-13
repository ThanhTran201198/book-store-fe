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
   * Lây danh sách book
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
}
