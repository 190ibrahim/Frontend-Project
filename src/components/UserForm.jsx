

import { useState } from "react"

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

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={user[label.toLowerCase()]} />
    </div>
  );

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