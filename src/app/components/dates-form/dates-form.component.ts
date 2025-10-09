import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

type DatesFormGroup = FormGroup<{
    selectedDate: FormControl<Date | null>;
    startDate: FormControl<Date | null>;
    endDate: FormControl<Date | null>;
}>;

@Component({
    selector: 'app-dates-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './dates-form.component.html',
    styleUrl: './dates-form.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export default class DatesFormComponent {
    private readonly fb = inject(FormBuilder);

    readonly form: DatesFormGroup = this.fb.group({
        selectedDate: this.fb.control<Date | null>(null, [Validators.required]),
        startDate: this.fb.control<Date | null>(null, [Validators.required]),
        endDate: this.fb.control<Date | null>(null, [Validators.required]),
    });

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        console.log('Dates form value:', this.form.getRawValue());
    }
}
