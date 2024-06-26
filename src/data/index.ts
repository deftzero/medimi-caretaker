import { TFunction } from "i18next";
import { IAppointmentsDashboard, IDiagnosis, IPublicationsDashoard, IUser } from "../interfaces"
import { MenuProps } from "antd";



export const usersData: IUser[] = [
  {
    id: 'U1',
    firstName: 'John',
    lastName: 'Smith',
    phoneNumber: '772618212',
    email: 'john.smith@example.com',
    role: 'Facility Admin',
    status: 'Active',
    createdAt: new Date()
  },
  {
    id: 'U2',
    firstName: 'Alice',
    lastName: 'Johnson',
    phoneNumber: '722318516',
    email: 'alice.johnson@example.com',
    role: 'Facility Staff',
    status: 'Active',
    createdAt: new Date()
  }
]


export const serviceOptions: any = [
  {
    id: 1,
    name: 'Service A'
  },
  {
    id: 2,
    name: 'Service B'
  }
]
export const rolesOptions = [
  { id: "Facility Staff", name: "Facility Staff" },
  { id: "Facility Admin", name: "Facility Admin" },
  { id: "Facility Manager", name: "Facility Manager" },
  { id: "Facility Technician", name: "Facility Technician" },
  { id: "Facility Secretary", name: "Facility Secretary" }
];

const datasetsBarStyles ={
  borderColor: "transparent",
  borderWidth: 3,
  barThickness: 20,
  maxBarThickness: 20,
  barPercentage: 0.5,
  borderRadius: 15,
}
export const appointmentsStatsData = (t: TFunction<"translation", undefined>) => ({
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: t("dashboard.statsLabels.total"),
      backgroundColor: "#2b7f75", 
      ...datasetsBarStyles,
      data: [10, 18, 22, 12, 14, 12, 16],
    },
    {
      label: t("dashboard.statsLabels.closed"),
      backgroundColor: "#6ac4ae", 
      ...datasetsBarStyles,
      data: [12, 16, 18, 14, 12, 14, 18],
    },
    {
      label: t("dashboard.statsLabels.pending"),
      backgroundColor: "#f86624", 
      ...datasetsBarStyles,
      data: [8, 12, 26, 10, 10, 8, 6],
    },
    {
      label: t("dashboard.statsLabels.cancelled"),
      backgroundColor: "#ffd66b", 
      ...datasetsBarStyles,
      data: [5, 6, 8, 7, 6, 5, 2],
    },
  ],
});

export const appointmentsStatsOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{ categorySpacing: 0 }],
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false, // Removes the x-axis line
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#E5E7EB", // Tailwind gray-300
        borderDash: [5, 5],
      },
      border: {
        display: false, // Removes the x-axis line
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
};

export const appointmentsDashboard:IAppointmentsDashboard[] = [
  {
    doctor: "Dr. Darlene Robertson",
    type: "Routine check-up",
    time: "Mon, Oct 17, 08:00am - 10:00am",
  },
  {
    doctor: "Dr. Darlene Robertson",
    type: "Symptom evaluation",
    time: "Mon, Oct 17, 08:00am - 10:00am",
  },
  {
    doctor: "Dr. Darlene Robertson",
    type: "Follow-up on previous treatment",
    time: "Mon, Oct 17, 08:00am - 10:00am",
  },
];

export const publicationsDashoard:IPublicationsDashoard[] = [
  {
    title: "Advancements in Neurological Research",
    facility: "Evergreen Hospital",
  },
  {
    title: "Addressing Mental Health Challenges in Adolescents",
    facility: "Willowbrook Medical Group",
  },
  {
    title: "Emerging Technologies in Rehabilitation Medicine",
    facility: "Pinecrest Health Services",
  },
];
export const appointmentsStatsDropdownItems = (t: TFunction<"translation", undefined>): MenuProps["items"] => ([
  {
    label: t("dashboard.statsView"),
    key: "1",
  },
  {
    label: t("dashboard.statsView"),
    key: "2",
  },
]);

export const diagnosisData: IDiagnosis[] = [
  { id: '1', wording: "Fatigue", service: "General Medicine" },
  { id: '2', wording: "Indigestion", service: "General Medicine" },
  { id: '3', wording: "Erythematous angina", service: "General Medicine" },
  { id: '4', wording: "Erythematopultaceous angina", service: "General Medicine" },
  { id: '5', wording: "Otitis externa", service: "General Medicine" },
  { id: '6', wording: "Flu", service: "General Medicine" },
  { id: '7', wording: "Primary hypertension", service: "General Medicine" },
];

export const servicesDropdownOptions = [
  { id: 1, name: "Cardiology" },
  { id: 2, name: "General Medicine" },
  { id: 3, name: "Pediatrics" },
  { id: 4, name: "Orthopedics" },
  { id: 5, name: "Neurology" },
  { id: 6, name: "Oncology" }
];

export const servicesData:any = [
  {
    key: '1',
    name: "Cardiology",
    description: "Cardiology service",
    headOfService: "Dr. Sarah Johnson",
    serviceAssistants: "Jane Doe",
    subSpecialities: [
      "Dental Care",
      "Cardiology",
      "Oral and Maxillofacial Surgery",
      "Pediatric Dentistry"
    ],
    expertises: [
      "Echocardiography",
      "Hypertension Management",
      "Heart Failure Management",
      "Lipid Disorders"
    ],
    stamp: {
      doctorName: "Dr. Emily Smith",
      medicalFacility: "Elmwood Medical Center, 123 Main Street, Anytown, USA",
      dateOfVisit: "March 18, 2024",
      medicalLicense: "MD123456789"
    }
  },
  {
    key: '2',
    name: "General Medicine",
    description: "General Medicine service",
    headOfService: "Dr. Michael Smith",
    serviceAssistants: "John Doe",
    subSpecialities: [
      "Internal Medicine",
      "Preventive Care",
      "Geriatric Medicine"
    ],
    expertises: [
      "Chronic Disease Management",
      "Diabetes Care",
      "Hypertension Management"
    ],
    stamp: {
      doctorName: "Dr. Anne Marie",
      medicalFacility: "Sunrise Medical Center, 456 Oak Avenue, Anytown, USA",
      dateOfVisit: "April 10, 2024",
      medicalLicense: "MD987654321"
    }
  }
];
