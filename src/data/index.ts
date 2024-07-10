import { TFunction } from "i18next";
import {
  IAppointmentsDashboard,
  IDiagnosis,
  IDoctor,
  IEvents,
  IMotive,
  IPatient,
  IPublicationsDashoard,
  IUser,
} from "../interfaces";
import { MenuProps } from "antd";
import { ScriptableContext } from "chart.js";

export const usersData: IUser[] = [
  {
    id: "U1",
    firstName: "John",
    lastName: "Smith",
    phoneNumber: "772618212",
    email: "john.smith@example.com",
    role: "Facility Admin",
    status: "Active",
    createdAt: new Date(),
  },
  {
    id: "U2",
    firstName: "Alice",
    lastName: "Johnson",
    phoneNumber: "722318516",
    email: "alice.johnson@example.com",
    role: "Facility Staff",
    status: "Active",
    createdAt: new Date(),
  },
];

export const serviceOptions: any = [
  {
    id: 1,
    name: "Service A",
  },
  {
    id: 2,
    name: "Service B",
  },
];

export const consultationOptions: any = [
  { id: 1, name: 'Online' },
  { id: 2, name: 'Onsite' },
]


export const rolesOptions = [
  { id: "Facility Staff", name: "Facility Staff" },
  { id: "Facility Admin", name: "Facility Admin" },
  { id: "Facility Manager", name: "Facility Manager" },
  { id: "Facility Technician", name: "Facility Technician" },
  { id: "Facility Secretary", name: "Facility Secretary" },
];

export const doctorTypeOptions = [
  { id: 1, name: "General Practitioner" },
  { id: 2, name: "Cardiologist" },
  { id: 3, name: "Radiologist" },
];

export const doctorSpecialityOptions = [
  { id: 1, name: "Dentist" },
  { id: 2, name: "Heart" },
  { id: 3, name: "Psychology" },
];

export const doctorServiceOptions = [
  { id: 1, name: "Médecine Générale" },
];

const datasetsBarStyles = {
  borderColor: "transparent",
  borderWidth: 3,
  barThickness: 20,
  maxBarThickness: 20,
  barPercentage: 0.5,
  borderRadius: 15,
};
export const appointmentsStatsData = (
  t: TFunction<"translation", undefined>
) => ({
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

export const evolutionOfPatientFlowOptions: any = {
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
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: true,
    },
  },
};
export const evolutionOfPatientFlowData = (
  t: TFunction<"translation", undefined>
) => ({
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: t("statistics.patientFlow"),
      data: [5, 6, 2, 4, 6, 1, 8],
      fill: "start",
      lineTension: 0.8,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgb(106,196,174,1)");
        gradient.addColorStop(1, "rgb(106,196,174,0.1)");
        return gradient;
      },
      borderColor: "rgb(106,196,174)",
    },
  ],
});

export const doughnutData = (t: TFunction<"translation", undefined>) => ({
  labels: [
    t("statistics.flu"),
    t("statistics.malaria"),
    t("statistics.others"),
  ],
  datasets: [
    {
      data: [15, 9, 2],
      backgroundColor: ["#6366F1", "#34D399", "#FBBF24"],
      hoverBackgroundColor: ["#4F46E5", "#10B981", "#F59E0B"],
      borderWidth: 1,
      cutout: "80%",
      circumference: 240,
      rotation: 120,
    },
  ],
});

export const doughnutOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  maintainAspectRatio: false,
  cutoutPercentage: 80,
};

