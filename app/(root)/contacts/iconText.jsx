"use client";
import React from "react";
import { Container, Stack, Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import styled from "styled-components";

import MailIcon from "../../../public/svg-contacts/mail.svg";
import PhoneIcon from "../../../public/svg-contacts/phone.svg";

export default function IconText({ icon, text }) {
  return (
    <Stack direction="row" className="my-5">
      <Image src={icon} alt="img" />
      <Typography variant="h6" className="ml-3">
        {text}
      </Typography>
    </Stack>
  );
}