import React from 'react';
import './DiplomaList.css'; 
import Diploma from '../types/Diploma'; 
import { IonItem, IonLabel, IonList } from '@ionic/react';

interface DiplomasListProps {
 diplomas: Diploma[];
}

const DiplomaList: React.FC<DiplomasListProps> = ({ diplomas }) => {
 return (
    <IonList>
      {
        diplomas.map((d: Diploma) => {
          return (
            <IonItem 
              key={`${d.Id}`} 
              button detail 
              routerLink={`/diplomas/${d.Id}`}>
              <IonLabel>{d.Title}</IonLabel>
            </IonItem>
          );
        })
      }
    </IonList>
 );
};

export default DiplomaList;
