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
      .post<any>(`/api/search`, payload,  {headers})
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tạo sách
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

  /**
   * Tạo tìm sách theo bookId
   * @author ThanhTT92
   */
  findById(bookId: any): Observable<any>{
    return this.http
      .get<any>(`/api/findById/` + bookId)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }
  /**
   * Xóa sách theo bookId
   * @author ThanhTT92
   */
  deleteBook(bookId: any): Observable<any>{
    return this.http
      .get<any>(`/api/delete/` + bookId)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tạo mới ảnh bìa
   * @author ThanhTT92
   */
  createCoverImage(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/coverImage/create`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tìm ảnh bìa ngẫu nhiên
   * @author ThanhTT92
   */
  searchOneCoverImage(): Observable<any>{
    return this.http
      .get<any>(`/api/coverImage/searchOneCoverImage`)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tạo mới ảnh bìa
   * @author ThanhTT92
   */
  getCat(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/cat/search`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tạo mới khung viền
   * @author ThanhTT92
   */
  createFrame(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/frame/create`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * Tìm danh sách khung
   * @author ThanhTT92
   */
  getListFrame(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/frame/search`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }
  /**
   * Tạo mới tác giả
   * @author ThanhTT92
   */
  createAuthor(body: any): Observable<any>{
    const payload = body;
    return this.http
      .post<any>(`/api/bookAuthor/create`, payload)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }


}
