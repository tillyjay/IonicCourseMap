
import React from 'react';
import './CourseDetailsDisplay.css'
import Course from '../types/Course';
import { IonCard,
   IonCardHeader,
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent } from '@ionic/react';

interface CourseDetailsDisplayProps {
  course: Course,
  prerequisites: Course[],
  isPrerequisiteFor: Course[]
}


const CourseDetailsDisplay: React.FC <CourseDetailsDisplayProps> = ( { course, prerequisites, isPrerequisiteFor } ) => {



  return (
  
    <>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{course.Title}</IonCardTitle>
        <IonCardSubtitle>{course.CourseCode}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <h1>Prerequisites</h1>

        {
            prerequisites.length > 0 ? 
                <ul>
                {
                    prerequisites.map(pr => {
                        return <li>{pr.CourseCode} - {pr.Title}</li>
                    })
                }
                </ul>
                : 
            <p>No Prerequisites</p>
        }


        <h1>Is Prerequisites For</h1>
        {
            isPrerequisiteFor.length > 0 ?
                    <ul>
                    {
                        isPrerequisiteFor.map(ipf => {
                            return <li>{ipf.CourseCode} - {ipf.Title}</li>
                    })
                }
                </ul>
                : 
            <p>Is not a Prerequisite for any course</p>
        }

      </IonCardContent>

    </IonCard>
    </>

  );
}

export default CourseDetailsDisplay;