export const appointmentsDashboard: IAppointmentsDashboard[] = [
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

export const publicationsDashoard: IPublicationsDashoard[] = [
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
export const appointmentsStatsDropdownItems = (
  t: TFunction<"translation", undefined>
): MenuProps["items"] => [
  {
    label: t("dashboard.statsView"),
    key: "1",
  },
  {
    label: t("dashboard.statsView"),
    key: "2",
  },
];

export const diagnosisData: IDiagnosis[] = [
  { id: "1", wording: "Fatigue", service: "General Medicine" },
  { id: "2", wording: "Indigestion", service: "General Medicine" },
  { id: "3", wording: "Erythematous angina", service: "General Medicine" },
  {
    id: "4",
    wording: "Erythematopultaceous angina",
    service: "General Medicine",
  },
  { id: "5", wording: "Otitis externa", service: "General Medicine" },
  { id: "6", wording: "Flu", service: "General Medicine" },
  { id: "7", wording: "Primary hypertension", service: "General Medicine" },
];

export const servicesDropdownOptions = [
  { id: 1, name: "Cardiology" },
  { id: 2, name: "General Medicine" },
  { id: 3, name: "Pediatrics" },
  { id: 4, name: "Orthopedics" },
  { id: 5, name: "Neurology" },
  { id: 6, name: "Oncology" },
];

export const servicesData: any = [
  {
    key: "1",
    name: "Cardiology",
    description: "Cardiology service",
    headOfService: "Dr. Sarah Johnson",
    serviceAssistants: "Jane Doe",
    subSpecialities: [
      "Dental Care",
      "Cardiology",
      "Oral and Maxillofacial Surgery",
      "Pediatric Dentistry",
    ],
    expertises: [
      "Echocardiography",
      "Hypertension Management",
      "Heart Failure Management",
      "Lipid Disorders",
    ],
    stamp: {
      doctorName: "Dr. Emily Smith",
      medicalFacility: "Elmwood Medical Center, 123 Main Street, Anytown, USA",
      dateOfVisit: "March 18, 2024",
      medicalLicense: "MD123456789",
    },
  },
  {
    key: "2",
    name: "General Medicine",
    description: "General Medicine service",
    headOfService: "Dr. Michael Smith",
    serviceAssistants: "John Doe",
    subSpecialities: [
      "Internal Medicine",
      "Preventive Care",
      "Geriatric Medicine",
    ],
    expertises: [
      "Chronic Disease Management",
      "Diabetes Care",
      "Hypertension Management",
    ],
    stamp: {
      doctorName: "Dr. Anne Marie",
      medicalFacility: "Sunrise Medical Center, 456 Oak Avenue, Anytown, USA",
      dateOfVisit: "April 10, 2024",
      medicalLicense: "MD987654321",
    },
  },
];

export const motivesStatusOptions = [
  { id: 1, name: "Active" },
  { id: 2, name: "Inactive" },
];

export const motivesData: IMotive[] = [
  {
    key: "1",
    wording: "Consultation",
    service: "Cardiology",
    price: "20,000",
    duration: 35,
    status: "Active",
  },
  {
    key: "2",
    wording: "Taking pulse",
    service: "General medicine",
    price: "15,000",
    duration: 25,
    status: "Active",
  },
  {
    key: "3",
    wording: "Annual Check up",
    service: "Cardiology",
    price: "25,000",
    duration: 20,
    status: "Active",
  },
  {
    key: "4",
    wording: "Test",
    service: "Cardiology",
    price: "40,000",
    duration: 30,
    status: "Active",
  },
  {
    key: "5",
    wording: "Abdominal pain",
    service: "General medicine",
    price: "90,000",
    duration: 30,
    status: "Active",
  },
  {
    key: "6",
    wording: "Sore throat",
    service: "General medicine",
    price: "5,000",
    duration: 30,
    status: "Active",
  },
];

export const contactsData = [
  {
    name: "Darrell Steward",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
    unread: 2,
    opened: true,
  },
  {
    name: "Ralph Edwards",
    message: "I hope you get well soon",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Leslie Alexander",
    message: "I have prescribed for you...",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Jerome Bell",
    message: "Thank You for your advice.",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Dianne Russell",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Darlene Robertson",
    message: "Okay, see you again Human",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Bessie Cooper",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Courtney Henry",
    message: "I have prescribed for you...",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Marvin McKinney",
    message: "Okay, see you again Human",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Ronald Richards",
    message: "Thank You for your advice.",
    avatar: "",
    status: "Patients",
    unread: 1,
  },
  {
    name: "Cameron Williamson",
    message: "I have prescribed for you...",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Esther Howard",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
  },
];

export const messagesData = [
  {
    sender: "Jay Hargudson",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "",
    time: "1 day ago",
    file: {
      fileSize: "12kb",
      fileName: "Hello.pdf",
    },
  },
  {
    images: [
      "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
      "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    ],
    sender: "Me",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "",
    time: "1 day ago",
  },
  {
    sender: "Jay Hargudson",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "",
    time: "1 day ago",
  },
  {
    sender: "Me",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "",
    time: "1 day ago",
  },
];

export const doctorsData: IDoctor[] = [
  {
    id: "SN-H1-D1-M1",
    firstName: "Jane",
    lastName: "Cooper",
    service: "General medicine",
    email: "jane.cooper@doc.com",
    phoneNumber: "+22 29392939",
    reviews: "50+",
    stars: '5.0',
    additionalRole: "Service Admin",
    locations: [
      {
        name: "Dakar-Plateau Face Guiguon",
        label: "Label",
        longitude: 23.2423,
        latitude: 49.2398,
        indications: "First door",
        city: "Dakar Plateau",
        createdAt: new Date(),
      },
      {
        name: "Fass-Ecole 2, Medina, Dakar",
        label: "Label",
        longitude: 23.2423,
        latitude: 49.2398,
        indications: "Devant Pharmacie",
        city: "Medina",
        createdAt: new Date(),
      },
    ],
    professionalBackground: {
      about:
        "Dr. Jane Copper is a highly skilled and compassionate physician dedicated to providing quality healthcare services to patients. With over a decade of experience in the medical field, he specializes in internal medicine and cardiology.",
      successRate: 98,
      experienceYears: "3+",
      training: [
        {
          year: "2002",
          training: "Residency in Internal Medicine",
          school: "Johns Hopkins Hospital",
        },
        {
          year: "2006",
          training: "Doctor of Medicine (MD)",
          school: "Harvard Medical School",
        },
        {
          year: "2010",
          training: "Bachelor of Science in Biology",
          school: "Stanford University",
        },
      ],
      experties: [
        "Echocardiography",
        "Hypertension Management",
        "Heart Failure Management",
        "Lipid Disorders",
      ],
      subSpecialities: [
        "Dental Care",
        "Cardiology",
        "Oral and Maxillofacial Surgery",
        "Pediatric Dentistry",
      ],
      experience: [
        {
          startDate: '2010',
          endDate: 'Present',
          facility: 'Mercy Hospital',
          job: 'Cardiologist',
        },
        {
          startDate: '2007',
          endDate: '2010',
          facility: 'Harvard Medical School',
          job: 'Internal Medicine Physician',
        },
        {
          startDate: '2006',
          endDate: '2007',
          facility: 'Massachusetts General Hospital',
          job: 'Internship',
        }
      ]
    },
    additionalDetails: {
      languages: ['English', 'French'],
      legalDetails: {
        onms: '12939293',
        id: 'SN-2388'
      }
    },
    gallery: [
      {
        name: 'third meeting mom.doc',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODczMw&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        size: 2388488,
        type: 'doc'
      },
      {
        name: 'third meeting mom.pdf',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODczMw&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        size: 2388488,
        type: 'pdf'
      }
    ],
    createdAt: new Date(),
    status: "Active",
  },
];

export const patientsData: IPatient[] = [
  {
    id: "SN-P-01",
    firstName: "Alice",
    lastName: "Hopkins",
    dob: new Date('1995-05-25'),
    email: "alice.hopkins@medimi.com",
    address: "HLM Grand Yotf",
    phoneNumber: "+229949293",
    bloodType: "B+",
    background: ['Covid-19', 'Hypertension'],
    field: ['Medicine', 'Diabetes'],
    consultations: [
      {
        id: "1",
        date: new Date(),
        doctor: "John Allen",
        service: "Cardiology",
        type: "Online",
        hospital: false,
        diagnostic: "Hypertension",
      },
      {
        id: "2",
        date: new Date(),
        doctor: "Alice Smith",
        service: "Cardiology",
        type: "Online",
        hospital: false,
        diagnostic: "Migraine",
      },
      {
        id: "3",
        date: new Date(),
        doctor: "Emily Davis",
        service: "Neurology",
        type: "Onsite",
        hospital: true,
        diagnostic: "Follow-up",
      }
    ],
    documents: [
      {
        id: "1",
        type: "Prescription",
        by: "Dr. Yang",
        hospital: false,
        service: "Neurology"
      },
      {
        id: "2",
        type: "Analysis Report",
        by: "Dr. Michael Thompson",
        hospital: true,
        service: "Dermatology"
      },
      {
        id: "2",
        type: "Analysis Report",
        by: "Dr. Bob Johnson",
        hospital: false,
        service: "Orthopedics"
      }
    ]
  }
]

export const eventsData:IEvents[] = [
  {
    title: "Jane Coper",
    start: "2024-07-01T09:00:00",
    end: "2024-07-01T09:30:00",
    color: "#6CC1A4",
    video: true,
  },
  {
    title: "Jane Coper",
    start: "2024-07-01T09:30:00",
    end: "2024-07-01T10:00:00",
    color: "#6CC1A4",
    video: true,
  },
  {
    title: "Jane Coper",
    start: "2024-07-01T10:00:00",
    end: "2024-07-01T10:30:00",
    color: "#6CC1A4",
    video: true,
  },
  {
    title: "Jane Coper",
    start: "2024-07-02T09:00:00",
    end: "2024-07-02T09:30:00",
    color: "#6CC1A4",
    video: true,
  },
  {
    title: "Jane Coper",
    start: "2024-07-06T09:00:00",
    end: "2024-07-06T09:30:00",
    color: "#6CC1A4",
    video: true,
  },
  {
    title: "Jane Coper",
    start: "2024-07-08T09:00:00",
    end: "2024-07-08T09:30:00",
    color: "#6CC1A4",
    video: true,
  },
  {
    title: "Jane Coper",
    start: "2024-07-13T09:00:00",
    end: "2024-07-13T09:30:00",
    color: "#6CC1A4",
  },
  {
    title: "Jane Coper",
    start: "2024-07-23T09:00:00",
    end: "2024-07-23T09:30:00",
    color: "#6CC1A4",
  },
  {
    title: "Jane Coper",
    start: "2024-07-28T09:00:00",
    end: "2024-07-28T09:30:00",
    color: "#6CC1A4",
  },
  {
    title: "Jhon Smith",
    start: "2024-07-28T09:00:00",
    end: "2024-07-28T09:30:00",
    color: "#60A5FA",
  },
  {
    title: "Mr. Jonaton",
    start: "2024-07-26T09:00:00",
    end: "2024-07-26T09:30:00",
    color: "#2563EB",
  },
];

export const documents = [
  { title: "Third Meeting MOM.doc", },
  { title: "Third Meeting MOM.doc", },
];

export const consultations = [
  {
    doctor: "Dr. Darlene Robertson",
    evaluation: "Routine check-up",
    date: "Mon, Oct 17, 09:00am - 10am",
  },
  {
    doctor: "Dr. Darlene Robertson",
    evaluation: "Symptom evaluation",
    date: "Mon, Oct 17, 09:00am - 10am",
  },
  {
    doctor: "Dr. Darlene Robertson",
    evaluation: "Symptom evaluation",
    date: "Mon, Oct 17, 09:00am - 10am",
  },
  {
    doctor: "Dr. Darlene Robertson",
    evaluation: "Symptom evaluation",
    date: "Mon, Oct 17, 09:00am - 10am",
  },
];