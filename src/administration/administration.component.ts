import {
  Component,
  ViewChild,
  AfterViewInit,
  model,
  QueryList,
  ViewChildren,
  input,
  inject,
} from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-administration',
  imports: [
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements AfterViewInit {
  @ViewChildren(MatPaginator)
  paginator!: QueryList<MatPaginator>;

  private activatedRoute = inject(ActivatedRoute);

  links = ['Account Management', 'Roles & Rights Management'];
  activeLink = model(this.links[0]);

  rolesAndRightsManagement = [
    {
      name: 'Approve Documents',
      internalName: 'APPROVE_DOCUMENTS',
      description: 'Allows marking documents as reviewed/approved.',
      enabled: false,
    },
    {
      name: 'Assign Roles',
      internalName: 'ASSIGN_ROLES',
      description: 'Can assign roles to users.',
      enabled: false,
    },
    {
      name: 'Create Users',
      internalName: 'CREATE_USERS',
      description: 'Allows creating new user accounts.',
      enabled: false,
    },
    {
      name: 'Deactivate Users',
      internalName: 'DEACTIVATE_USERS',
      description: "Can disable a user's access.",
      enabled: false,
    },
    {
      name: 'Delete Documents',
      internalName: 'DELETE_DOCUMENTS',
      description: 'Can remove documents from the repository.',
      enabled: false,
    },
    {
      name: 'Delete Meetings',
      internalName: 'DELETE_MEETINGS',
      description: 'Can cancel or remove meetings from the system.',
      enabled: false,
    },
    {
      name: 'Edit Dashboard',
      internalName: 'EDIT_DASHBOARD',
      description: 'Grants permission to configure dashboard widgets.',
      enabled: false,
    },
    {
      name: 'Edit Meeting Notes',
      internalName: 'EDIT_MEETING_NOTES',
      description: 'Can modify notes for past meetings.',
      enabled: false,
    },
  ];

  displayedColumns: string[] = [
    'name',
    'internalName',
    'description',
    'enabled',
  ];

  accountManagement = [
    {
      name: 'Brown, Steven',
      email: 'steven.brown@nrc.gov',
      roles: 'Meeting Coordinator, IT Support, Guest Viewer',
      lastLogin: '3/24/2025 12:01 AM',
      status: 'Active',
    },
    {
      name: 'Brown, Steven',
      email: 'steven.brown@nrc.gov',
      roles: 'IT Support, Department Manager, Guest Viewer',
      lastLogin: '2/7/2025 8:46 AM',
      status: 'Inactive',
    },
    {
      name: 'Brown, George',
      email: 'george.brown@nrc.gov',
      roles: 'Compliance Officer, Department Manager',
      lastLogin: '2/21/2025 3:23 PM',
      status: 'Inactive',
    },
    {
      name: 'Davis, Kevin',
      email: 'kevin.davis@nrc.gov',
      roles: 'Department Manager',
      lastLogin: '4/24/2025 8:27 AM',
      status: 'Inactive',
    },
    {
      name: 'Davis, Hannah',
      email: 'hannah.davis@nrc.gov',
      roles: 'Engineer, Guest Viewer, Document Manager',
      lastLogin: '2/20/2025 5:13 PM',
      status: 'Active',
    },
    {
      name: 'Davis, Carlos',
      email: 'carlos.davis@nrc.gov',
      roles: 'Guest Viewer',
      lastLogin: '3/5/2025 10:18 PM',
      status: 'Active',
    },
  ];

  accountDisplayedColumns: string[] = [
    'name',
    'email',
    'roles',
    'lastLogin',
    'status',
    'actions',
  ];

  accountManagementDataSource = new MatTableDataSource(this.accountManagement);
  rolesAndRightsManagementDataSource = new MatTableDataSource(
    this.rolesAndRightsManagement
  );

  constructor(private dialog: MatDialog) {
    // Check route data to determine the starting active link
    const routeData = this.activatedRoute.snapshot.data;
    if (routeData['name'] === 'Profile Management') {
      this.activeLink.set(this.links[0]); // Account Management
    } else {
      this.activeLink.set(this.links[1]); // Roles & Rights Management
    }
  }

  ngAfterViewInit() {
    // Assign the paginator dynamically based on the active link
    this.updatePaginator();

    this.paginator.changes.subscribe(() => {
      this.updatePaginator();
    });
  }

  private updatePaginator() {
    const activeLink = this.activeLink(); // Call the model signal to get the current value
    if (activeLink === 'Account Management') {
      this.accountManagementDataSource.paginator = this.paginator.first;
    } else if (activeLink === 'Roles & Rights Management') {
      this.rolesAndRightsManagementDataSource.paginator = this.paginator.first;
    }
  }

  addNewAccount() {
    
  }

  openAddProfileDialog() {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      minWidth: '35vw',
      data: { mode: 'add' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the result of adding a new profile
      }
    });
  }

  openEditProfileDialog(profileData: any) {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      minWidth: '35vw',
      data: { mode: 'edit', profileData },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the result of editing the profile
      }
    });
  }

  openViewProfileDialog(profileData: any) {
    this.dialog.open(ProfileDialogComponent, {
      minWidth: '35vw',
      data: { mode: 'view', profileData },
    });
  }
}
