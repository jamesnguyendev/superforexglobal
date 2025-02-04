"use client";
import React from "react";
import {
  Container,
  Stack,
  Typography,
  Card,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "styled-components";

import MailIcon from "../../../public/svg-contacts/mail.svg";
import PhoneIcon from "../../../public/svg-contacts/phone.svg";
import IconText from "./iconText";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735633964340");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -200px;
    height: 320px;
    background: white;
    transform: skewY(-6deg);
    z-index: 1;
  }
`;

export default function Contacts() {
  const t = useTranslations("Contacts");
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setStatus(true);
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const { email, name, subject, message } = data; // Destructuring

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, subject, message }),
      });

      const result = await response.json();
      setStatus(true);
      if (response.ok) {
        setOpen(true);
        e.target.reset();
      } else {
        alert(`${t("failedToSendMessage")} ${result.message}`);
      }
    } catch (error) {
      alert(t("errorOccurred"));
    } finally {
      setStatus(false);
    }
  };

  return (
    <>
      <Stack
        className="relative py-12"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/3idyffxxb/New%20Folder/default.svg?updatedAt=1735634159546')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" color="white" className="px-2">
            {t("contactInfo")}
          </Typography>
        </Container>
      </Stack>
      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <Typography variant="h4">{t("hotline")}</Typography>
        <IconText icon={PhoneIcon} text={"+84 2888896968"} />
        <Grid container spacing={5}>
          <Grid item size={{ sm: 12, md: 7 }}>
            <Typography variant="h4">
              {t("customerSupportDepartment")}
            </Typography>
            <IconText icon={MailIcon} text={"support@superforex.global"} />
          </Grid>
          <Grid item size={{ sm: 12, md: 5 }}>
            <Typography variant="h4">{t("partnershipDepartment")}</Typography>
            <IconText icon={MailIcon} text={"info@superforex.global"} />
          </Grid>
        </Grid>
        <div className="flex flex-col items-center justify-center">
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {t("messageSentSuccessfully")}
            </Alert>
          </Snackbar>
          <form
            className="flex flex-col gap-4 bg-white shadow-2xl rounded-lg p-16 font-bold mt-10"
            onSubmit={handleForm}
          >
            <h1 className="md:text-5xl text-3xl text-center mb-4">
              {t("sendUsAMessage")}
            </h1>
            <div className="md:flex gap-3">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="name" className="text-xl">
                  {t("name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="bg-slate-200 outline-none focus:ring-2 ring-primary font-normal py-2 ps-3 w-full rounded-md focus:bg-white focus:duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t("name")}
                  required
                  disabled={status}
                />
              </div>
              <div className="flex flex-col flex-1 gap-1 max-sm:mt-4">
                <label htmlFor="name" className="text-xl">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="bg-slate-200 outline-none focus:ring-2 ring-primary font-normal py-2 ps-3 w-full rounded-md focus:bg-white focus:duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Email"
                  required
                  disabled={status}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <label htmlFor="Subject" className="text-xl pb-1">
                  {t("subject")}
                </label>
                <input
                  id="Subject"
                  type="text"
                  name="subject"
                  className="bg-slate-200 outline-none  focus:ring-2 ring-primary font-normal py-2 ps-3 w-full rounded-md focus:bg-white focus:duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t("subject")}
                  required
                  disabled={status}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <label htmlFor="Message" className="text-xl pb-1">
                  {t("message")}
                </label>
                <textarea
                  id="Message"
                  type="text"
                  name="message"
                  className="bg-slate-200 outline-none  focus:ring-2 ring-primary font-normal py-2 ps-3 w-full rounded-md focus:bg-white focus:duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={t("message")}
                  required
                  disabled={status}
                />
              </div>
            </div>
            <div className="flex flex-col uppercase  mb-5">
              <button
                className="bg-primary rounded-md p-3 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={status}
              >
                {status ? (
                  <div className="flex justify-center items-center gap-2">
                    <svg
                      className="w-4 h-4 stroke-white animate-spin "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_9023_61563_1)">
                        <path
                          d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                          stroke="stroke-current"
                          stroke-width="1.4"
                          stroke-linecap="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_9023_61563_1">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>{t("loading")}</span>
                  </div>
                ) : (
                  t("sendMessage")
                )}
              </button>
            </div>
          </form>
        </div>
      </Container>
      <StyledStack>
        <Container style={{ zIndex: 2 }}></Container>
      </StyledStack>
    </>
  );
}
