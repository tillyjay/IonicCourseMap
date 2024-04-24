import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import AcademicYearList from '../components/AcademicYearList';
import './AcademicYears.css';
import axios from 'axios';
import AcademicYear from '../types/AcademicYear';

const AcademicYears: React.FC = () => {
 const [academicYears, setAcademicYears] = useState<AcademicYear[]>([]);

 useEffect(() => {
    fetchAcademicYears();
 }, []);

 const fetchAcademicYears = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/academicyears`);
    setAcademicYears(response.data);
 };

 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchAcademicYears().then(() => {
      event.detail.complete();
    });
 };

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Academic Years</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Academic Years</IonTitle>
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
        <AcademicYearList academicYears={academicYears} />
      </IonContent>
    </IonPage>
 );
};

export default AcademicYears;
