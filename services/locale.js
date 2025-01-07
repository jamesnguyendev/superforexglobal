"use server";

import { cookies } from "next/headers";
import { defaultLocale, locales } from "../i18n/config";

const COOKIE_NAME = "NEXT_LOCALE_SUPERFOREX";

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale) {
  cookies().set(COOKIE_NAME, locale);
}
