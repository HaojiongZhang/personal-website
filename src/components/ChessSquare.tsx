
import React from 'react';
import ChessPiece from './ChessPiece';
import { ChessPiece as ChessPieceType, BoardPosition } from '@/lib/chessUtils';

interface ChessSquareProps {
  position: BoardPosition;
  piece: ChessPieceType | null;
  isBlack: boolean;
  isSelected: boolean;
  isValidMove: boolean;
  onClick: (position: BoardPosition) => void;
}

const ChessSquare: React.FC<ChessSquareProps> = ({
  position,
  piece,
  isBlack,
  isSelected,
  isValidMove,
  onClick,
}) => {
  const getBackgroundColor = () => {
    if (isSelected) return 'bg-blue-400';
    if (isValidMove) return 'bg-green-300';
    return isBlack ? 'bg-gray-600' : 'bg-gray-200';
  };

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center ${getBackgroundColor()} hover:opacity-80 cursor-pointer`}
      onClick={() => onClick(position)}
    >
      {piece && <ChessPiece piece={piece} />}
      {isValidMove && !piece && (
        <div className="w-4 h-4 rounded-full bg-green-500 opacity-60"></div>
      )}
    </div>
  );
};

export default ChessSquare;
