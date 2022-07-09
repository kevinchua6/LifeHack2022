type SiteAProperties = {
  Name: string;
  description: string;
  ID: string;
  Collection_Type: string;
  Lat: string;
  Lon: String;
  Location: string;
  Directions: string;
  Postal_Code: string;
  Remarks: string;
  Website: string;
  XVal: string;
  YVal: string;
};

type SiteBProperties = {
  Name: string;
  description: string;
  ID: string;
  Collection_Type: string;
  Lat: string;
  Lon: String;
  Location: string;
  Directions: string;
  Postal_Code: string;
  Remarks: string;
  Website: string;
  Premises_Type: string;
  Directory: string;
  Town_Council: string;
  X: String;
  Y: string;
};

type SiteCProperties = {
  Name: string;
  description: string;
  ID: string;
  Lat: string;
  Lon: string;
  Location: string;
  Directions: string;
  Postal_Code: string;
  Remarks: string;
  Website: string;
  Town_Council: string;
  X: string;
  Y: string;
  Date_and_Time: string;
};

export type Site = {
  type: string;
  properties: SiteAProperties | SiteBProperties | SiteCProperties;
  geometry: {
    type: string;
    coordinates: number[];
  };
};
