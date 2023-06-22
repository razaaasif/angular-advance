import { Component, EventEmitter, Input } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course;
  courseSelected: EventEmitter<Course> = new EventEmitter<Course>();
  public onCourseViewd(): void {
    console.log("clicked");
    this.courseSelected.emit(this.course);
  }
}
