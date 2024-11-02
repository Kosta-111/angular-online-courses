import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../models/courses';
import { CoursesService } from '../services/courses.service';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  courses: CourseModel[] = [];
  constructor(private service: CoursesService) {}

  ngOnInit(): void {
    this.service.getAllCourses().subscribe(data => this.courses = data);
  }
}
