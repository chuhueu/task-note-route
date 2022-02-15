import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteComponent } from './note/note.component';
import { TableComponent } from './table/table.component';
import { NoteAddComponent } from './note/note-add/note-add.component';
import { AppRoutingModule } from './rotuer/app-routing.module';
import { NoteEditComponent } from './note/note-edit/note-edit.component';
import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    TableComponent,
    NoteAddComponent,
    NoteEditComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
