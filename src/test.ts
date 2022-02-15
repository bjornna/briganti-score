import {Survival_Preoperative_BCR_Cores, SurvivalPreoperativeBcr, LogisticsModel, Logistic_Organ_Confined_Disease} from './index';
type TNM = "T1a" | "T1b" | "T1c" | "T2a" | "T2b" | "T2c" | "T3a" | "T3b" | "T3c";

interface Knots {
    knot1: number;
    knot2: number;
    knot3: number;
    knot4: number;
}
const knots: Knots = {
    knot1: 0.2,
    knot2: 4.7,
    knot3: 7.2,
    knot4: 96.53
}
export interface PatientCase {
    age: number,
    psa: number,
    primary_gleason: number;
    secondary_gleason: number;
    gleason_score?: number;
    t: TNM;
    cores_positive: number;
    cores_negative: number;
    percentage_of_cores_negative?: number;

}
const case1: PatientCase = {
    age: 50,
    psa: 20,
    primary_gleason: 4,
    secondary_gleason: 4,
    t: "T1a",
    cores_positive: 10,
    cores_negative: 10,


}
evaluatePatientCase(case1, Survival_Preoperative_BCR_Cores);
evalutePatientOrganConfinedDisease(case1);

function evaluatePatientCase(patientCase: PatientCase, factors: SurvivalPreoperativeBcr) {

    const years = 5;
    const xb = calculate(patientCase);
    console.log("Sum = " + xb);
    const exxb = Math.exp(-xb);
    const upper = 1 + Math.pow(exxb * years, 1 / factors.Scaling_Parameter);
    const lower = 1 + Math.pow(exxb * 5, 1 / factors.Scaling_Parameter);
    const final = upper / lower;
    console.log("5yr survival = " + final);
    const percent = Math.round(final * 100);
    console.log("5yr survical % = " + percent);


}
function evalutePatientOrganConfinedDisease(c: PatientCase) {
    const f = Logistic_Organ_Confined_Disease;
    const r = logisticsModel(c, f);
    const final = Math.exp(r) / (1 + Math.exp(r));
    console.log("Organ Confined Disease = " + final);

}
function logisticsModel(c: PatientCase, f: LogisticsModel) {

    const psaSpline1 = calcKnotsSpline1(c.psa);
    const psaSpline2 = calcKnotsSpline2(c.psa);
    const gleasonGradeGroup = calculateGleasonGradeGroup(c.primary_gleason, c.secondary_gleason);
    const bg2 = gleasonGradeGroup == 2 ? 1 : 0;
    const bg3 = gleasonGradeGroup == 3 ? 1 : 0;
    const bg4 = gleasonGradeGroup == 4 ? 1 : 0;
    const bg5 = gleasonGradeGroup == 5 ? 1 : 0;
    const cs2A = c.t == "T2a" ? 1 : 0;
    const cs2B = c.t == "T2b" ? 1 : 0;
    const cs2C = c.t == "T2c" ? 1 : 0;
    const cs3 = isStage3Plus(c.t) ? 1 : 0;
    console.log(`2A=${cs2A}, 2b=${cs2B}, 2c=${cs2C} , 3+=${cs3}`);
    const result = f.Intercept +
        c.age * f.Patient_Age +
        c.psa * f.Preoperative_PSA +
        psaSpline1 * f.Preoperative_PSA_Spline_1 +
        psaSpline2 * f.Preoperative_PSA_Spline_2 +
        bg2 * f.Biopsy_Gleason_Grade_Group_2 +
        bg3 * f.Biopsy_Gleason_Grade_Group_3 +
        bg4 * f.Biopsy_Gleason_Grade_Group_4 +
        bg5 * f.Biopsy_Gleason_Grade_Group_5 +
        cs2A * f.Clinical_Stage_2A +
        cs2B * f.Clinical_Stage_2B +
        cs2C * f.Clinical_Stage_2C +
        cs3 * f.Clinical_Stage_3_plus;

    return result;

}





