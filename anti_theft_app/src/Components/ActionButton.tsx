// FloatingActionButton.tsx
import React from "react";
import { Fab } from "@mui/material";
import { styled } from "@mui/system";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

interface ActionButtonProps {
  onClick: () => void; // Define the type for the onClick handler
}

const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  opacity: 0.5;
  padding: 4px;
  background-color: black;
  color: white;
  &:hover {
    opacity: 1;
    background-color: black;
  }
`;

const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <StyledFab color="primary" aria-label="add" onClick={onClick}>
      <PriorityHighIcon />
    </StyledFab>
  );
};

export default ActionButton;
