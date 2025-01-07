import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export function StyledStack({ img, name, text }) {
  return (
    <Stack className="text-default mt-5 mb-10">
      <Typography variant="h5">{name}</Typography>
      <Stack
        className="p-3 justify-between max-sm:justify-center flex flex-row max-sm:flex-col"
        alignItems="center"
      >
        <Image src={img} width={140} height={140} alt={img} />
        <Typography className="p-3">{text}</Typography>
      </Stack>
    </Stack>
  );
}
