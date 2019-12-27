import { Component, OnInit } from '@angular/core';
import {Book} from '../Book';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-book-unread',
  templateUrl: './book-unread.component.html',
  styleUrls: ['./book-unread.component.css']
})
export class BookUnreadComponent implements OnInit {
  book: Book;
  bookList: Book[];
  removeBook: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.bookList = next), error => (this.bookList = []));
    this.removeBook = this.fb.group({
     name: [''],
      read: ['']
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(next => {
        this.book = next;
        console.log(this.book);
        this.removeBook.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      });
  }
  onSubmit() {
    const{value} = this.removeBook;
    this.bookService.removeBooks(value.id).subscribe(next => {
    this.router.navigate(['']);
  });
  }

}
