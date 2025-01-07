"use client";
import React, { useState } from "react";
import {
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Global from "../../../public/global.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function StyledGrid4({ number, text }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card className="text-center">
        <CardContent>
          <Typography variant="h3" sx={{ color: "#00afb2" }}>
            {number}
          </Typography>
          <Typography className="text-default pt-2">{text}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
