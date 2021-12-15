import React from 'react';
import { Paper } from '@mui/material';

interface GameFieldProps {
  value: string;
  marked: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  onRightClick: React.MouseEventHandler<HTMLDivElement>;
}

const classes = {
  paper: {
    m: "1px",
    width: 25,
    height: 25,
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "white"
  },
  marked: {
    backgroundColor: "orangered"
  },
  oppened: {
    backgroundColor: "aquamarine"
  }
}

export default function GameField(props: GameFieldProps) {
  const {
    value,
    marked,
    onClick,
    onRightClick
  } = props;
  return (
    <Paper
      elevation={5}
      sx={{
        ...classes.paper,
        ...(isNaN(Number(value)) ? {} : classes.oppened),
        ...(marked ? classes.marked : {}),
      }}
      onClick={(e: any) => {
        !marked && onClick(e);
      }}
      onContextMenu={onRightClick}
    >
      {marked ? "B" : value}
    </Paper>
  );
}

export const GameFieldMemoized = React.memo(GameField);
