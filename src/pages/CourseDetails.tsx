import { IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonButtons, 
        IonBackButton } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import './CourseDetails.css';
import axios from 'axios';
import Course from '../types/Course';
import CourseDetailsDisplay from '../components/CourseDetailsDisplay';
import { useLocation } from 'react-router-dom';
import { arrowBackCircleOutline } from "ionicons/icons";


interface PageParams {
  id: string;
}


const CourseDetails: React.FC = () => {


  const [course, setCourse] = useState<Course|null>();
  const [prerequisites, setPrerequisites] = useState<Course[]>([]);
  const [isPrerequisiteFor, setIsPrerequisiteFor] = useState<Course[]>([]);
  const location = useLocation();
  const isCourseDetailsPage = location.pathname.includes('/courses/');



  const params: PageParams = useParams();

  //get data
  useEffect(() => {
    (async () => {
        const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/courses/${params.id}`)
        console.log(response)
        if(response.status === 200) {
        
        setCourse({
          Id: response.data.Id,
          CourseCode: response.data.CourseCode, 
          Title: response.data.Title
        }) 
        
        setPrerequisites(response.data.CoursePrerequisites)
        setIsPrerequisiteFor(response.data.IsPrerequisiteFor)

      }
   
    }) ()
  }, [])


  return (
    <IonPage>
      {
      course && 
      (
        <>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="end">
            <IonBackButton defaultHref="/courses" icon={arrowBackCircleOutline} />
          </IonButtons>
          <IonTitle>Course Details for { `${course.CourseCode}` }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Semesters</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CourseDetailsDisplay course={course} 
                              prerequisites={ prerequisites}
                              isPrerequisiteFor={isPrerequisiteFor}/>
      </IonContent>
      </>
      )
    }
    </IonPage>
  );
};

export default CourseDetails;
