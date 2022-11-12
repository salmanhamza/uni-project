import { Stack } from "@mui/material";
import React from "react";
import Layout from "../layout/Layout";
import Hero from "./hero/Hero";

import Sidebar from "./Sidebar";

const AdminPanel = () => {
  return (
    <Layout>
      <Stack direction="row">
        <Sidebar />
        <Hero />
      </Stack>
    </Layout>
  );
};

export default AdminPanel;
