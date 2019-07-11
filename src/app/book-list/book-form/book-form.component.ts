import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { Book } from '../../models/Book.model'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBulder: FormBuilder,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBulder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSaveBook() {
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const description = this.bookForm.get('description').value;
    const newBook = new Book(title, author, description);
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

}
