
type LinksType = {
    patch : {small : string ; large : string},
    article:string;
    wikipedia : string
}

export type LaunchType = {
    id: string;
    name: string;
    date_utc: string;
    details: string;
    links : LinksType
}

export type LaunchCardTypes = {
    cardData: LaunchType;
};

export type LaunchSingleType = {
    id:string;
    name:string;
    date_utc:string;
    details: string;
    links: LinksType;
    fairings:{reused :boolean, recovery_attempt : boolean, recovered : boolean}
    window : number;
    auto_update : boolean;
    upcoming : boolean;
    failures : {time : number;reason:string}[]
}

export type HistoryType = {
    title : string;
    details: string;
    id:string;
    event_date_utc : string
    links : {article : string}
}

export type RocketType = {
    id:string;
    name:string;
    cost_per_launch : number;
    description : string;
    flickr_images : string[] 
}

export type SingleRocketType = {
    id:string;
    name:string;
    description : string;
    active: boolean;
    boosters : number;
    cost_per_launch: number;
    success_rate_pct : number;
    first_flight : string;
    country : string;
    wikipedia : string;
    height: {meters : number; feet:number};
    diameter : { meters : number; feet: number};
    mass: {kg:number;lb : number};
    first_stage : {reusable : boolean ; engines : number; fuel_amount_tons : number; burn_time_sec : number};
    engines : { 
        isp : {sea_level : number;vacuum : number}; 
        thrust_sea_level : {kN: number; lbf : number}; 
        thrust_vacuum: {kN:number;lbf : number};
        number: number;
        type : string;
        version : string;
        layout: string;
        engine_loss_max : number;
        propellant_1 : string;
        propellant_2: string;
        thrust_to_weight : number
    };
    landing_legs : {
        number : number;
        material : string
    };
    flickr_images : string[]
}