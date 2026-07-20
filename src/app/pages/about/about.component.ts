import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, SKILL_GROUPS, STATS } from '../../core/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly stats = STATS;
  readonly skillGroups = SKILL_GROUPS;
}
