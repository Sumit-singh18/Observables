import { Component } from '@angular/core';
import { Shops } from './Shop.model';
import { Shopdata } from './Shopdata.service';
import { NgIfContext } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ObservablesDemo';
  students: Shops[] = [];
  constructor(private studentService: Shopdata) {}
  ngOnInit() {
    const studentObservable = this.studentService.getStudents();
    studentObservable.subscribe((studentsData: Shops[]) => {
      this.students = studentsData;
    });
    //studentObservable.unsubscribe();
  }
}
