import React from "react";

export interface Goal {
  id: string;
  text: string;
}

export interface Course {
  id: string;
  title: string;
  enrolled: Date;
  goals: Goal[];
  included: boolean;
}

interface Context {
  courses: Course[];
  addCourse: (courseTitle: string, courseDate: Date) => void;
  addGoal: (courseId: string, text: string) => void;
  deleteGoal: (courseId: string, goalId: string) => void;
  updateGoal: (courseId: string, goalId: string, newText: string) => void;
  changeFilter: (courseId: string, isIncluded: boolean) => void;
}

const CourseContext = React.createContext<Context>({
  courses: [],
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
  changeFilter: () => {},
});

export default CourseContext;
