import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  display: Array<string>;
  constructor(
    private noteService: NoteService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.display = this.data[0].values;
    // this.data[0].values.forEach((row: any, i: any) => {
    //   this.data.forEach((col: any, j: any) => {
    //     console.log(this.data[j].values[i]);
    //   });
    // });
  }
  open(content: any) {
    this.modalService.open(content);
  }
  onHandleDelete(index: number) {
    this.noteService.deleteNote(index);
  }
}
