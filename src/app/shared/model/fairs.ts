type FairType = 'InPerson' | 'Virtual';
type FairStatus = 'published' | (string & {});

interface Location {
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export  interface Ifair {
  fairId: string;
  fairName: string;
  startDate: number;
  endDate: number;
  timezoneId: string;

  location: Location | null;

  numberOfUsersRegistered: number;
  numberOfSchoolsRegistered: number;

  isCandidateRegistered: boolean;

  bannerUrl: string;

  showRegisteredUsersToCandidate: boolean;
  showRegisteredUsersToSchools: boolean;
  showRegisteredSchoolsToCandidate: boolean;
  showRegisteredSchoolsToSchools: boolean;

  fairStatus: FairStatus;

  fairStartTime: string;
  fairEndTime: string;

  type: FairType;

  candidateDescription?: string | null;
  schoolDescription?: string | null;
}