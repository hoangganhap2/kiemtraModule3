import { Component, OnInit } from '@angular/core';
import {Book} from '../Book';
import {FormBuilder} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {
  book: Book;
  bookList: Book[];
  read: boolean;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }
}
