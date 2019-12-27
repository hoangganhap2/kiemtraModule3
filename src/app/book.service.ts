import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './Book';

@Injectable({
providedIn: 'root'
})
export class BookService {
apiUrl = 'http://localhost:8081/books';
constructor(private http: HttpClient) {}

getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(this.apiUrl);
}

addBook(book: Book): Observable<any> {
  return this.http.post(this.apiUrl, book);
}

getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + id);
}

removeBooks(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
}
}
