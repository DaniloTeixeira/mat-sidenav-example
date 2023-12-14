import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

interface Category {
  title: string;
  color: string;
}
@Component({
  selector: 'app-mat-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
  ],
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss'],
})
export class MatSelectComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.buildForm();
  protected myControl = new FormControl(null);
  protected categories: Category[] = [
    {
      title: 'Não iniciado',
      color: '#808080',
    },
    {
      title: 'Pendente',
      color: '#ffa500',
    },
    {
      title: 'Em andamento',
      color: '#0000ff',
    },
    {
      title: 'Concluído',
      color: '#008000',
    },
  ];

  private buildForm() {
    return this.fb.group({
      myControl: [null as Category | null],
    });
  }
}
