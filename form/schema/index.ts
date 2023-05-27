import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


// form to create field 
// type 
// template
// 

import * as yup from "yup";
import { useState } from "react";


const vender_form_messages = [
  [
    "Select Vender Type",
    "Select Vender Type"
  ],
  [
    "Select Vender GST",
    "Select Vender GST",
  ],
  [
    "Select Vender PAN",
    "Select Vender PAN"
  ]

]

const profile_schema_messages = [
  [],
  [],
  [],
  []
]

// const profile_form = [
//   {
//     type: "text",
//     name: "first_name",
//     label: profile_form_messages[0][0],
//     value: "",
//     options: [],
//     message: profile_form_messages[0][1]
//   },
//   {
//     type: "text",
//     name: "middle_name",
//     label: profile_form_messages[1][0],
//     value: "",
//     options: [],
//     message: profile_form_messages[1][1]
//   },
//   {
//     type: "text",
//     name: "last_name",
//     label: profile_form_messages[2][0],
//     value: "",
//     options: [],
//     message: profile_form_messages[2][1]
//   },
//   {
//     type: "radio",
//     name: "gender",
//     label: profile_form_messages[3][0],
//     value: "",
//     options: profile_form_messages[3][3],
//     message: profile_form_messages[3][1]
//   },
//   {
//     type: "date",
//     name: "dob",
//     label: profile_form_messages[4][0],
//     value: "",
//     options: [],
//     message: profile_form_messages[4][1]
//   },
//   {
//     type: "time",
//     name: "tob",
//     label: profile_form_messages[5][0],
//     value: "",
//     options: [],
//     message: profile_form_messages[5][1]
//   },
//   {
//     type: "pin",
//     name: "pob",
//     label: profile_form_messages[6][0],
//     value: "",
//     options: [],
//     message: profile_form_messages[6][1]
//   }
// ]

// const profile_schema = yup.object().shape({
//   first_name: yup.string().min(3).max(100).required("First Name is required"),
//   last_name: yup.string().min(3).max(100).notRequired(),
//   middle_name: yup.string().min(3).max(100).notRequired(),
//   gender: yup.string().min(1).max(1).required('Gender is required'),
//   dob: yup.date().required('Date of birth is required'),
//   tob: yup.string().notRequired(),
//   pob: yup.string().notRequired(),
// })

export  const vender_form = [
  {
    type: "radio",
    name: "vender_type",
    label: vender_form_messages[0][0],
    value: "",
    options: [],
    message: vender_form_messages[0][1]
  },
  {
    type: "text",
    name: "vender_gst",
    label: vender_form_messages[1][0],
    value: "",
    options: [],
    message: vender_form_messages[1][1]
  },
  {
    type: "text",
    name: "vender_pan",
    label: vender_form_messages[2][0],
    value: "",
    options: [],
    message: vender_form_messages[2][1]
  },
  // {
  //   type: "text",
  //   name: "vender_address",
  //   label: vender_form_messages[3][0],
  //   value: "",
  //   options: [],
  //   message: vender_form_messages[3][1]
  // },

]


const vender_schema_messages = [
  "Vender Type is Required",
  "Vender GST is Required",
  "Tax information is required",
  // "Address information is required"

]

export const vender_schema = yup.object().shape({
  vender_type: yup.string().min(3).max(3).required(vender_schema_messages[0]),
  vender_gst: yup.string().min(3).max(13).required(vender_schema_messages[1]),
  vender_pan: yup.string().min(12).max(12).required(vender_schema_messages[2]),
  // vender_address: yup.string().min(12).max(12).required(vender_schema_messages[3]),
})


const product_schema_messages = [
  "Product Type is required",
  "Product Category is required",
  "Product GST is required",
  "Product Title is required",
  "Product Description is required",
  "Product Precautions is required",
  "Product Inventory Address is required",
]

const product_schema = yup.object().shape({
  product_type: yup.string().min(3).max(30).required(product_schema_messages[0]),
  product_category: yup.string().min(3).max(30).required(product_schema_messages[1]),
  product_gst: yup.string().min(3).max(13).required(product_schema_messages[2]),
  product_title: yup.string().min(12).max(120).required(product_schema_messages[3]),
  product_description: yup.string().min(12).max(1200).required(product_schema_messages[4]),
  product_specification: yup.string().min(12).max(1200).notRequired(),
  product_technical_information: yup.string().min(12).max(1200).notRequired(),
  product_precautions: yup.string().min(12).max(1200).required(product_schema_messages[5]),
  product_inventory_address: yup.string().min(12).max(120).required(product_schema_messages[6]),
})


