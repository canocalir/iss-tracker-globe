export interface IssLocation {
    name: string,
    id: number,
    latitude: number,
    longitude: number,
    altitude: number,
    velocity: number,
    visibility: string,
    footprint: number,
    timestamp: number,
    daynum: number,
    solar_lat: number,
    solar_lon: number,
    units: number
}

export interface PeopleInSpace {
  number: number;
  people: [
    {
      name: string;
      biophoto: string;
      biophotowidth: number;
      biophotoheight: number;
      country: string;
      countryflag: string;
      launchdate: string;
      careerdays: number;
      title: string;
      location: string;
      bio: string;
      biolink: string;
      twitter: string;
    }
  ];
}
