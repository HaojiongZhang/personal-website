
export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';

export interface ChessPiece {
  type: PieceType;
  color: PieceColor;
}

export type BoardPosition = [number, number]; // [row, col] where [0,0] is top-left
export type ChessBoard = (ChessPiece | null)[][];

export function createInitialBoard(): ChessBoard {
  const board: ChessBoard = Array(8).fill(null).map(() => Array(8).fill(null));
  
  // Set up pawns
  for (let col = 0; col < 8; col++) {
    board[1][col] = { type: 'pawn', color: 'black' };
    board[6][col] = { type: 'pawn', color: 'white' };
  }
  
  // Set up other pieces
  const backRowOrder: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  
  for (let col = 0; col < 8; col++) {
    board[0][col] = { type: backRowOrder[col], color: 'black' };
    board[7][col] = { type: backRowOrder[col], color: 'white' };
  }
  
  return board;
}

export function isValidMove(
  board: ChessBoard, 
  from: BoardPosition, 
  to: BoardPosition, 
  currentPlayer: PieceColor,
  lastMove?: { from: BoardPosition; to: BoardPosition }
): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  
  // Check if the positions are valid
  if (
    fromRow < 0 || fromRow > 7 || fromCol < 0 || fromCol > 7 ||
    toRow < 0 || toRow > 7 || toCol < 0 || toCol > 7
  ) {
    return false;
  }
  
  // Check if there is a piece at the starting position
  const piece = board[fromRow][fromCol];
  if (!piece) {
    return false;
  }
  
  // Check if the piece belongs to the current player
  if (piece.color !== currentPlayer) {
    return false;
  }
  
  // Cannot capture own piece
  const targetPiece = board[toRow][toCol];
  if (targetPiece && targetPiece.color === piece.color) {
    return false;
  }
  
  // Different movement validation based on piece type
  switch (piece.type) {
    case 'pawn':
      return isValidPawnMove(board, from, to, piece.color, lastMove);
    case 'rook':
      return isValidRookMove(board, from, to);
    case 'knight':
      return isValidKnightMove(from, to);
    case 'bishop':
      return isValidBishopMove(board, from, to);
    case 'queen':
      return isValidQueenMove(board, from, to);
    case 'king':
      return isValidKingMove(board, from, to);
    default:
      return false;
  }
}

function isValidPawnMove(
  board: ChessBoard,
  from: BoardPosition,
  to: BoardPosition,
  color: PieceColor,
  lastMove?: { from: BoardPosition; to: BoardPosition }
): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  const direction = color === 'white' ? -1 : 1;
  
  // Regular move forward
  if (fromCol === toCol && board[toRow][toCol] === null) {
    // Single square move
    if (toRow === fromRow + direction) {
      return true;
    }
    
    // Double square move from starting position
    if ((color === 'white' && fromRow === 6 && toRow === 4) || 
        (color === 'black' && fromRow === 1 && toRow === 3)) {
      return board[fromRow + direction][fromCol] === null;
    }
  }
  
  // Capture move
  if (toRow === fromRow + direction && Math.abs(toCol - fromCol) === 1) {
    // Regular capture
    if (board[toRow][toCol] !== null && board[toRow][toCol]?.color !== color) {
      return true;
    }
    
    // En passant
    if (lastMove && board[toRow][toCol] === null) {
      const [lastFromRow, lastFromCol] = lastMove.from;
      const [lastToRow, lastToCol] = lastMove.to;
      
      const isPawnMovedTwoSquares = 
        Math.abs(lastToRow - lastFromRow) === 2 && 
        board[lastToRow][lastToCol]?.type === 'pawn';
      
      if (isPawnMovedTwoSquares && 
          lastToCol === toCol && 
          lastToRow === fromRow && 
          Math.abs(lastFromCol - fromCol) === 1) {
        return true;
      }
    }
  }
  
  return false;
}

function isValidRookMove(board: ChessBoard, from: BoardPosition, to: BoardPosition): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  
  // Rook can only move in straight lines
  if (fromRow !== toRow && fromCol !== toCol) {
    return false;
  }
  
  // Check for pieces in the path
  if (fromRow === toRow) {
    // Horizontal move
    const startCol = Math.min(fromCol, toCol);
    const endCol = Math.max(fromCol, toCol);
    
    for (let col = startCol + 1; col < endCol; col++) {
      if (board[fromRow][col] !== null) {
        return false;
      }
    }
  } else {
    // Vertical move
    const startRow = Math.min(fromRow, toRow);
    const endRow = Math.max(fromRow, toRow);
    
    for (let row = startRow + 1; row < endRow; row++) {
      if (board[row][fromCol] !== null) {
        return false;
      }
    }
  }
  
  return true;
}

function isValidKnightMove(from: BoardPosition, to: BoardPosition): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  
  const rowDiff = Math.abs(toRow - fromRow);
  const colDiff = Math.abs(toCol - fromCol);
  
  // Knight moves in an L-shape: 2 squares in one direction and 1 square perpendicular
  return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}

function isValidBishopMove(board: ChessBoard, from: BoardPosition, to: BoardPosition): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  
  const rowDiff = Math.abs(toRow - fromRow);
  const colDiff = Math.abs(toCol - fromCol);
  
  // Bishop can only move diagonally
  if (rowDiff !== colDiff) {
    return false;
  }
  
  // Check for pieces in the path
  const rowDirection = toRow > fromRow ? 1 : -1;
  const colDirection = toCol > fromCol ? 1 : -1;
  
  let row = fromRow + rowDirection;
  let col = fromCol + colDirection;
  
  while (row !== toRow && col !== toCol) {
    if (board[row][col] !== null) {
      return false;
    }
    row += rowDirection;
    col += colDirection;
  }
  
  return true;
}

function isValidQueenMove(board: ChessBoard, from: BoardPosition, to: BoardPosition): boolean {
  // Queen can move like a rook or a bishop
  return isValidRookMove(board, from, to) || isValidBishopMove(board, from, to);
}

function isValidKingMove(board: ChessBoard, from: BoardPosition, to: BoardPosition): boolean {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  
  const rowDiff = Math.abs(toRow - fromRow);
  const colDiff = Math.abs(toCol - fromCol);
  
  // King can move one square in any direction
  return rowDiff <= 1 && colDiff <= 1;
}

export function isCheck(board: ChessBoard, kingColor: PieceColor): boolean {
  // Find the king's position
  let kingPosition: BoardPosition | null = null;
  
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.type === 'king' && piece.color === kingColor) {
        kingPosition = [row, col];
        break;
      }
    }
    if (kingPosition) break;
  }
  
  if (!kingPosition) return false; // Should never happen in a valid game
  
  // Check if any opponent piece can capture the king
  const opponentColor = kingColor === 'white' ? 'black' : 'white';
  
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.color === opponentColor) {
        if (isValidMove(board, [row, col], kingPosition, opponentColor)) {
          return true;
        }
      }
    }
  }
  
  return false;
}

export function getPieceSymbol(piece: ChessPiece): string {
  const symbols: Record<PieceType, string> = {
    pawn: '♟',
    rook: '♜',
    knight: '♞',
    bishop: '♝',
    queen: '♛',
    king: '♚'
  };
  
  return symbols[piece.type];
}
