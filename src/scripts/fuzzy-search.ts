import Fuse from "fuse.js";
import {Course} from "../types";

const course_keys = ["id", "title"];

const course_options = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.7,
  distance: 6,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: course_keys
};

class CourseSearcher {
  private fuse: Fuse<Course>;
  private courses: Course[];

  constructor(courses: Course[] = []) {
    this.courses = courses;
    this.fuse = new Fuse<Course>(this.courses, course_options);
  }

  public update(courses: Course[]) {
    if(this.courses != courses){
      this.courses = courses;
      this.fuse.setCollection(courses);
    }
  }

  public search(query: string): Course[] {
    return this.fuse.search(query).slice(0, 10).map(result => result.item);
  }
}

export { CourseSearcher };