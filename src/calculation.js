import dayjs from 'dayjs';


export function calculateBiorhythm(dob,tDate,cycle){
    const birthday = dayjs(dob).startOf('day');
    const targetDate = dayjs(tDate).startOf('day');
    const diff = targetDate.diff(birthday,'days')
    /// physical = sin()
    return Math.sin(2*Math.PI*diff/cycle)
}

export function calculateBiorhythms(dob,tDate){
    return {
       date:tDate,
       physical:calculateBiorhythm(dob,tDate,23),
       emotional:calculateBiorhythm(dob,tDate,28),
       intellectual:calculateBiorhythm(dob,tDate,33)
    }
}

export function calculateBiorhythmsSeries(dob,startDate,size){
    const series = []
    const startDay = dayjs(startDate).startOf('day')
    for(let i=0;i<size;i++){
        const targetDate = startDay.add(i,'days').toISOString()
       series.push(calculateBiorhythms(dob,targetDate))
    }
    return series

}