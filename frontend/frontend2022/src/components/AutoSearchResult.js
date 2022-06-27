import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Search } from "@mui/icons-material";

const AutoSearchResult = ({ results, onSearchSelect }) => {
  let renderResult = [];
  if (results) {
    renderResult = results.map((result, index) => {
      return (
        <ListItem key={index} onClick={() => onSearchSelect(result[0])} button>
          <ListItemIcon style={{ paddingLeft: "16px" }}>
            <Search />
          </ListItemIcon>
          <ListItemText primary={result[0]} />
        </ListItem>
      );
    });
  }
  return <List>{renderResult}</List>;
};

export default AutoSearchResult;
