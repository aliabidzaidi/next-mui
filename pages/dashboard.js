import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./components/Chart";
import Deposits from "./components/Deposits";
import Orders from "./components/Orders";
import Typography from "@mui/material/Typography";

const dashboard = () => {
  return (
    <div>
      <Typography variant="h3" component="h3">
        Dashboard
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper>
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default dashboard;
