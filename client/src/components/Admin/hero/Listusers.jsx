import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../../services/api";

const StyledTable = styled(Table)({
  width: "90%",
  margin: "50px auto 0 auto",
});

const Thead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const Listusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Box>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Position</TableCell>

            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Tbody key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.position}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserDetails(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </Tbody>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default Listusers;
