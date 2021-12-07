import React from 'react';
import { Paper } from '@mui/material';

interface GameFieldProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function GameField(props: GameFieldProps) {
  const {
    value,
    onClick
  } = props;
  return (
    <Paper
      elevation={5}
      sx={{
        m: "1px",
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        alert(
          "Marking mines is not supported at the moment (just dont open the one with bombs)."
        );
      }}
    >
      {value}
    </Paper>
  );
}

export const GameFieldMemoized = React.memo(GameField);
