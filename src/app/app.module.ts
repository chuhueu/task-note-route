import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';

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
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
