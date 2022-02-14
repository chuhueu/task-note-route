import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NotesService, Table } from '../services/note.service';
@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})
export class NoteAddComponent implements OnInit, OnChanges {
  model: NgbDateStruct;
  allowAddNote = false;
  addSuccess = false;
  title = '';
  desc = '';
  date = '';
  values: any[];
  tables: Table[];
  constructor(private router: Router, private notesService: NotesService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // console.log('ngOnChanges are called');
  }

  ngOnInit(): void {
    this.values = this.notesService.values;
    this.tables = this.notesService.tables;
  }
  onHandleAdd() {
    this.addSuccess = true;
    setTimeout(() => {
      this.addSuccess = false;
    }, 2000);
    //convert model to string
    this.date = this.model.day + '/' + this.model.month + '/' + this.model.year;
    //service add
    this.notesService.addNote(this.title, this.desc, this.date);
    console.log(this.values);
    //reset
    this.title = '';
    this.desc = '';
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
}
