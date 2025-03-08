
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChessSquare from '../components/ChessSquare';
import { Button } from '@/components/ui/button';
import { 
  ChessBoard,
  BoardPosition,
  PieceColor,
  createInitialBoard,
  isValidMove,
  isCheck
} from '@/lib/chessUtils';
import { RotateCcw } from 'lucide-react';

const ChessBot = () => {
  const [board, setBoard] = useState<ChessBoard>(createInitialBoard());
  const [selectedPosition, setSelectedPosition] = useState<BoardPosition | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<PieceColor>('white');
  const [validMoves, setValidMoves] = useState<BoardPosition[]>([]);
  const [lastMove, setLastMove] = useState<{ from: BoardPosition; to: BoardPosition } | undefined>(undefined);
  const [isCheckState, setIsCheckState] = useState<boolean>(false);

  // Reset the board
  const resetBoard = () => {
    setBoard(createInitialBoard());
    setSelectedPosition(null);
    setCurrentPlayer('white');
    setValidMoves([]);
    setLastMove(undefined);
    setIsCheckState(false);
  };

  // Calculate valid moves for the selected piece
  useEffect(() => {
    if (selectedPosition) {
      const [row, col] = selectedPosition;
      const piece = board[row][col];
      
      if (piece && piece.color === currentPlayer) {
        const moves: BoardPosition[] = [];
        
        // Check all possible destinations
        for (let r = 0; r < 8; r++) {
          for (let c = 0; c < 8; c++) {
            if (isValidMove(board, selectedPosition, [r, c], currentPlayer, lastMove)) {
              // Simulate the move to check if it would result in check
              const newBoard = board.map(row => [...row]);
              newBoard[r][c] = newBoard[row][col];
              newBoard[row][col] = null;
              
              if (!isCheck(newBoard, currentPlayer)) {
                moves.push([r, c]);
              }
            }
          }
        }
        
        setValidMoves(moves);
      } else {
        setValidMoves([]);
      }
    } else {
      setValidMoves([]);
    }
  }, [selectedPosition, board, currentPlayer, lastMove]);

  // Check for check status
  useEffect(() => {
    setIsCheckState(isCheck(board, currentPlayer));
  }, [board, currentPlayer]);

  const handleSquareClick = (position: BoardPosition) => {
    const [row, col] = position;
    const piece = board[row][col];
    
    // If no piece is selected and the clicked square has a piece of the current player
    if (!selectedPosition && piece && piece.color === currentPlayer) {
      setSelectedPosition(position);
      return;
    }
    
    // If a piece is already selected
    if (selectedPosition) {
      // Clicking on the same square deselects it
      if (selectedPosition[0] === row && selectedPosition[1] === col) {
        setSelectedPosition(null);
        return;
      }
      
      // Check if the move is valid
      const isValid = validMoves.some(([r, c]) => r === row && c === col);
      
      if (isValid) {
        // Make the move
        const newBoard = board.map(row => [...row]);
        const [fromRow, fromCol] = selectedPosition;
        
        // Handle pawn promotion (to queen for simplicity)
        if (newBoard[fromRow][fromCol]?.type === 'pawn' && (row === 0 || row === 7)) {
          newBoard[row][col] = { type: 'queen', color: currentPlayer };
        } else {
          newBoard[row][col] = newBoard[fromRow][fromCol];
        }
        
        // Handle en passant capture
        if (
          newBoard[fromRow][fromCol]?.type === 'pawn' &&
          fromCol !== col && 
          newBoard[row][col] === null
        ) {
          newBoard[fromRow][col] = null; // Capture the pawn that moved to the side
        }
        
        newBoard[fromRow][fromCol] = null;
        
        setBoard(newBoard);
        setLastMove({ from: selectedPosition, to: position });
        setSelectedPosition(null);
        setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
      } else {
        // If clicking on another piece of the same color, select that piece instead
        if (piece && piece.color === currentPlayer) {
          setSelectedPosition(position);
        } else {
          // Invalid move, deselect
          setSelectedPosition(null);
        }
      }
    }
  };

  const renderBoard = () => {
    const rows = [];
    
    for (let row = 0; row < 8; row++) {
      const columns = [];
      
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        const isSelected = selectedPosition 
          ? selectedPosition[0] === row && selectedPosition[1] === col 
          : false;
        const isValidMovePosition = validMoves.some(([r, c]) => r === row && c === col);
        
        columns.push(
          <ChessSquare
            key={`${row}-${col}`}
            position={[row, col]}
            piece={board[row][col]}
            isBlack={isBlack}
            isSelected={isSelected}
            isValidMove={isValidMovePosition}
            onClick={handleSquareClick}
          />
        );
      }
      
      rows.push(
        <div key={row} className="flex">
          {columns}
        </div>
      );
    }
    
    return rows;
  };

  const getFileLabel = (col: number): string => {
    return String.fromCharCode(97 + col); // 'a' through 'h'
  };

  const getRankLabel = (row: number): string => {
    return String(8 - row); // '8' through '1'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-24 md:py-32">
        <section id="chessbot" className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Interactive Chess Board</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Play chess against a friend or practice your moves. The board follows standard chess rules.
            </p>
          </div>
          
          <div className="mx-auto max-w-fit">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-medium">
                Current Player: 
                <span className={currentPlayer === 'white' ? 'text-blue-600 ml-2' : 'text-red-600 ml-2'}>
                  {currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}
                </span>
                {isCheckState && <span className="text-red-500 ml-2">CHECK!</span>}
              </div>
              <Button variant="outline" onClick={resetBoard}>
                <RotateCcw className="mr-2" size={16} />
                Reset Board
              </Button>
            </div>
            
            <div className="relative bg-white border-2 border-gray-300 shadow-lg">
              {/* File labels (a-h) at the top */}
              <div className="flex">
                <div className="w-8"></div> {/* Empty corner */}
                {[...Array(8)].map((_, col) => (
                  <div key={`top-${col}`} className="w-16 text-center">
                    {getFileLabel(col)}
                  </div>
                ))}
              </div>
              
              <div className="flex">
                {/* Rank labels (8-1) on the left */}
                <div className="flex flex-col justify-around">
                  {[...Array(8)].map((_, row) => (
                    <div key={`left-${row}`} className="h-16 w-8 flex items-center justify-center">
                      {getRankLabel(row)}
                    </div>
                  ))}
                </div>
                
                {/* Chess board */}
                <div>{renderBoard()}</div>
                
                {/* Rank labels (8-1) on the right */}
                <div className="flex flex-col justify-around">
                  {[...Array(8)].map((_, row) => (
                    <div key={`right-${row}`} className="h-16 w-8 flex items-center justify-center">
                      {getRankLabel(row)}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* File labels (a-h) at the bottom */}
              <div className="flex">
                <div className="w-8"></div> {/* Empty corner */}
                {[...Array(8)].map((_, col) => (
                  <div key={`bottom-${col}`} className="w-16 text-center">
                    {getFileLabel(col)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChessBot;
