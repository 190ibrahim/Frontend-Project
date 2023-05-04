import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    birthdate:"",
    account:"",
    companyname:"",
    creditcardnum:""
  });

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
 <div className="d-flex justify-content-center">
  <Card className="mx-auto" style={{ width: '500px', margin: 'auto' }} > 
      <Card.Header>Add User</Card.Header>
      <Card.Body>
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={handleChangeInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChangeInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBirthdate">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="text" placeholder="Enter birthdate" name="birthdate" value={user.birthdate} onChange={handleChangeInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAccount">
        <Form.Label>Account</Form.Label>
        <Form.Control type="text" placeholder="Enter account" name="account" value={user.account} onChange={handleChangeInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCompanyname">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter company name" name="companyname" value={user.companyname} onChange={handleChangeInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCreditcardnum">
        <Form.Label>Credit Card Number</Form.Label>
        <Form.Control type="text" placeholder="Enter credit card number" name="creditcardnum" value={user.creditcardnum} onChange={handleChangeInput} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    </div>
  )
}

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