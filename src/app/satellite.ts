export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    warning: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning() {
        let warning = this.warning;
        if (this.type === "Space Debris") {
            return true;
        } else {
            return false;
        }
    }

    // function shouldShowWarning(name) {
    //     let debris = "Space Debris" ? true : false
    //     return debris;
    // }
}

