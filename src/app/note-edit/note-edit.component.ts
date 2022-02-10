import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  title: string;
  desc: string;
  saveNote = false;
  allowEditNote = false;
  notes: { title: string; desc: string }[] =
    JSON.parse(localStorage.getItem('notes')!) || [];
  index: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    this.title = this.notes[this.index].title;
    this.desc = this.notes[this.index].desc;
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
  onHandleSave(info: { title: string; desc: string }) {
    this.saveNote = true;
    setTimeout(() => {
      this.saveNote = false;
    }, 3000);
    this.allowEditNote = false;
    this.notes.splice(this.index, 1, info);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
