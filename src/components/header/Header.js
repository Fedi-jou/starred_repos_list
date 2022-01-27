import Typography from "@mui/material/Typography";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Typography
        className="header_pos"
        variant="h3"
        sx={{
          fontFamily: "Libre Baskerville",
          fontWeight: "700",
          textAlign: "center",
          fontSize: {
            md: 50,
            sm: 35,
            xs: 20,
          },
        }}
        mb={8}
        mt={0}
      >
        The most starred Github repos
      </Typography>
    </>
  );
}
