import { ClinicalImage } from './clinicalimage';

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  aadharNumber: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  images: ClinicalImage[];
}
