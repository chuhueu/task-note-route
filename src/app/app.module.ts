import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotesService } from './services/note.service';
import { TableTestComponent } from './table-test/table-test.component';

const appRoutes: Routes = [
  { path: '', component: TableComponent },
  { path: 'add', component: NoteAddComponent },
  { path: 'edit/:index', component: NoteEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NoteEditComponent,
    NoteAddComponent,
    TableTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
