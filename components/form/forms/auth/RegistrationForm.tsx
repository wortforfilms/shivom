import App from '@/canvas/chart';
import { InputForm } from '../../InputForm';


export const UserRegistrationForm = () => {
  return <div className='w-full mt-2 flex flex-col sm:flex-row gap-2  justify-around'>
    <App/>

    <InputForm />
  </div>;
};
