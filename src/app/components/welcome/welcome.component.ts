import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

type WelcomeFormGroup = FormGroup<{
    fullName: FormControl<string>;
    email: FormControl<string>;
    favoriteColor: FormControl<string>;
    experienceLevel: FormControl<number>;
    preferredContact: FormControl<string>;
    newsletter: FormControl<boolean>;
    interests: FormControl<string[]>;
    birthYear: FormControl<Date | null>;
}>;

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export default class WelcomeComponent {
    private readonly fb = inject(FormBuilder);

    readonly colors = [
        { value: 'red', label: '❤️ Red' },
        { value: 'blue', label: '💙 Blue' },
        { value: 'green', label: '💚 Green' },
        { value: 'purple', label: '💜 Purple' },
        { value: 'orange', label: '🧡 Orange' },
    ];

    readonly contactMethods = [
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
        { value: 'sms', label: 'SMS' },
        { value: 'mail', label: 'Postal Mail' },
    ];

    readonly availableInterests = [
        'Technology',
        'Sports',
        'Music',
        'Travel',
        'Cooking',
        'Photography',
        'Gaming',
        'Reading',
        'Art',
        'Fitness',
    ];

    readonly form: WelcomeFormGroup = this.fb.group({
        fullName: this.fb.nonNullable.control('', [
            Validators.required,
            Validators.minLength(2),
        ]),
        email: this.fb.nonNullable.control('', [
            Validators.required,
            Validators.email,
        ]),
        favoriteColor: this.fb.nonNullable.control('', [Validators.required]),
        experienceLevel: this.fb.nonNullable.control(1, [
            Validators.required,
            Validators.min(1),
            Validators.max(10),
        ]),
        preferredContact: this.fb.nonNullable.control('email', [
            Validators.required,
        ]),
        newsletter: this.fb.nonNullable.control(false),
        interests: this.fb.nonNullable.control<string[]>([]),
        birthYear: this.fb.control<Date | null>(null),
    });

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        console.log('Form value:', this.form.getRawValue());
    }

    formatExperienceLabel(value: number): string {
        if (value <= 2) return 'Beginner';
        if (value <= 5) return 'Intermediate';
        if (value <= 8) return 'Advanced';
        return 'Expert';
    }
}
