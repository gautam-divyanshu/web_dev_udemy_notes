import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Height, Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper component="form" sx={{borderRadius:20,p:"0px 10px 0px 10px"}}>
      <input className="search-bar" placeholder="Search..." />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
