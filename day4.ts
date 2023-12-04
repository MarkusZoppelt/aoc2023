export function day4(lines: string[]): void {
    let sum: number = 0;
    let cards: number = 0;
    const counts: { [key: number]: number } = {};

    for (const line of lines) {
        if (line.length == 0) {
            continue;
        }

        let cardNum: number = parseInt(line.split(':')[0].split(/[ ]+/)[1]);

        let winningNumsStr: string = line.split(':')[1].split('|')[0].trim();
        let myNumsStr: string = line.split(':')[1].split('|')[1].trim();

        let neededNums: number[] = winningNumsStr.split(/[ ]+/).map(p => parseInt(p));
        let myNums: number[] = myNumsStr.split(/[ ]+/).map(p => parseInt(p));

        let matches: number = 0;
        let score: number = 0;
        for (const m of myNums) {
            if (neededNums.includes(m)) {
                matches++;
                score = score === 0 ? 1 : score * 2;
            }
        }
        sum += score;

        for (let i = cardNum + 1; i <= cardNum + matches; i++) {
            counts[i] = (counts[i] || 0) + (counts[cardNum] || 1);
        }
    }

    cards = 1;
    for (const v of Object.values(counts)) {
        cards += v;
    }


    console.log("Part 1: " + sum);
    console.log("Part 2: " + cards);
}
