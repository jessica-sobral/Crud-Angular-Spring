import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
