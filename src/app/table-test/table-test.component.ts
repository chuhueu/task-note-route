import { Component, OnInit } from '@angular/core';
import { NotesService, Table } from '../services/note.service';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css'],
})
export class TableTestComponent implements OnInit {
  tables: Table[];
  values: any[] = [];
  test = '';
  addValue: { title: string; desc: string; date: string }[] = [];
  lengthValue: number;
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.tables = this.notesService.tables;
    console.log(this.tables);

    this.tables.forEach((table, index) => {
      this.values.push(table.values);
    });
    console.log(this.values);

    // for (let i = 0; i < this.values[0].length; i++) {
    //   for (let j = 0; j < this.values.length; j++) {
    //     console.log(this.values[j][i]);
    //   }
    // }
    // console.log(this.values[0][0]);
    // console.log(this.values[1][0]);
    // console.log(this.values[2][0]);
  }
}
