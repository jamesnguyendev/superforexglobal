"use client";
import React from "react";
import { Container, Stack, Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function StyledGrid4({ img, name, text }) {
  return (
    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
      <Card className="text-default" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <img src={img} alt="img" />
        <p className="m-5 text-3xl">
          {name}
        </p>
        <p className="m-5">{text}</p>
      </Card>
    </Grid>
  );
}