
import * as yup from "yup";
import { useState } from "react";


const profile_form_messages = [
  [
    "Enter First Name",
    "Enter First Name"
  ],
  [
    "Enter Middle Name",
    "Enter Middle Name",
  ],
  [
    "Enter Last Name",
    "Enter Last Name"
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


export const profile_form = [
  {
    type: "text",
    name: "first_name",
    label: profile_form_messages[0][0],
    value: "",
    options: [],
    message: profile_form_messages[0][1]
  },
  {
    type: "text",
    name: "middle_name",
    label: profile_form_messages[1][0],
    value: "",
    options: [],
    message: profile_form_messages[1][1]
  },
  {
    type: "text",
    name: "last_name",
    label: profile_form_messages[2][0],
    value: "",
    options: [],
    message: profile_form_messages[2][1]
  },
  {
    type: "radio",
    name: "gender",
    label: profile_form_messages[3][0],
    value: "",
    options: profile_form_messages[3][3],
    message: profile_form_messages[3][1]
  },
  {
    type: "date",
    name: "dob",
    label: profile_form_messages[4][0],
    value: "",
    options: [],
    message: profile_form_messages[4][1]
  },
  {
    type: "time",
    name: "tob",
    label: profile_form_messages[5][0],
    value: "",
    options: [],
    message: profile_form_messages[5][1]
  },
  {
    type: "pin",
    name: "pob",
    label: profile_form_messages[6][0],
    value: "",
    options: [],
    message: profile_form_messages[6][1]
  }
]

export const profile_schema = yup.object().shape({

  first_name: yup.string().min(3).max(190).required("First Name is required"),
  middle_name: yup.string().min(3).max(190).notRequired(),
  last_name: yup.string().min(3).max(190).notRequired(),
  gender: yup.string().min(1).max(1).required('Gender is required'),
  dob: yup.date().required('Date of birth is required'),
  tob: yup.string().notRequired(),
  pob: yup.string().notRequired(),
})