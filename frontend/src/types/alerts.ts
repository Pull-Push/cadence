export type AlertStatus = 'scheduled' | 'active' | 'resolved';

export type Alert = {
    id:string;
    title:string;
    status: AlertStatus;
    latitude:number;
    longitude:number
}