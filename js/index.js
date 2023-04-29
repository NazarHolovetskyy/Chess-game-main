let selectedPiece = null;
        const pieces = {
            'R': '&#9814;',
            'N': '&#9816;',
            'B': '&#9815;',
            'Q': '&#9813;',
            'K': '&#9812;',
            'P': '&#9817;'
    };
    const board = document.getElementById("board");
    board.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "TD") {
            if (selectedPiece) {
                target.innerHTML = selectedPiece;
                selectedPiece = null;
            } else {
                selectedPiece = target.innerHTML;
                target.innerHTML = "";
            }
        }
    });
    