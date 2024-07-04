export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: string;
  createdAt?: Date;
  status?: string
}

export interface IAppointmentsDashboard{
  doctor: string;
  type: string;
  time: string;
}

export interface IPublicationsDashoard {
  title: string;
  facility: string;
}

export interface IDiagnosis {
  id: string;
  wording: string;
  service: string;
}

export interface ICreateDiagnosisModal {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
}
export interface IUpsertUserModal {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  initialValues?: any;
}

export interface IStamp {
  doctorName: string;
  medicalFacility: string;
  dateOfVisit: string;
  medicalLicense: string;
}

export interface IService {
  key: string;
  name: string;
  description: string;
  headOfService: string;
  serviceAssistants: string;
  subSpecialities: string[];
  expertises: string[];
  stamp: IStamp;
}

export interface IUpsertServiceModal {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  initialValues?: any;
}

export interface IMotive {
  key: string;
  wording: string;
  service: string;
  price: string;
  duration: number;
  status: string;
}

export interface IUpsertMotiveModal {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  initialValues?: IMotive;
}

export interface IEvolutionModal {
  visible: boolean;
  onClose: () => void;
}

export interface IDoctor {
  id: string;
  firstName: string;
  lastName: string;
  service: string;
  email: string;
  phoneNumber: string;
  reviews: string,
  stars: string
  additionalRole?: string;
  locations?: IDoctorAddress[];
  professionalBackground?: IDoctorProfessional
  additionalDetails?: IDoctorMisc
  gallery?: object[]
  planning?: IDoctorPlanning[]
  leaves?: IDoctorLeaves[]
  createdAt?: Date;
  status?: string
}

export interface IDoctorAddress {
  name: string
  label: string
  longitude: number
  latitude: number
  indications: string
  city: string
  createdAt?: Date
}

export interface IDoctorProfessional {
  about: string
  successRate: number
  experienceYears: string
  training?: IDoctorTraining[]
  experties: string[]
  subSpecialities: string[]
  experience?: IDoctorExperience[]
}

export interface IDoctorMisc {
  languages: string []
  legalDetails: {
    onms: string
    id: string
  }
}

export interface IDoctorTraining {
  year: string
  training: string
  school: string
}

export interface IDoctorExperience {
  startDate: string
  endDate: string
  facility: string
  job: string
}

export interface IDoctorPlanning {
  weekday: string
  begin: string
  end: string
  consultationType: string
  address: string
}

export interface IDoctorLeaves {
  startDate: string
  endDate: string
}


export interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phoneNumber: string;
  address: string
  bloodType: string
  background: string[]
  field: string[]
  consultations?: IPatientConsultation[]
  documents?: IPatientDocument[]
}

export interface IPatientConsultation {
  id: string
  date: Date
  doctor: string
  service: string
  type: string
  hospital: boolean
  diagnostic: string
}

export interface IPatientDocument {
  id: string
  type: string
  by: string
  hospital: boolean
  service: string
}

export interface IEvents{
  title: string;
  start: string;
  end: string;
  color: string;
  video?: boolean;
} 