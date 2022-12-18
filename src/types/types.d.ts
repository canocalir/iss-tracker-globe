export interface IssLocation {
    message: string;
    timestamp: number;
    iss_position: {
        latitude: number;
        longitude: number
    }
}

export interface PeopleInSpace {
    message: string;
    number: number;
    people: [{
        name: string,
        craft: string
    }]
}

