import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonLabel, IonItem, IonDatetime
} from '@ionic/react';
import React, { useState } from 'react';
import Biorhythms from './components/BiorythmCard'
import {useLocalStorage} from './hook'

function App() {
  const [dob, setDob] = useLocalStorage('dob','')
  // const targetDate = new Date().toString()
  const [targetDate,setTargetDate] = useState(new Date().toISOString())
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center" >
        {
          dob &&
          <Biorhythms targetDate={targetDate} dob={dob} />
        }
      
        <IonItem>
          {/* ion-datetime */}
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            onIonChange={(e) => setDob(e.detail.value)}
            value={dob}
          />
        </IonItem>

        <IonItem>
          {/* ion-datetime */}
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            onIonChange={(e) => setTargetDate(e.detail.value)}
            value={targetDate}
          />
        </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
