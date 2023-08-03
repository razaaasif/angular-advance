import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public course = COURSES;
  public startDate = new Date(2000, 0, 1);
  public title = this.course[0].description;
  public price = this.course[0].price;
  public rate = this.course[0].price / 100;
  onCourseSelected(course: Course) {
    // this.curses = course;
    console.log("Course : " + JSON.stringify(course));
  }
}
