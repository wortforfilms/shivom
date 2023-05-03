import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  company?: string;
  role: "writer" | "director" | "producer" | "crew" | "cast" | "investor" | "seller" | "vendor";
}

interface FormProps {
  onSubmit: (values: FormValues) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "writer",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={values.name} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={values.email} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" value={values.phone} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Address:
        {/* <textarea name="address" value={values.address} onChange={handleInputChange} required /> */}
      </label>
      <br />
      <label>
        Company (optional):
        <input type="text" name="company" value={values.company} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Role:
        {/* <select name="role" value={values.role} onChange={handleInputChange} required>
          <option value="writer">Writer</option>
          <option value="director">Director</option>
          <option value="producer">Producer</option>
          <option value="crew">Crew</option>
          <option value="cast">Cast</option>
          <option value="investor">Investor</option>
          <option value="seller">Seller</option>
          <option value="vendor">Vendor</option>
        </select> */}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
