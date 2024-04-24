// AdvisorList.tsx
import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import Advisor from '../types/Advisor';

interface AdvisorsListProps {
 advisors: Advisor[];
}

const AdvisorList: React.FC<AdvisorsListProps> = ({ advisors }) => {
 return (
    <IonList>
      {advisors.map((a: Advisor) => {
        return (
          <IonItem
            key={`${a.Instructor}-${a.AcademicYear}-${a.DiplomaYear}-${a.DiplomaYearSection}`}
            routerLink={`/advisors/${a.InstructorId}`} 
            button
            detail>
            <IonLabel>{a.Instructor}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
 );
};

export default AdvisorList;
