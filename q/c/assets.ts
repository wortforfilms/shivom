import { supabase } from "@/lib/Store";

export const create_issue_handler=async(data:any,userId:string)=>{
  const { data: issue_handler, error } = await supabase.from("profile").insert([
    {
      su_net_id:userId,
    },
  ]);

  return {issue_handler, error}
}



// sale pitch

// what is
// which location
// how you earn money from it
// what is best way of earning through it
// what is permission
// how its done
// what are the charges
// what are authority expenses
// whats the logistic price
// what you save
// what you earn
// which dates are avialable
// whats the rating
// attach to project
// recommend for project
// where is it used
// nearest  medical
// nearest stay

// save money book now
// 