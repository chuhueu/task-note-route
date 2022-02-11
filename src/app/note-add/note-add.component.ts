import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NotesService } from '../services/note.service';
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

  constructor(private router: Router, private notesService: NotesService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // console.log('ngOnChanges are called');
  }

  ngOnInit(): void {}
  onHandleAdd() {
    this.addSuccess = true;
    setTimeout(() => {
      this.addSuccess = false;
    }, 2000);
    this.notesService.addNote(this.title, this.desc, this.model);
    this.title = '';
    this.desc = '';
  }
  onHandleBack() {
    this.router.navigate(['/']);
  }
}
