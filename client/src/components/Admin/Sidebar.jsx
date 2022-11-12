import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import React from "react";

const Text = styled(ListItemText)({
  color: "#fff",
  fontSize: "20px",
  fontWeight: "500",
});
const Icon = styled(ListItemIcon)({
  color: "#fff",
});

const Sidebar = () => {
  return (
    <Box flex={1} sx={{ height: "100vh", backgroundColor: "#42a5f5" }}>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "700",
            backgroundColor: "#1976d2",
            color: "#fff",
          }}
          pt={0}
        >
          Menu
        </Typography>
      </Box>
      <List>
        <a href="/" style={{ textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <Icon>
                <FormatListBulletedIcon fontSize="large" />
              </Icon>
              <Text primary="User List" disableTypography />
            </ListItemButton>
          </ListItem>
        </a>

        <a href="/add" style={{ textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <Icon>
                <PersonAddAlt1Icon fontSize="large" />
              </Icon>
              <Text primary="Add User" disableTypography />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
    </Box>
  );
};

export default Sidebar;
