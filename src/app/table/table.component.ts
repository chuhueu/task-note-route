import { Component, Input, OnInit } from '@angular/core';
import { NotesService, Table } from '../services/note.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class TableComponent implements OnInit {
  tables: Table[];
  values: any[] = [];
  constructor(
    private notesService: NotesService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.tables = this.notesService.tables;
    //create an array values contain tables.values
    this.tables.forEach((table) => {
      this.values.push(table.values);
    });
    //console.log(this.values);
  }

  open(content: any) {
    this.modalService.open(content);
  }
  onHandleDelete(indexValue: number) {
    // this.notesService.deleteNote(indexValue);
    this.values.forEach((value) => {
      value.splice(indexValue, 1);
    });
  }
}
