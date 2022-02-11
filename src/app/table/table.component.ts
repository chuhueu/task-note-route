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
  }

  open(content: any) {
    this.modalService.open(content);
  }
  onHandleDelete(note: string) {
    this.notesService.deleteNote(note);
  }
}
