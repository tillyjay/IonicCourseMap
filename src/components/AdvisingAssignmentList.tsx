// AdvisingAssignmentList.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList } from '@ionic/react';
import AdvisingAssignment from '../types/AdvisingAssignment';

interface AdvisingAssignmentListProps {
 advisingAssignments: AdvisingAssignment[];
}

const AdvisingAssignmentList: React.FC<AdvisingAssignmentListProps> = ({ advisingAssignments }) => {
 return (
    <IonList>
      {advisingAssignments.map((aa: AdvisingAssignment) => (
        <IonCard key={aa.AcademicYear}>
          <IonCardHeader>
            <IonCardTitle>{aa.AcademicYear}</IonCardTitle>
            <IonCardSubtitle>{aa.Diploma}</IonCardSubtitle>
            <IonCardSubtitle>{aa.DiplomaYear}</IonCardSubtitle>  
            <IonCardSubtitle>{aa.DiplomaYearSection}</IonCardSubtitle>  
          </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
 );
};

export default AdvisingAssignmentList;
