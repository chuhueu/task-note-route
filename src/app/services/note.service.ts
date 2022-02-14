export interface Table {
  title: string;
  values: Array<string>;
}
export class NotesService {
  tables: Table[] = JSON.parse(localStorage.getItem('tables')!) || [
    {
      title: 'Title',
      values: [],
    },
    {
      title: 'Description',
      values: [],
    },
    {
      title: 'Date',
      values: [],
    },
  ];
  values: any[] = [];

  addNote(title: string, desc: string, date: string) {
    this.tables.forEach((table) => {
      if (table.title === 'Title') {
        table.values.push(title);
      }
      if (table.title === 'Description') {
        table.values.push(desc);
      }
      if (table.title === 'Date') {
        table.values.push(date);
      }
    });
    localStorage.setItem('tables', JSON.stringify(this.tables));
  }
  deleteNote(indexValue: number) {
    this.values.forEach((value) => {
      value.splice(indexValue, 1);
    });
  }

  // updateNote(
  //   index: number,
  //   info: {
  //     title: string;
  //     desc: string;
  //     date: { year: number; month: number; day: number };
  //   }
  // ) {
  //   this.notes.splice(index, 1, info);
  //   localStorage.setItem('notes', JSON.stringify(this.notes));
  // }
}
