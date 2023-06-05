import { toast } from "react-toastify";

export const notify = (message:string) => (toast.info(message));
export const warning = (message:any) => (toast.warning(message));
export const errorT = (message:any) => (toast.error(message));
export const success= (message:any) => (toast.success(message));
export const warn= (message:any) => (toast.warn(message));
