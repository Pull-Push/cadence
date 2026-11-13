import type { Unit } from "../types/unit"
    type UnitCardProps = {
        unit: Unit
    }

    function UnitCard({unit}:UnitCardProps){
        return(
            <div>
                <p>Unit Id:{unit.id}</p>
                <p>Unit Callsign:{unit.callSign}</p>
                <p>Status:{unit.status}</p>
            </div>
        )
    }

    export default UnitCard