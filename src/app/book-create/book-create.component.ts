import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  addReadBook: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.addReadBook = this.fb.group({
      name: [''],
      read: false
    });
  }

  onSubmit() {
    const {value} = this.addReadBook;
    this.bookService.addBook(value).subscribe( next => {
      this.addReadBook.reset({
        name: [''],
        read: false
      });
    });
    alert('Them sach doc thanh cong');
  }


}
