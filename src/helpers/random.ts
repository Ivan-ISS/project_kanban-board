export function random(min: number, max: number): number {
    const result: number = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}
