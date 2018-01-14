
export class Job {
  companyName: string;
  companyIndustry: string;
  position: string;
  period: {
    from: Date,
    to?: Date,
    forNow: Boolean
  };
}

export class Date {
  day?: string;
  month: string;
  year: string;
}

export class CvModel {
  city: string;
  phone: string;
  birthday: Date;
  sex: string;

  zeroJobExperience: boolean;
  lastJob?: Job;

  wantedPosition: {
    position: string,
    section: Array<string>
  };
}
