export function day1(lines: string[]): void {
    lines = lines.map(sanitize);

    let total: number = 0;
    for (let line of lines) {
        let first: number = 0;
        for (let i = 0; i < line.length; i++) {
            if (line[i] >= '0' && line[i] <= '9') {
                first = parseInt(line[i]) * 10;
                break;
            }
        }

        let last: number = 0;
        for (let i = line.length - 1; i >= 0; i--) {
            if (line[i] >= '0' && line[i] <= '9') {
                last = parseInt(line[i]);
                total += first + last;
                break;
            }
        }
    }
    console.log(total);
}

function sanitize(str: string): string {
    return str
        .replace(/one/g, "o1e")
        .replace(/two/g, "t2o")
        .replace(/three/g, "th3ee")
        .replace(/four/g, "fo4ur")
        .replace(/five/g, "fi5ve")
        .replace(/six/g, "s6x")
        .replace(/seven/g, "se7en")
        .replace(/eight/g, "ei8th")
        .replace(/nine/g, "ni9ne");
}
