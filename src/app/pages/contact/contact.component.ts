import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
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
}
