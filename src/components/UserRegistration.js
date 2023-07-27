import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const loginFlag = useSelector((store) => store.user.loginFlag);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z ]+$/, "Name must contain only letters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    dob: Yup.string().required("Date of Birth is required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one number, and one special character"
      )
      .min(8, "Password must be at least 8 characters long"),
    city: Yup.string().required("City is required"),
    pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^\d{6}$/, "Pincode must be 6 digits"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    dob: "",
    city: "",
    pincode: "",
  };
  const findAge = (dob) => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dobDate;

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInYears = ageInMilliseconds / millisecondsPerYear;
    const age = Math.floor(ageInYears);

    return age;
  };

  // Handle form submission
  const handleSubmit = (values) => {
    const age = findAge(values.dob);
    if (age > 18) {
      dispatch(registerUser(values));
      if (!loginFlag) {
        navigate("/user-container");
      }
    } else {
      alert("You must be at least 18 years old to register.");
    }
  };

  const cities = [
    "Ahmedabad",
    "Agra",
    "Ahmedabad",
    "Allahabad (Prayagraj)",
    "Amritsar",
    "Bangalore (Bengaluru)",
    "Bhopal",
    "Chennai",
    "Coimbatore",
    "Delhi",
    "Ghaziabad",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jodhpur",
    "Kanpur",
    "Kochi (Cochin)",
    "Kolkata",
    "Lucknow",
    "Ludhiana",
    "Mumbai",
    "Nagpur",
    "Patna",
    "Pune",
    "Raipur",
    "Srinagar",
    "Surat",
    "Thane",
    "Varanasi",
    "Visakhapatnam",
  ];

  return (
    <div className="w-1/2 mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">User Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name:</label>
              <Field
                type="text"
                name="name"
                className={`w-full px-3 py-2 border ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded focus:outline-none focus:border-blue-500`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email:</label>
              <Field
                type="email"
                name="email"
                className={`w-full px-3 py-2 border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded focus:outline-none focus:border-blue-500`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Password:</label>
              <Field
                type="password"
                name="password"
                className={`w-full px-3 py-2 border ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded focus:outline-none focus:border-blue-500`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Date of Birth:
              </label>
              <Field
                type="date"
                name="dob"
                className={`w-full px-3 py-2 border ${
                  errors.dob && touched.dob
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded focus:outline-none focus:border-blue-500`}
              />
              <ErrorMessage
                name="dob"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">City:</label>
              <Field
                as="select"
                name="city"
                className={`w-full px-3 py-2 border ${
                  errors.city && touched.city
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Pincode:</label>
              <Field
                type="number"
                name="pincode"
                className={`w-full px-3 py-2 border ${
                  errors.pincode && touched.pincode
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded focus:outline-none focus:border-blue-500`}
              />
              <ErrorMessage
                name="pincode"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
              {" "}
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserRegistration;
