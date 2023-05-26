
import * as yup from "yup";
import { useState } from "react";


export const vender_form = [
]

const vender_schema_messages = [
  "Vender Type is Required",
  "Vender GST is Required",
  "Tax information is required",
  "Address information is required"
]

export const vender_schema = yup.object().shape({
  vender_type: yup.string().min(3).max(3).required(vender_schema_messages[0]),
  vender_gst: yup.string().min(3).max(13).required(vender_schema_messages[1]),
  vender_pan: yup.string().min(12).max(12).required(vender_schema_messages[2]),
  vender_address: yup.string().min(12).max(12).required(vender_schema_messages[3]),
})