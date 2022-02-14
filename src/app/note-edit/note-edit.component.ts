import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/note.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  model: NgbDateStruct;
  title = '';
  desc = '';
  date = '';
  values: any[];
  //info: Note;
  saveNote = false;
  allowEditNote = false;
  //notes: Note[] = [];
  index: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService
  ) {
    //this.notes = this.notesService.notes;
    this.values = this.notesService.values;
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    console.log(this.values[0]);

    //this.model = this.notes[this.index].date;
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
  onHandleSave() {
    // this.date = this.model.day + '/' + this.model.month + '/' + this.model.year;
    // this.info = { title: this.title, desc: this.desc, date: this.date };
    // this.saveNote = true;
    // setTimeout(() => {
    //   this.saveNote = false;
    // }, 3000);
    // this.allowEditNote = false;
    //service update
    //this.notesService.updateNote(this.index, this.info);
  }
}
