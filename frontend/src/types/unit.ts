export type UnitStatus = 
    | "available"
    | "dispatched"
    | "en_route"
    | "on_scene"
    | "out_of_service"

export type Unit = {
    id: string;
    callSign: string;
    status: UnitStatus;
}