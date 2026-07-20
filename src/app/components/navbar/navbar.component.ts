import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PROFILE } from '../../core/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly profile = PROFILE;
  readonly links = [
    { path: '/', label: 'About', exact: true },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/resume', label: 'Resume', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
  menuOpen = false;

  toggle(): void {
    this.menuOpen = !this.menuOpen;
  }

  close(): void {
    this.menuOpen = false;
  }
}
