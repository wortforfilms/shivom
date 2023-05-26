
import * as yup from "yup";
import { useState } from "react";


const login_form_messages = [
  [
    "Enter Email",
    "Enter Email"
  ],
  [
    "Enter Password",
    "Enter Password"
  ],
]

const regestration_schema_messages=[
  "Email is required",
  'Password of minimum 8 alphnumeric is required',
]


export const login_form = [
  {
    type: "email",
    name: "username",
    label: login_form_messages[0][0],
    value: "",
    options: [],
    message: login_form_messages[0][1]
  },
  {
    type: "password",
    name: "password",
    label: login_form_messages[1][0],
    value: "",
    options: [],
    message: login_form_messages[1][1]
  },
 

]

export const login_schema = yup.object().shape({
  username: yup.string().min(3).max(190).required(regestration_schema_messages[0]),
  password: yup.string().min(8).max(190).required(regestration_schema_messages[1]),

})

