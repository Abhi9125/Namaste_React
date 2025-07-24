import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// A validation schema for the form fields
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});

// A custom component for the input fields
const CustomInput = ({ field, form, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={field.name} className="text-gray-600 font-semibold">
        {props.label}
      </label>
      <input
        {...field}
        {...props}
        className="border border-gray-300 p-2 rounded mt-1"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

// A custom component for the textarea field
const CustomTextarea = ({ field, form, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={field.name} className="text-gray-600 font-semibold">
        {props.label}
      </label>
      <textarea
        {...field}
        {...props}
        className="border border-gray-300 p-2 rounded mt-1"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

// The main component for the contact us form
const ContactForm = () => {
  // A function to handle the form submission
  const handleSubmit = (values, actions) => {
    // Here you can send the form data to an API or a server
    // For this example, we just alert the values
    alert(JSON.stringify(values, null, 2));
    // Reset the form fields and the submit state
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="name"
              type="text"
              label="Name"
              component={CustomInput}
            />
            <Field
              name="email"
              type="email"
              label="Email"
              component={CustomInput}
            />
            <Field
              name="message"
              label="Message"
              component={CustomTextarea}
              rows="4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
