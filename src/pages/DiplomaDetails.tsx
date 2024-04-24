import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import "./DiplomaDetails.css";
import AdvisorList from "../components/AdvisorList";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { arrowBackCircleOutline } from "ionicons/icons";
import Advisor from "../types/Advisor";

interface PageParams {
  id: string;
}

const DiplomaDetails: React.FC = () => {
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [diplomaName, setDiplomaName] = useState<string>("");
  const location = useLocation();
  const isDiplomaDetailsPage = location.pathname.includes("/diplomas/");

  const params: PageParams = useParams();

  useEffect(() => {
    fetchAdvisors();
  }, []);

  const fetchAdvisors = async () => {
    const response = await axios.get(
      `https://w0424641-api.azurewebsites.net/api/diplomas/${params.id}`
    );

    console.log(response);
    const uniqueAdvisors = response.data.Advisors.filter(
      (advisor: Advisor, index: number, self: Advisor[]) =>
        index ===
        self.findIndex((t: Advisor) => t.Instructor === advisor.Instructor)
    );
    setAdvisors(uniqueAdvisors);
    setDiplomaName(response.data.Title);
  };


  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchAdvisors().then(() => {
      event.detail.complete();
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonBackButton
              defaultHref="/diplomas"
              icon={arrowBackCircleOutline}
            />
          </IonButtons>
          <IonTitle>Advisors for Diploma {diplomaName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader></IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>
        <AdvisorList advisors={advisors} />
      </IonContent>
    </IonPage>
  );
};

export default DiplomaDetails;
