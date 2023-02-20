import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getUser, editUser } from "../../../services/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const intialValue = {
  name: "",
  username: "",
  email: "",
  Position: "",
};

const Edituser = () => {
  const [user, setUser] = useState(intialValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    console.log(response.data);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="position"
          value={user.position}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default Edituser;
