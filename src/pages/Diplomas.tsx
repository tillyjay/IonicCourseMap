import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import './Diplomas.css';
import axios from 'axios';
import Diploma from '../types/Diploma'; 
import DiplomaList from '../components/DiplomaList';

const Diplomas: React.FC = () => {
 const [diplomas, setDiplomas] = useState<Diploma[]>([]);

 useEffect(() => {
    fetchDiplomas();
 }, []);

 const fetchDiplomas = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/diplomas`);
    setDiplomas(response.data);
 };

 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchDiplomas().then(() => {
      event.detail.complete();
    });
 };

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diplomas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Diplomas</IonTitle>
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
        <DiplomaList diplomas={diplomas} />
      </IonContent>
    </IonPage>
 );
};

export default Diplomas;
