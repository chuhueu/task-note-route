export interface NoteTest {
  title: string;
  desc: string;
  date: {
    year: number;
    month: number;
    day: number;
  };
}
export class Note {
  public title: string;
  public desc: string;
  public date: {
    year: number;
    month: number;
    day: number;
  };
  constructor(
    title: string,
    desc: string,
    date: { year: number; month: number; day: number }
  ) {
    this.title = title;
    this.desc = desc;
    this.date = date;
  }
}
export class NotesService {
  notes: Note[] = JSON.parse(localStorage.getItem('notes')!) || [];
  test = 'hello';
  addNote(
    title: string,
    desc: string,
    date: { year: number; month: number; day: number }
  ) {
    this.notes.push({ title: title, desc: desc, date: date });
    localStorage.setItem('notes', JSON.stringify(this.notes));
    //console.log(this.notes);
  }
  deleteNote(note: string) {
    this.notes.forEach((value, index) => {
      if (value.title === note) {
        this.notes.splice(index, 1);
      }
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
    //console.log('hello');
  }
  updateNote(
    index: number,
    info: {
      title: string;
      desc: string;
      date: { year: number; month: number; day: number };
    }
  ) {
    this.notes.splice(index, 1, info);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
