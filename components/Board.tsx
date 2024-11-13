import { useState } from "react";

const getInitialCards = () => {
    const cards = [
        "🍰",
        "🍪",
        "🍮",
        "🍫",
        "🍦",
        "🍩",
        "🍬",
        "🍭",
    ];
    return cards.concat(cards).sort(() => Math.random()  - 0.5);
}

export function Board() {
    const [board, setBoard] = useState(getInitialCards());

    // implementar a visualização dos cards
    // implementar a função de clique no card para atualizar o board

    // handleClick
    /*
    1 verificar se a carta não está virada
    2 verificar se a carta já está pareada
    3 verificar se a primeira carta aberta ou não 
    - incrementar a quantidade de turnos

    // efeito
    1 toda vez que um par for encontrado, verificar se o jogo acabou
    */
    return ();
}