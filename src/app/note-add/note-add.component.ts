import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})
export class NoteAddComponent implements OnInit {
  addSuccess = false;
  title = '';
  desc = '';
  notes: { title: string; desc: string }[] =
    JSON.parse(localStorage.getItem('notes')!) || [];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onHandleAdd() {
    this.addSuccess = true;
    setTimeout(() => {
      this.addSuccess = false;
    }, 2000);
    this.notes.push({
      title: this.title,
      desc: this.desc,
    });
    this.title = '';
    this.desc = '';
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
}
