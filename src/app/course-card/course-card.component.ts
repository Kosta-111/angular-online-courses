import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CourseModel } from '../models/courses';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  item: CourseModel | null = null;
}
