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

import { useTranslations } from "next-intl";

export default function StyledButton({ link = "" }) {
  const t = useTranslations("AboutCompany");
  const [hover, setHover] = useState(false);

  return (
    <Link href={link}>
      <Button
        className="bg-primary text-white rounded-full hover:bg-default px-5"
        endIcon={hover ? <ArrowForwardIcon /> : <ChevronRightIcon />}
        style={{ textTransform: "none", fontWeight: 600 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {t("learnMore")}
      </Button>
    </Link>
  );
}
