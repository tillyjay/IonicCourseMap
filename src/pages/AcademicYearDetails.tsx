import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import './AcademicYearDetails.css';
import SemesterList from '../components/SemesterList';
import axios from 'axios';
import Semester from '../types/Semester';
import { useLocation } from 'react-router-dom';
import { arrowBackCircleOutline } from "ionicons/icons";

interface PageParams {
 id: string;
}

const AcademicYearDetails: React.FC = () => {
 const [semesters, setSemesters] = useState<Semester[]>([]); 
 const [academicYearName, setAcademicYearName] = useState<string>('');
 const location = useLocation();
 const isCourseDetailsPage = location.pathname.includes('/academicyears/');

 const params: PageParams = useParams();

 useEffect(() => {
    fetchSemesters();
 }, []);

 const fetchSemesters = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/academicyears/${params.id}`);
    setSemesters(response.data.Semesters);
    setAcademicYearName(response.data.Title);
 };

 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchSemesters().then(() => {
      event.detail.complete();
    });
 };

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonBackButton defaultHref="/academicyears" icon={arrowBackCircleOutline} />
          </IonButtons>
          <IonTitle>Details for Academic Year {academicYearName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="small">Semesters</IonTitle>
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
        <SemesterList semesters={semesters} />
      </IonContent>
    </IonPage>
 );
};

export default AcademicYearDetails;
