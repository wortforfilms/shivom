import { faker } from "@faker-js/faker";
import * as yup from "yup";

export const address_form = [
  {
    name: "house_address",
    label: "House address",
    type: "text",
    message: "Enter house  address",
    options:[],
    value:[]
  },
  {
    name: "street_address",
    label: "Street address",
    type: "text",
    message: "Enter street address",
    options:[],
    value:[]
  },
  {
    name: "district",
    label: "District",
    type: "text",
    message: "Choose district",
    options:[],
    value:[]
  },  {
    name: "city",
    label: "City",
    type: "text",
    message: "Choose city",
    options:[],
    value:[]
  },
  {
    name: "state",
    label: "State",
    type: "text",
    message:"Choose state",
    options: []

  },
  {
    name: "country",
    label: "Country",
    type: "text",
    message: "Choose country",
    options:[ ],
    value:[]
  },
  {
    name: "address pin",
    label: "Location Pin",
    type: "location",
    message: "Set pin",
    options:[ ],
    value:[]
  },
  
];


export const _address={
  street_address: faker.address.streetAddress(),
  house_address: faker.address.buildingNumber(),
  city: faker.address.cityName(),
  district: faker.address.county(),
  state: faker.address.state(),
  country: faker.address.country(),
}


export const yup_address_form= yup.object().shape({
  street_address: yup.string().notRequired(),
  house_address: yup.string().min(3).max(150).required("required"),
  city: yup.string().min(3).max(150).required("required"),
  district: yup.string().min(3).max(13).required("required"),
  state: yup.string().min(1).max(75).required("required"),
  country: yup.string().min(3).max(12).required("required"),
});


