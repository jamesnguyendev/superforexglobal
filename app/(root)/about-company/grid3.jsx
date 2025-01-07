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

import StyledButton from "../../components/buttonCustomize";
import { useTranslations } from "next-intl";

export default function StyledGrid3({ name, img, link }) {
  const t = useTranslations("AboutCompany");
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Card
        className="text-center flex flex-col items-center p-4"
        style={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="rounded-full shadow-xl border flex items-center justify-center mb-4">
          <img src={img} width={96} height={96} alt={img} />
        </div>

        <CardContent>
          <Typography variant="h5" className="text-default">
            {name}
          </Typography>
        </CardContent>

        <Link href={link}>
          <StyledButton name={t("learnMore")} background={true} />
        </Link>
      </Card>
    </Grid>
  );
}
