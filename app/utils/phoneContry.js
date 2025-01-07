import { countries } from "../utils/contries";

export function readNameCountry(id) {
  const country = countries.find((item) => item.idcountry == id);

  if (country) {
    return country.code;
  } else {
    return "Country not found";
  }
}
