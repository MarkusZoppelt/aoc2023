import { readFileSync } from 'fs';

/**
    * Read a file and return its lines
    * @param file - The file to read
    * @returns The lines of the file
    */
export function getLines(file: string): string[] {
    return readFileSync(file, 'utf8').split('\n');
}
