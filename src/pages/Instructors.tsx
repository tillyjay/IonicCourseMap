import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import InstructorList from '../components/InstructorList';
import './Instructors.css';
import axios from 'axios';
import Instructor from '../types/Instructor';

const Instructors: React.FC = () => {
 const [instructors, setInstructors] = useState<Instructor[]>([]);

 useEffect(() => {
    fetchInstructors();
 }, []);

 const fetchInstructors = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/instructors`);
    setInstructors(response.data);
 };


 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchInstructors().then(() => {
      event.detail.complete();
    });
 };

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instructors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Instructors</IonTitle>
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
        <InstructorList instructors={instructors} />
      </IonContent>
    </IonPage>
 );
};

export default Instructors;
