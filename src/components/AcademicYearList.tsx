import { useState, useEffect } from 'react';
import './AcademicYearList.css';
import AcademicYear from '../types/AcademicYear';
import axios from 'axios';
import { IonItem, IonLabel, IonList } from '@ionic/react';



interface AcademicYearsListProps {
  academicYears: AcademicYear[]
}


const AcademicYearList: React.FC <AcademicYearsListProps> = ( { academicYears} ) => {

  
  return (
    <IonList>
      {
        academicYears.map((ay:AcademicYear) => {
          return (
              <IonItem 
                key={`${ay.Id}`} 
                button detail 
                routerLink={`/academicyears/${ay.Id}`}>
                  <IonLabel>{ay.Title}</IonLabel>
                </IonItem>
            )
        })
      }
    </IonList>
  );
}

export default AcademicYearList;



