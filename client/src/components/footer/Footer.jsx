import { Box, styled, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";
import logo from "../../assets/Logo.png";

const Text = styled(Typography)({
  color: "#fff",
  fontSize: "10px",
});

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#212121" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItem: "center",
        }}
      >
        <Box sx={{ width: "250px" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <CopyrightIcon fontSize="small" sx={{ color: "#fff" }} />
            <Text>2022 e-learning. All rights reserved.</Text>
          </Box>
          <Box sx={{ marginTop: "7px" }}>
            <Text variant="p">
              Université Constantine 2 Abdelhamid Mehri Nouvelle ville Ali
              Mendjeli BP : 67A, Constantine Algérie La Nouvelle Ville Ali
              Mendjeli, 25016
            </Text>
          </Box>
        </Box>
        <Box>
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Text>Phone :031 77 50 27</Text>
          <Text variant="p">Contact webmaster@univ-constantine2</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
