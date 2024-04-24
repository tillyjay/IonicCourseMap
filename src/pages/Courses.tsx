import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import './Courses.css';
import CoursesList from '../components/CoursesList';
import axios from 'axios';
import Course from '../types/Course';

const Courses: React.FC = () => {
 const [courses, setCourses] = useState<Course[]>([]);
 const [searchTerm, setSearchTerm] = useState('');

 useEffect(() => {
    fetchCourses();
 }, []);

 const fetchCourses = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/courses`);
    setCourses(response.data);
 };

 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchCourses().then(() => {
      event.detail.complete();
    });
 };

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
        <IonSearchbar
          value={searchTerm}
          onIonInput={(e) => setSearchTerm(e.detail.value!)}
          placeholder="Search courses"
        />
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Courses</IonTitle>
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
        <CoursesList courses={courses} searchTerm={searchTerm} />
      </IonContent>
    </IonPage>
 );
};

export default Courses;
