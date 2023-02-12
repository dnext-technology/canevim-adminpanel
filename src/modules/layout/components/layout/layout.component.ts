import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHeaderComponent } from './project-header/project-header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectHeaderComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  host: {
    class: 'layout-component d-block h-100 position-relative container-fluid',
  },
})
export default class LayoutComponent {}