function calculate(c: PatientCase) {
    const psaSpline1 = calcKnotsSpline1(c.psa);
    const psaSpline2 = calcKnotsSpline2(c.psa);
    const gleasonGradeGroup = calculateGleasonGradeGroup(c.primary_gleason, c.secondary_gleason);
    console.log("Gleason Grade Group = " + gleasonGradeGroup);
    const bg2 = gleasonGradeGroup == 2 ? 1 : 0;
    const bg3 = gleasonGradeGroup == 3 ? 1 : 0;
    const bg4 = gleasonGradeGroup == 4 ? 1 : 0;
    const bg5 = gleasonGradeGroup == 5 ? 1 : 0;
    //console.log(`GGG 2 = ${bg2}, GGG 3 = ${bg3}, GGG 4 = ${bg4} , GGG 5 = ${bg5}`);

    const cs2A = c.t == "T2a" ? 1 : 0;
    const cs2B = c.t == "T2b" ? 1 : 0;
    const cs2C = c.t == "T2c" ? 1 : 0;
    const cs3 = isStage3Plus(c.t) ? 1 : 0;

    const f = Survival_Preoperative_BCR_Cores;
    const result =
        f.Intercept +
        c.age * f.Patient_Age +
        c.psa * f.Preoperative_PSA +
        psaSpline1 * f.Preoperative_PSA_Spline_1 +
        psaSpline2 * f.Preoperative_PSA_Spline_2 +
        bg2 * f.Biopsy_Gleason_Grade_Group_2 +
        bg3 * f.Biopsy_Gleason_Grade_Group_3 +
        bg4 * f.Biopsy_Gleason_Grade_Group_4 +
        bg5 * f.Biopsy_Gleason_Grade_Group_5 +
        cs2A * f.Clinical_Stage_2A +
        cs2B * f.Clinical_Stage_2B +
        cs2C * f.Clinical_Stage_2C +
        cs3 * f.Clinical_Stage_3_plus +
        c.cores_positive * f.Number_of_Positive_Cores +
        c.cores_negative * f.Number_of_Negative_Cores;



    return result;



}
function isStage3Plus(t: TNM) {
    switch (t) {
        case "T3a":
            return true;
        case "T3b":
            return true;
        case "T3c":
            return true;
        default: return false;
    }
}

export function calculateGleasonGradeGroup(g1: number, g2: number) {
    const sum = g1 + g2;
    switch (true) {
        case sum < 7:
            return 1;
        case sum == 7 && g1 == 3 && g2 == 4:
            return 2;
        case sum == 7 && g1 == 4 && g2 == 3:
            return 3;
        case sum == 8:
            return 4;
        case sum > 8:
            return 5;
    }
}

function calcKnotsSpline1(psa: number) {


    const s1 = Math.max(psa - knots.knot1, 0);
    const s3 = Math.max(psa - knots.knot3, 0);
    const s4 = Math.max(psa - knots.knot4, 0);
    console.log(`s1=${s1}, s3=${s3}, s4=${s4}`);

    const factor3 = (knots.knot4 - knots.knot1) / (knots.knot4 - knots.knot3);
    const factor4 = (knots.knot3 - knots.knot1) / (knots.knot4 - knots.knot3);

    const t = Math.pow(s1, 3) - Math.pow(s3, 3) * factor3 + Math.pow(s4, 3) * factor4;
    console.log("PSA Spline 1 = " + t);
    return t;


}
function calcKnotsSpline2(psa: number) {
    const s2 = Math.max(psa - knots.knot2, 0);
    const s3 = Math.max(psa - knots.knot3, 0);
    const s4 = Math.max(psa - knots.knot4, 0);
    console.log(`s2=${s2}, s3=${s3}, s4=${s4}`);

    const factor3 = (knots.knot4 - knots.knot2) / (knots.knot4 - knots.knot3);
    const factor4 = (knots.knot3 - knots.knot2) / (knots.knot4 - knots.knot3);
    const t = Math.pow(s2, 3) - Math.pow(s3, 3) * factor3 + Math.pow(s4, 3) * factor4;
    console.log("PSA Spline 2 = " + t);
    return t;

}