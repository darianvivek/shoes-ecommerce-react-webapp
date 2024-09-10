import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import {Button,Form,Col,Row, Card,Image} from 'react-bootstrap'
import axios from 'axios';
import signupimg from './images/signup.svg';
import {useNavigate} from 'react-router-dom';
function Signupp() {
  const{
      register,
      handleSubmit,
      formState: {errors},
  }
    =useForm();
  const navigate=useNavigate();
  const onSubmit=(data)=>
  {
    console.log(data);
    axios.post('http://localhost:4000/user/createuser',data)
    .then(response=>{
      alert(response.data.message)
      if(response.data.message=="new user created")
      {
        navigate('/login')
      }
    }
    )
    .catch(error=>alert("SOMETHING WENT WRONG"))
  }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-end align-items-start">
      <Col md={5} className="text-center">
        <Image src={signupimg} alt="Register Image" fluid className="h-100" style={{ objectFit: 'cover', borderRadius: '10px', height: '50vh' }} />
      </Col>
        <Col md={7}>
      <Card style={{width:'30rem',backgroundColor:"lightgray",boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '20px'}}>
        <Card.Body>
          <h2 style={{textDecoration:"underline"}}>REGISTER</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridusername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" {...register("username",{required:true})}/>
        {errors.username&&<p>*Username is required</p>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridpassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register("password",{required:true})}/>
          {errors.password&&<p>*Password is required</p>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" {...register("Address")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor"/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control {...register("City")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAGE">
          <Form.Label>AGE</Form.Label>
          <Form.Control {...register("AGE")}/>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
  )
}

export default Signupp