import { find_existing_project_soch } from "./find_existing_project_soch";
import { confirm_create_local_script } from "./confirm_create_local_script";


export const create_project = (data: any, setDProject: any) => {
  const project_create = `pre create for ${data.project_title}`;

  find_existing_project_soch(project_create).then((res) => {
    if (res && res.project && res.project.length > 0) {
      setDProject(res.project[0]);
    } else {
      confirm_create_local_script(project_create, data).then(res => {
        if (res && res.project && res.project.length > 0) {
          setDProject(res.project[0]);
        }
      }).catch(error => console.log(error));
    }
  }).catch(error => console.log(error));

};
