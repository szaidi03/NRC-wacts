import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-expand-meeting.dialog.ts',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './expand-meeting.dialog.ts.component.html',
  styleUrl: './expand-meeting.dialog.ts.component.scss',
})
export class ExpandMeetingDialogTsComponent {
  readonly dialogRef = inject(MatDialogRef<ExpandMeetingDialogTsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
}
