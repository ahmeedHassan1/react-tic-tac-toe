export default function GameBoard({onSelectSquare, board}) {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex + 1}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex + 1}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={playerSymbol !== null}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
