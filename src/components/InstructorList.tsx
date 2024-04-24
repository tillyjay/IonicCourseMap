import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import Instructor from '../types/Instructor';

interface InstructorsListProps {
 instructors: Instructor[];
}

const InstructorList: React.FC<InstructorsListProps> = ({ instructors }) => {
 return (
    <IonList>
      {instructors.map((instructor: Instructor) => (
        <IonItem
          key={instructor.Id}
          button
          detail
          routerLink={`/instructors/${instructor.Id}`}
        >
          <IonLabel>{instructor.FirstName} {instructor.LastName}</IonLabel>
        </IonItem>
      ))}
    </IonList>
 );
};

export default InstructorList;
