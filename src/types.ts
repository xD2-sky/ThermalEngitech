/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 
    | 'Steam Boilers' 
    | 'Thermic Fluid Heaters' 
    | 'Pressure Reducing Stations' 
    | 'Air Pre Heaters' 
    | 'Heat Exchangers' 
    | 'Hot Water Generators' 
    | 'Pollution Control Equipments' 
    | 'Other Equipments';
  tagline: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  imageType: 'boiler' | 'heater' | 'generator' | 'exchanger' | 'prs' | 'preheater' | 'pollution' | 'other';
}

export interface Inquiry {
  id?: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  requiredProduct: string;
  capacity: string;
  message: string;
  timestamp?: string;
}
