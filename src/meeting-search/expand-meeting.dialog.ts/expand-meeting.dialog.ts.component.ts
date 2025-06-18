import { Component, inject, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FileDragNDropDirective } from '../../core/directives/drag-drop.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-expand-meeting.dialog.ts',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIcon,
    MatDatepickerModule,
    FileDragNDropDirective,
    MatCardModule,
  ],
  templateUrl: './expand-meeting.dialog.ts.component.html',
  styleUrl: './expand-meeting.dialog.ts.component.scss',
})
export class ExpandMeetingDialogTsComponent {
  readonly dialogRef = inject(MatDialogRef<ExpandMeetingDialogTsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  files = signal<any[]>([]);

  constructor() {
    if (this.data.files?.length > 0) {

      console.log(this.data);
      

      this.files.set(this.data.files || []);
    }
  }


  onFileSelected(event) {
    const files: File[] = event.target.files;

    if (files) {
      console.log(files);

      this.files.set([...this.files(), ...files]);
    }
  }

  fileDropped(event: any) {
    const filesIn = Object.keys(event).map((key) => event[key]);
    console.log(filesIn);

    this.files.set([...this.files(), ...filesIn]);
  }

  remove(file: any) {
    this.files.set(this.files().filter((f) => f.name !== file.name));
  }
}
