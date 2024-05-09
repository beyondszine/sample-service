export class Requirement {
  id: number;
  type: number; // this is going to be a foreign key to the supportedtypes table
  values: [object];
}
