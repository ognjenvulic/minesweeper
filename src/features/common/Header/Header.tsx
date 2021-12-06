import { AppBar, Link, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" component="div">
          Minesweeper
        </Typography>
        <Typography variant="h6" color="inherit" component="div">
          <Link
            sx={{ flexGrow: 1 }}
            href="https://github.com/ognjenvulic/minesweeper"
            color="white"
            underline="hover"
          >
            GitHub
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
