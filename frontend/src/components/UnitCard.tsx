import type { Unit, UnitStatus } from "../types/unit"
    type UnitCardProps = {
        unit: Unit
        onStatusChange: (unitId: string, newStatus: UnitStatus) => void
    }

    function UnitCard({unit, onStatusChange }:UnitCardProps){
        return(
            <div>
                <p>Unit Id:{unit.id}</p>
                <p>Unit Callsign:{unit.callSign}</p>
                <p>Status:{unit.status}</p>
                <select name="status" id={`status-${unit.id}`} value={unit.status} onChange={(e)=> onStatusChange(unit.id, e.currentTarget.value as UnitStatus)}>
                    <option value="available">Available</option>
                    <option value="dispatched">Dispatched</option>
                    <option value="en_route">En Route</option>
                    <option value="on_scene">On Scene</option>
                    <option value="out_of_service">Out Of Service</option>
                </select>
            </div>
        )
    }

    export default UnitCard