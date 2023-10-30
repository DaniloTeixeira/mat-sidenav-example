import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-mat-select',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatIconModule, MatRadioModule],
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent {
  protected myControl = new FormControl(null);

  protected categories = [
    {
      idReminder: 0,
      title: 'Não iniciado',
      description: '',
      eventDate: new Date(),
      color: '#808080'
    },
    {
      idReminder: 1,
      title: 'Pendente',
      description: '',
      eventDate: new Date(),
      color: '#ffa500'
    },
    {
      idReminder: 2,
      title: 'Em andamento',
      description: '',
      eventDate: new Date(),
      color: '#0000ff'
    },
    {
      idReminder: 3,
      title: 'Concluído',
      description: '',
      eventDate: new Date(),
      color: '#008000'
    },
  ];

  constructor() {
    this.myControl.valueChanges.subscribe(console.log);
  }
}
