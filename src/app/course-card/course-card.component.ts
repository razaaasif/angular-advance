import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course;
  @Input({ required: true }) index: number;
  @Output() courseSelected: EventEmitter<Course> = new EventEmitter<Course>();
  public onCourseView(): void {
    console.log("clicked");
    this.courseSelected.emit(this.course);
  }
  cardClass() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }
}
