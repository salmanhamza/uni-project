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
import React, { useState } from "react";

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
  return (
    <Box>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Type</TableCell>

            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Tbody key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.type}</TableCell>
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
                  // onClick={() => deleteUserDetails(user._id)}
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
