import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className="font-bold text-xl " variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce Website
        </Typography>

        <Link className="text-blue-950 text-2xl border-b-white	" to="/">Signup Her</Link>
        <Link className="text-blue-950 text-2xl border-b-white	" to="/about">e    Login Here</Link>
      </Toolbar>
    </AppBar>
    
  );
};