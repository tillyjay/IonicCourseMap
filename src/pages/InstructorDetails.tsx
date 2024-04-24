import React, { useState, useEffect } from 'react';
import { IonContent,
     IonHeader, 
     IonPage, 
     IonTitle,
      IonToolbar, 
      IonRefresher, 
      IonRefresherContent, 
      RefresherEventDetail,
      IonButtons,
      IonBackButton,
      IonSearchbar, 
    } from '@ionic/react';
import CoursesList from "../components/CoursesList";
import './InstructorDetails.css';
import axios from 'axios';
import Course from '../types/Course';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { arrowBackCircleOutline } from "ionicons/icons";


interface PageParams {
    id: string;
   }
   

const InstructorDetails: React.FC = () => {

 const [coursesTaught, setCoursesTaught] = useState<Course[]>([]);
 const [instructorName, setInstructorName] = useState<string>("");
 const [searchTerm, setSearchTerm] = useState<string>("");
 const location = useLocation();
 const isCourseDetailsPage = location.pathname.includes('/instructors/');


 const params: PageParams = useParams();

 useEffect(() => {
    fetchCoursesTaught();
 }, []);

 const fetchCoursesTaught = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/instructors/${params.id}`);
    setCoursesTaught(response.data.CoursesTaught);
    setInstructorName(response.data.FirstName + ' ' + response.data.LastName);
 };

 console.log(coursesTaught);

 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchCoursesTaught().then(() => {
      event.detail.complete();
    });
 };

 return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
           <IonButtons slot="end">
             <IonBackButton defaultHref="/instructors" icon={arrowBackCircleOutline} />
           </IonButtons>
           <IonTitle>Courses Taught by {instructorName}</IonTitle>
         </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Instructor Course Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>
        <IonSearchbar
           value={searchTerm}
           onIonInput={e => setSearchTerm(e.detail.value!)}
           placeholder="Search courses"
         />
         <CoursesList courses={coursesTaught} searchTerm={searchTerm} />
      </IonContent>
    </IonPage>
 );
};

export default InstructorDetails;
