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
      color: 'darkgrey-icon'
    },
    {
      idReminder: 1,
      title: 'Pendente',
      description: '',
      eventDate: new Date(),
      color: 'orange-icon'
    },
    {
      idReminder: 2,
      title: 'Em andamento',
      description: '',
      eventDate: new Date(),
      color: 'blue-icon'
    },
    {
      idReminder: 3,
      title: 'Concluído',
      description: '',
      eventDate: new Date(),
      color: 'green-icon'
    },
  ];

  constructor() {
    this.myControl.valueChanges.subscribe(console.log);
  }
}
