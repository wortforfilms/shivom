import { useSelector } from "react-redux";
import { Eves } from "./Eves";
import { MonthView } from "./view/MonthView";

export const Month = (props: any) => {
  const { initialReduxState } = props;
const earth:typeof initialReduxState=useSelector(state=>state)
  return <div className="flex flex-col ">
 <MonthView month={earth?.calender?.in_view?.month_in_view}/>

<div className="flex flex-col gap-2 mt-4">
  <div>News</div>
  <div>Release</div>
  <div>Film Festival/Awards</div>
  <div>Todo</div>
  <div>Task</div>
  <div>Activities</div>
</div>
  </div>;

};


export const MonthViewPost = (props: any) => {
  const { initialReduxState, post } = props;
const earth:typeof initialReduxState=useSelector(state=>state)
  return <div className="flex flex-col ">
 <MonthView month={new Date(post.created_at).getMonth()}/>

{/* <div className="flex flex-col gap-2 mt-4">
  <div>News</div>
  <div>Release</div>
  <div>Film Festival/Awards</div>
  <div>Todo</div>
  <div>Task</div>
  <div>Activities</div>
</div> */}
  </div>;

};