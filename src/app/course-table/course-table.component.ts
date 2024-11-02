import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CourseModel } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.css'
})
export class CourseTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'category', 'language', 'level', 'price', 'discount', 'rating', 'certificate'];
  dataSource = new MatTableDataSource<CourseModel>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: CoursesService) {}

  ngOnInit() {
    this.service.getAllCourses().subscribe(data => {
      this.dataSource = new MatTableDataSource<CourseModel>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
