import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonBackButton,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail
 } from "@ionic/react";
 import { useParams } from "react-router";
 import React, { useState, useEffect } from "react";
 import "./SemesterDetails.css";
 import axios from "axios";
 import Course from "../types/Course";
 import CoursesList from "../components/CoursesList";
 import { useLocation } from 'react-router-dom';
 import { arrowBackCircleOutline } from "ionicons/icons";
 
 interface PageParams {
  id: string;
 }
 
 const SemesterDetails: React.FC = () => {
  const [coursesTaught, setCoursesTaught] = useState<Course[]>([]);
  const [semesterName, setSemesterName] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();
  const isCourseDetailsPage = location.pathname.includes('/courses/');
 
  const params: PageParams = useParams();
 
  useEffect(() => {
     fetchCoursesTaught();
  }, []);
 
  const fetchCoursesTaught = async () => {
     const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/semesters/${params.id}`);
     setCoursesTaught(response.data.CoursesTaught);
     setSemesterName(response.data.Name);
  };
 
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
             <IonBackButton defaultHref="/courses" icon={arrowBackCircleOutline} />
           </IonButtons>
           <IonTitle>Courses Taught for {semesterName}</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent fullscreen>
         <IonHeader collapse="condense">
           <IonToolbar>
             <IonTitle size="large">Academic Year Details</IonTitle>
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
 
 export default SemesterDetails;
 