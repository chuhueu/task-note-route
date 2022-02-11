import { Component, Input, OnInit } from '@angular/core';
import { Note, NotesService } from '../services/note.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class TableComponent implements OnInit {
  notes: Note[] = [];
  test: string;
  constructor(
    private notesService: NotesService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.notes = this.notesService.notes;
    this.test = this.notesService.test;
    console.log(this.test);
  }

  open(content: any) {
    this.modalService.open(content);
  }
  onHandleDelete(note: string) {
    //service delete
    this.notesService.deleteNote(note);
  }
}
