import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import './AdvisorDetails.css';
import AdvisingAssignmentList from '../components/AdvisingAssignmentList';
import axios from 'axios';
import Semester from '../types/Semester';
import { useLocation } from 'react-router-dom';
import { arrowBackCircleOutline } from "ionicons/icons";
import AdvisingAssignment from '../types/AdvisingAssignment';
import AdvisingAssignmenList from '../components/AdvisingAssignmentList';

interface PageParams {
 id: string;
}

const AdvisorDetails: React.FC = () => {
 const [advisingAssignments, setAdvisingAssignments] = useState<AdvisingAssignment[]>([]); 
 const [diplomaName, setDiplomaName] = useState<string>('');

 const location = useLocation();


 const params: PageParams = useParams();

 useEffect(() => {
    fetchAdvisingAssignments();
 }, []);

 const fetchAdvisingAssignments = async () => {
    const response = await axios.get(`https://w0424641-api.azurewebsites.net/api/instructors/${params.id}`);
    setAdvisingAssignments(response.data.AdvisingAssignments);
    setDiplomaName(response.data.Title);

 };

 const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchAdvisingAssignments().then(() => {
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
           <IonTitle>Advising Assignments</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent fullscreen>
         <IonHeader collapse="condense">
           <IonToolbar>
             <IonTitle size="large">Advising Assignments</IonTitle>
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
         <AdvisingAssignmentList advisingAssignments={advisingAssignments} />
       </IonContent>
    </IonPage>
   );
};

export default AdvisorDetails;
