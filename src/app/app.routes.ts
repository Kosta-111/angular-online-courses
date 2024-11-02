import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseTableComponent } from './course-table/course-table.component';

export const routes: Routes = [
    { path: 'home', component: CourseListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'courses', component: CourseTableComponent }
];
