/**
 * Testcase to validate the implementation 
 */

import {BinaryTrueFalse, calculate, Model} from './briganti_2018';

type VALUES = [number, BinaryTrueFalse, BinaryTrueFalse, number, BinaryTrueFalse, BinaryTrueFalse, number];
const pat1: VALUES = [17.9, 1, 0, 38, 0, 1, 67.1];
const pat2: VALUES = [78.8, 0, 1, 44, 0, 1, 99];
const pat3: VALUES = [1.1, 0, 0, 0, 0, 0, 1.4];
const pat4: VALUES = [39.3, 1, 0, 23, 1, 0, 51.5];

interface ModelValidation {
    values: VALUES;
    exptected: number;
}

const modelValidation: ModelValidation[] = [
    {
        values: pat1, exptected: 76
    }, {
        values: pat2, exptected: 98.9
    }, {
        values: pat3, exptected: 1.1
    }, {
        values: pat4, exptected: 68.8
    }
]

modelValidation.forEach(m => {
    const values = m.values;
    const model: Model = {
        psa: values[0],
        extracapsularExtension: values[1],
        seminalVesicleInvasion: values[2],
        maxLesionDiameter: values[3],
        biopsyGrade3: values[4],
        biopsyGradeGte4: values[5],
        percentageCore: values[6]
    }
    const result = calculate(model);
    const percentage = Math.round(result * 1000) / 10;
    const check = percentage === m.exptected;
    console.log("Test passed = " + check);
    if (!check) {
        console.log("|- Expected: " + m.exptected);
        console.log("|- Result: " + percentage);
    }

})