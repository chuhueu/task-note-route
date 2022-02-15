import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteAddComponent } from '../note/note-add/note-add.component';
import { NoteEditComponent } from '../note/note-edit/note-edit.component';
import { NoteComponent } from '../note/note.component';
import { TableComponent } from '../table/table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/note', pathMatch: 'full' },
  {
    path: 'note',
    component: NoteComponent,
    children: [
      { path: 'add', component: NoteAddComponent },
      { path: 'edit/:id', component: NoteEditComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
