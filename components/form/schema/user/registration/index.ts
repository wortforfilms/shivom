
import * as yup from "yup";
import { useState } from "react";


const registration_form_messages = [
  [
    "Enter Email",
    "Enter Email"
  ],
  [
    "Enter Phone",
    "Enter Phone",
  ],
  [
    "Enter Password",
    "Enter Password"
  ],
  [
    "Choose Gender",
    'Select Gender',
    ['Male', 'Female', 'Other', 'LGBTQ']
  ],
  [
    "Select Date of Birth",
    "Select Date of Birth"
  ],
  [
    "Select Time of Birth",
    "Select Time of Birth"
  ],
  [
    "Select Place of Birth",
    "Select Place of Birth",
  ]

]

const regestration_schema_messages=[
  "Email is required",
  "Phone is required",
  'Password of minimum 8 alphnumeric is required',
  'Gender is required',
  'Date of birth is required'
]


export const registration_form = [
  {
    type: "email",
    name: "username",
    label: registration_form_messages[0][0],
    value: "",
    options: [],
    message: registration_form_messages[0][1]
  },
  {
    type: "phone",
    name: "phone_number",
    label: registration_form_messages[1][0],
    value: "",
    options: [],
    message: registration_form_messages[1][1]
  },
  {
    type: "password",
    name: "password",
    label: registration_form_messages[2][0],
    value: "",
    options: [],
    message: registration_form_messages[2][1]
  },
  {
    type: "radio",
    name: "gender",
    label: registration_form_messages[3][0],
    value: "",
    options: registration_form_messages[3][2],
    message: registration_form_messages[3][1]
  },
  {
    type: "date",
    name: "dob",
    label: registration_form_messages[4][0],
    value: "",
    options: [],
    message: registration_form_messages[4][1]
  },
  {
    type: "time",
    name: "tob",
    label: registration_form_messages[5][0],
    value: "",
    options: [],
    message: registration_form_messages[5][1]
  },
  {
    type: "pin",
    name: "pob",
    label: registration_form_messages[6][0],
    value: "",
    options: [],
    message: registration_form_messages[6][1]
  }
]

export const registration_schema = yup.object().shape({
  username: yup.string().min(3).max(190).required(regestration_schema_messages[0]),
  phone_number: yup.string().min(10).max(10).required(regestration_schema_messages[1]),
  password: yup.string().min(8).max(190).required(regestration_schema_messages[2]),
  gender: yup.string().min(1).max(10).required(regestration_schema_messages[3]),
  dob: yup.date().required(regestration_schema_messages[4]),
  tob: yup.string().notRequired(),
  pob: yup.string().notRequired(),
})

