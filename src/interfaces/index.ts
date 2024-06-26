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