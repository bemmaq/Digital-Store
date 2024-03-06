import React from "react"; 
import { Button, Form, Input, InputNumber } from "antd"; 
import { useDispatch } from "react-redux"; 
import { postUser } from "../../../store/slices/authSlice";
import './singUp.scss'
 
const SignUp = () => { 
  const dispatch = useDispatch(); 
  const onFinish = (values) => { 
    console.log(values); 
    dispatch(postUser(values)); 
  }; 
 
  return ( 
   <div>
     <div className="overlay"> 
    <div className="auth">
    <Form 
        name="auth" 
        onFinish={onFinish} 
        style={{ 
          maxWidth: 600, 
        }} 
      > 
        <Form.Item 
          name="name" 
          label="UserName" 
          rules={[ 
            { 
              required: true, 
            }, 
          ]} 
        > 
          <Input /> 
        </Form.Item> 
        <Form.Item 
          name="email" 
          label="Email" 
          rules={[ 
            { 
              type: "email", 
            }, 
          ]} 
        > 
          <Input /> 
        </Form.Item> 
        <Form.Item 
          name="password" 
          label="Password" 
          rules={[ 
            { 
              type: "password", 
            }, 
          ]} 
        > 
          <Input.Password /> 
        </Form.Item> 
        <Form.Item name="avatar" label="Img url"> 
          <Input /> 
        </Form.Item> 
 
        <Form.Item 
          wrapperCol={{ 
            offset: 8, 
          }} 
        > 
          <Button type="primary" htmlType="submit"> 
            Submit 
          </Button> 
        </Form.Item> 
      </Form> 
      </div>
    </div> 
   </div>
  ); 
}; 
 
export default SignUp;