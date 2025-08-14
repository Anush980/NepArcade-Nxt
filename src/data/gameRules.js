const games = [
    {
        id: "tic-tac-toe",
        title: "Tic Tac Toe",
        rules: [
            "The game is played on a 3x3 grid.",
            "Player X goes first, followed by Player O.",
            "Take turns marking empty squares.",
            "The first player to get 3 marks in a row wins.",
            "If all squares are filled without a winner, it's a draw."
        ]
    },
    {
        id: "chess",
        title: "Chess",
        rules: [
            "The game is played on an 8x8 board.",
            "White moves first, followed by Black.",
            "Players alternate turns, moving one piece per turn.",
            "The objective is to checkmate the opponent's king.",
            "A game can end in checkmate, stalemate, resignation, or draw."
        ]
    },
]

export default games;
