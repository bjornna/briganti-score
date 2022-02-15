import {calculateGleasonGradeGroup} from './test';

const testdata = [
    [1, 1, 1],

    [3, 4, 2],
    [4, 3, 3],
    [5, 3, 4],
    [6, 3, 5]

]

testdata.forEach(d => {
    const b = expect(d[0], d[1], d[2]);
    console.log(b);
})

function expect(g1: number, g2: number, res: number) {
    const c = calculateGleasonGradeGroup(g1, g2);
    return c == res;
}