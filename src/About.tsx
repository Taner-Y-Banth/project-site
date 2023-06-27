import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <svg width="100%" height="50vh">
        <image
          href={process.env.PUBLIC_URL + "/me.jpg"}
          height="50vh"
        />
      </svg>
    </div>
  );
}
