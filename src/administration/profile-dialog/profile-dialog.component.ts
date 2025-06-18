import {
  Component,
  ChangeDetectionStrategy,
  inject,
  Input,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    CommonModule,
  ],
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mode: string; profileData: any }
  ) {
    const fb = inject(FormBuilder);
    this.profileForm = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      status: ['active'],
      roles: [[]],
    });

    if (this.data.profileData) {

      this.data.profileData.firstName = this.data.profileData.name.split(', ')[0];
      this.data.profileData.lastName = this.data.profileData.name.split(', ')[1];
      this.profileForm.patchValue(this.data.profileData);
    }

    
  }

  profileForm: FormGroup;

  onCancel() {
    // Logic to close the dialog without saving
  }

  onSave() {
    // Logic to save the profile
  }
}
