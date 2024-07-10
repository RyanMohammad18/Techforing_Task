import React from "react";
import Button from "@mui/material/Button";

const CommonButtons = () => {
  return (
    <div>
      <Button
        sx={{
          backgroundColor: 'white',
          border: 'none',
          borderRadius:'8px',
          color: 'black',
          padding: '9px 59px',
          fontSize: '14px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#E4202C',
            color:"white"
          }
        }}
      >
        Risk Assessment
      </Button>
    </div>
  );
};

export default CommonButtons;
