
import React from 'react';
import { ChessPiece as ChessPieceType } from '@/lib/chessUtils';

interface ChessPieceProps {
  piece: ChessPieceType;
}

const ChessPiece: React.FC<ChessPieceProps> = ({ piece }) => {
  const { type, color } = piece;
  
  // Unicode chess pieces
  const pieceSymbols: Record<string, string> = {
    'white-king': '♔',
    'white-queen': '♕',
    'white-rook': '♖',
    'white-bishop': '♗',
    'white-knight': '♘',
    'white-pawn': '♙',
    'black-king': '♚',
    'black-queen': '♛',
    'black-rook': '♜',
    'black-bishop': '♝',
    'black-knight': '♞',
    'black-pawn': '♟',
  };
  
  const pieceKey = `${color}-${type}`;
  const symbol = pieceSymbols[pieceKey];
  
  return (
    <div className={`text-4xl select-none ${color === 'white' ? 'text-white' : 'text-black'}`}>
      {symbol}
    </div>
  );
};

export default ChessPiece;
