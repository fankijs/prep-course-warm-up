export {};

function onlyTheAces(cards:string[]): string[] {
return cards.filter(card => card === 'Ace');

}
function different(cards:string[]): string[] {
return cards.filter(card => card.length === 3);

}


console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
console.log(different(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']