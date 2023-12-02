export function day2(lines: string[]): void {
    const numRedCubes: number = 12;
    const numGreenCubes: number = 13;
    const numBlueCubes: number = 14;

    let powerSum: number = 0;

    let sum: number = 0;
    for (let line of lines) {
        if (line.trim() === '') {
            continue;
        }
        let id: number = parseInt(line.split(' ')[1]);
        let sets: string[] = line.split(':')[1].split(';');

        let possible: boolean = true;
        var maxRed: number = 0;
        var maxGreen: number = 0;
        var maxBlue: number = 0;

        for (let set of sets) {
            let cubes: string[] = set.split(',');

            for (let cube of cubes) {
                cube = cube.trim();
                let num: number = parseInt(cube.split(' ')[0]);
                let color: string = cube.split(' ')[1];
                if (color === 'red') {
                    maxRed = Math.max(maxRed, num);
                    if (num > numRedCubes) {
                        possible = false;
                    }
                }
                if (color === 'green') {
                    maxGreen = Math.max(maxGreen, num);
                    if (num > numGreenCubes) {
                        possible = false;
                    }
                }
                if (color === 'blue') {
                    maxBlue = Math.max(maxBlue, num);
                    if (num > numBlueCubes) {
                        possible = false;
                    }
                }
            }
        }
        powerSum += maxRed * maxGreen * maxBlue;
        if (possible) {
            sum += id;
        }
    }

    console.log("Solution Part I: " + sum);
    console.log("Solution Part II: " + powerSum);
}
