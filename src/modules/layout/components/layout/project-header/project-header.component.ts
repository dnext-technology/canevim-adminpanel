import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
  host: {
    class: 'd-block py-4 mb-4',
  },
})
export class ProjectHeaderComponent {}
