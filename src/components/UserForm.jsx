import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const UserForm = ({ onSubmit, initialValue }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    birthdate: Yup.date().required('Birthdate is required'),
    account: Yup.string().required('Account is required'),
    companyname: Yup.string().required('Company name is required'),
    creditcardnum: Yup.string()
      .required('Credit card number is required'),
  });

  return (
    <div className="d-flex justify-content-center">
      <Card className="mx-auto" style={{ width: '500px', margin: 'auto' }}>
        <Card.Header>Add User</Card.Header>
        <Card.Body>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <Field type="text" name="name" placeholder="John Doe" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} />
                  <ErrorMessage name="name" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Field type="email" name="email" placeholder="john.doe@example.com" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                  <ErrorMessage name="email" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="birthdate" className="form-label">Birthdate</label>
                  <Field type="date" name="birthdate" placeholder="YYYY-MM-DD" className={`form-control ${errors.birthdate && touched.birthdate ? 'is-invalid' : ''}`} />
                  <ErrorMessage name="birthdate" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="account" className="form-label">Account</label>
                  <Field type="text" name="account" placeholder="LT12 3456 7890 1234 5678" className={`form-control ${errors.account && touched.account ? 'is-invalid' : ''}`} />
                  <ErrorMessage name="account" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyname" className="form-label">Company Name</label>
                  <Field type="text" name="companyname" placeholder="Acme Corporation" className={`form-control ${errors.companyname && touched.companyname ? 'is-invalid': ''}`} /> 
                  <ErrorMessage name="companyname" className="invalid-feedback" />
                </div> 
                <div className="mb-3"> 
                  <label htmlFor="creditcardnum" className="form-label">Credit Card Number</label> 
                  <Field type="text" name="creditcardnum" placeholder="XXXX XXXX XXXX XXXX" className={`form-control ${errors.creditcardnum && touched.creditcardnum ? 'is-invalid' : ''}`}/>
                  <ErrorMessage name="creditcardnum" className="invalid-feedback" />
                </div>
                <div className="mt-3">
                <Button type="submit" variant="primary" className="me-3">
                  Submit
                </Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};
export default UserForm;


/*
import { useState } from "react"

const UserForm = ({ onSubmit, initialValue }) => {
  const [user, setUser] = useState({
    name: initialValue.name || "",
    email: initialValue.email || "",
    birthdate: initialValue.birthdate || "",
    account: initialValue.account || "",
    companyname: initialValue.companyname || "",
    creditcardnum: initialValue.creditcardnum || ""
  });

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={user[label.toLowerCase()]} />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({
      name: "",
      email: "",
      birthdate: "",
      account: "",
      companyname: "",
      creditcardnum: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Name')}
      {renderField('Email')}
      {renderField('Birthdate')}
      {renderField('Account')}
      {renderField('Companyname')}
      {renderField('Creditcardnum')}
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm

*/