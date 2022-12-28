import {useState} from 'react';

import { FormControl , FormGroup , InputLabel ,Input, Typography,styled,Button} from '@mui/material';
import {addUser} from '../service/api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const defaultValue = {
    name:'',
    Roll:'',
    username:'',
    email:'',
    phone:''
}



const AddUser = () =>{

    const [user,setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})

    }

    const addUserDetails = async () =>{
      await  addUser(user);
      navigate('/all');
    }



    return (
       <Container>
        <Typography variant="h4">AddUser</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Roll</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name="Roll" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="secondary" onClick ={()=>addUserDetails()} >Add User</Button>
            </FormControl>
       </Container>
       
    )
}

export default AddUser;