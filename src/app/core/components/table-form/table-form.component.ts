import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    TextFieldModule,
    MatInputModule,
  ],
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent {
  form!: FormGroup;

  dataSource = [
    {
      id: 1,
      description: 'Item 01',
    },
    {
      id: 2,
      description: 'Item 02',
    },
    {
      id: 3,
      description: 'Item 03',
    },
    {
      id: 4,
      description: 'Item 04',
    },
    {
      id: 5,
      description: 'Item 05',
    },
    {
      id: 6,
      description: 'Item 06',
    },
    {
      id: 7,
      description: 'Item 07',
    },
    {
      id: 8,
      description: 'Item 08',
    },
    {
      id: 9,
      description: 'Item 09',
    },
    {
      id: 10,
      description: 'Item 010',
    },
  ];

  displayedColumns = ['id', 'description', 'status', 'considerations'];

  onSubmit(): void {}
}
