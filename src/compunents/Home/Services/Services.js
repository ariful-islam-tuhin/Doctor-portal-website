import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SingleService from "../SingleService/SingleService";
import fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "The name of my country is Bangladesh, Banghladesh is a small county dhaka is the capital of  Bangladesh, I has a large population",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "The name of my country is Bangladesh, Banghladesh is a small county dhaka is the capital of  Bangladesh, I has a large population",
    img: Cavity,
  },
  {
    name: "Teeth whitening",
    description:
      "The name of my country is Bangladesh, Banghladesh is a small county dhaka is the capital of  Bangladesh, I has a large population",
    img: whitening,
  },
];

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            sx={{ fontWeight: 500, m: 2, color: "success.main" }}
            variant="h4"
            component="div"
          >
            Services we provide
          </Typography>
          <Typography
            sx={{ fontWeight: 500, m: 2, color: "primary.main" }}
            variant="h6"
            component="div"
          >
            Our Services
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <SingleService
                key={service.name}
                service={service}
              >

              </SingleService>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;
