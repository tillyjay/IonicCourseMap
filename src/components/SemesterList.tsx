import "./SemesterList.css";
import { IonItem, IonLabel, IonList } from "@ionic/react";
import Semester from "../types/Semester";
import { useLocation } from "react-router";

interface SemestersListProps {
  semesters: Semester[];
}



const SemesterList: React.FC<SemestersListProps> = ({ semesters }) => {

  const location = useLocation();

  return (
    <IonList>
      {semesters.map((s: any) => {
        return (
          <IonItem
            key={`${s.Id}`}
            routerLink={`/semesters/${s.Id}`}
            button
            detail>
            <IonLabel>{s.Name}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default SemesterList;
