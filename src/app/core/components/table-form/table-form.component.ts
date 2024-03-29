import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CHECKLIST } from 'src/app/data/checklist';
import { Checklist } from 'src/app/interfaces/Checklist';

interface Question {
  idQuestion: number,
  question: string,
  status: string,
  observacao: string,
}

@Component({
  selector: 'app-table-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CommonModule,
    ReactiveFormsModule,

    MatTableModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  form = this.buildForm();
  form2!: FormGroup;

  dataSource = new MatTableDataSource<Checklist>();

  displayedColumns = ['idQuestion', 'question', 'status', 'considerations'];

  get checklistFormArray(): FormArray {
    return this.form.controls.checklist as FormArray;
  }

  ngOnInit(): void {
    this.getChecklist();
  }

  onSubmit(): void {
    console.log(this.checklistFormArray.value);
  }

  private getChecklist(): void {
    this.dataSource.data = CHECKLIST;

    this.createFormArray(CHECKLIST);
  }

  // Buildar o form já com os valores (TESTE)
  private buildForm2(questions: Question[]): void {
    this.form2 = this.fb.group({
      questionsFormArray: this.fb.array(
        questions.map((item) => this.fb.group({
          idQuestion: item.idQuestion,
          question: item.question,
          status: '',
          observacao: '',
        })
        )
      )
    });
  }

  private buildForm() {
    return this.fb.group({
      checklist: this.fb.array([]),
    });
  }

  private createFormArray(checklist: Checklist[]): void {
    checklist.forEach((item) => {
      this.checklistFormArray.push(
        this.fb.group({
          idQuestion: item.idQuestion,
          question: item.question,
          status: '',
          comment: '',
        })
      );
    });
  }
}
