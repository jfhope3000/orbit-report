export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    warning: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean, warning: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        this.warning = warning;
       
    }

    shouldShowWarning() {
        let type = this.type;
            if (type === "Space Debris") {
                this.warning = true;
            } else {
                this.warning = false;
            } 
    }
}