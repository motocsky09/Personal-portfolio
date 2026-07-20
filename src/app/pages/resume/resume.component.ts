import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EDUCATION, EXPERIENCE, LANGUAGES, PROFILE, SKILL_GROUPS } from '../../core/portfolio.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly skillGroups = SKILL_GROUPS;
  readonly languages = LANGUAGES;
}
