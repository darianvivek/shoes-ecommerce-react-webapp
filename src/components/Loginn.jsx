import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import {Button,Form,Col,Row, Card,Image} from 'react-bootstrap'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import loginimg from './images/login.svg'
import { use } from '../API/userapi';
import {userlogin} from '../slices/userslice'
function Loginn() {
  const{
      register,
      handleSubmit,
      formState: {errors},
  }
    =useForm();
    let dispatch=useDispatch();
    let {userobj,iserror,isloading,issuccess,errmsg}=useSelector(state=>state.user)
  const onSubmit=(cred)=>
  {
    dispatch(userlogin(cred))
  }; 
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row>
            <Col md={4}>
              <Image src={loginimg} alt="Login Image" fluid className="h-100" style={{ objectFit: 'cover', borderRadius: '10px', height: '50vh' }}/>
            </Col>
      <Col md={6}>
      <Card style={{width:'30rem',backgroundColor:"lightgray",float:'right',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '20px'}}>
        <Card.Body>
          <h2 style={{textDecoration:"underline"}}>LOGIN</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group  controlId="formGridusername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" {...register("username",{required:true})}/>
        {errors.username&&<p>*Username is required</p>}
        </Form.Group>

        <Form.Group controlId="formGridpassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register("password",{required:true})}/>
          {errors.password&&<p>*Password is required</p>}
        </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
  )
}

export default Loginn