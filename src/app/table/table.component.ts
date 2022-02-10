import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  notes = JSON.parse(localStorage.getItem('notes')!);
  constructor() {}

  ngOnInit(): void {}

  onHandleDelete(note: string) {
    this.notes.forEach((value: string, index: number) => {
      if (value === note) {
        this.notes.splice(index, 1);
      }
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
