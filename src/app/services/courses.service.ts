import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from '../models/courses';

const api = 'https://localhost:7114/api/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  controllerCourses = api + "Courses/";

  constructor(private httpclient: HttpClient) { }

  getAllCourses(): Observable<CourseModel[]> {
    return this.httpclient.get<CourseModel[]>(this.controllerCourses);
  }
}
