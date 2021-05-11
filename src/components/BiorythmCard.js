import React from 'react';
import {IonCard,IonCardHeader,IonCardContent,IonCardTitle, IonItem} from '@ionic/react';
import {calculateBiorhythms } from '../calculation'
import BiorythmChart from './BiorythmChart'
import './Biorthmcard.css'
const dayjs =require('dayjs')

const BiorythmCard = ({dob,targetDate}) => {
    const tdate = dayjs(targetDate)
    const {physical,emotional,intellectual}= calculateBiorhythms(dob,targetDate)
    return (
        <IonCard className="biorythm-card" >
            <IonCardHeader>
                <IonCardTitle>{tdate.format('D MMM YYYY')}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent >
                <BiorythmChart dob={dob} targetDate={targetDate} />
                <p className="phy">Physical: {physical.toFixed(4)}</p>
                <p className="emotional">Emotional:{emotional.toFixed(4)}</p>
                <p className='int'>Intellecual:{intellectual.toFixed(4)}</p>
            </IonCardContent>
        </IonCard>
    );
};

export default BiorythmCard;