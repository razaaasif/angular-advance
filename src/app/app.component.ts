import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public curses = COURSES;

  onCourseSelected(course: Course) {
    // this.curses = course;
    console.log("Course : " + JSON.stringify(course));
  }
}
