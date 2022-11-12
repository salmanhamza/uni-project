import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <AppBar sx={{ position: "sticky", backgroundColor: "#212121" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            marginLeft: "4%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "50px" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "600", cursor: "pointer" }}>
                Log Out
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginLeft: "30px", width: "50%" }}>
              <PersonIcon />
              <Typography sx={{ marginLeft: "5px", fontWeight: "600" }}>
                John Doe
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
