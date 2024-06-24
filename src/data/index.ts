import { IUser } from "../interfaces"



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