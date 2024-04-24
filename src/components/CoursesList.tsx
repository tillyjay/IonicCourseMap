import "./CoursesList.css";
import { IonItem, IonLabel, IonList } from "@ionic/react";
import Course from "../types/Course";

interface CoursesListProps {
  courses: Course[];
  searchTerm: string;
}

const CoursesList: React.FC<CoursesListProps> = ({ courses, searchTerm }) => {
  
const filteredCourses = courses.filter(course =>
 course.CourseCode && course.Title &&
 (course.CourseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
 course.Title.toLowerCase().includes(searchTerm.toLowerCase()))
);


  if (filteredCourses.length === 0) {
    return <p>No courses found</p>;
  }

 return (
  <IonList>
    {filteredCourses.map((c: Course) => {
      return (
        <IonItem key={`${c.Id}`} 
        routerLink={`/courses/${c.Id}`}
        button 
        detail>
          <IonLabel>{`${c.CourseCode} - ${c.Title}`}</IonLabel>
        </IonItem>
      );
    })}
  </IonList>
);
};

export default CoursesList;
