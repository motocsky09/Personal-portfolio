import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../core/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly profile = PROFILE;
  readonly contactInfo = [
    { label: 'Email', value: PROFILE.email, icon: 'bi-envelope', url: `mailto:${PROFILE.email}` },
    { label: 'Phone', value: PROFILE.phone, icon: 'bi-telephone', url: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
    { label: 'Location', value: PROFILE.location, icon: 'bi-geo-alt', url: '' },
    { label: 'Availability', value: PROFILE.available ? 'Open to new opportunities' : 'Currently unavailable', icon: 'bi-clock', url: '' },
  ];
  submitted = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private readonly fb: FormBuilder) {}

  invalid(control: string): boolean {
    const field = this.form.get(control);
    return !!field && field.invalid && field.touched;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.form.reset();
  }
}
