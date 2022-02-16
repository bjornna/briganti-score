
//Logistic regression coefficients predicting lymph node involvement (LNI).
const Intercept = -4.5974;
const Preoperative_PSA = 0.0416;
const Extracapsular_extension_at_mpMRI = 1.2214;
const Seminal_vesicle_invasion_at_mpMRI = 1.4672;
const Maximum_lesion_diameter_at_mpMRI = 0.0311;
const Biopsy_Gleason_grade_group_3_at_targeted_biopsy = 1.2032;
const Biopsy_Gleason_grade_group_gte4_at_targeted_biopsy = 1.8063;
const Percentage_of_cores_with_clinically_significant_PCa_at_concomitant_systematic_biopsy = 0.0119;


const Coeffecients = {
    intercept: Intercept,
    preopPsa: Preoperative_PSA,
    extracap: Extracapsular_extension_at_mpMRI,
    seminal: Seminal_vesicle_invasion_at_mpMRI,
    maxLesion: Maximum_lesion_diameter_at_mpMRI,
    gleason3: Biopsy_Gleason_grade_group_3_at_targeted_biopsy,
    gleasonGte4: Biopsy_Gleason_grade_group_gte4_at_targeted_biopsy,
    perentage: Percentage_of_cores_with_clinically_significant_PCa_at_concomitant_systematic_biopsy
}
export type BinaryTrueFalse = 0 | 1;


export interface Model {
    psa: number;
    extracapsularExtension: BinaryTrueFalse;
    seminalVesicleInvasion: BinaryTrueFalse;
    maxLesionDiameter: number;
    biopsyGrade3: BinaryTrueFalse,
    biopsyGradeGte4: BinaryTrueFalse,
    percentageCore: number;

}





export function calculate(m: Model) {

    const c = Coeffecients;

    const v0 = c.intercept;
    const v1 = m.psa * c.preopPsa;
    const v2 = m.extracapsularExtension * c.extracap;
    const v3 = m.seminalVesicleInvasion * c.seminal;
    const v4 = m.maxLesionDiameter * c.maxLesion;
    const v5 = m.biopsyGrade3 * c.gleason3;
    const v6 = m.biopsyGradeGte4 * c.gleasonGte4;
    const v7 = m.percentageCore * c.perentage;

    const calculatedCoeffecients = [v0, v1, v2, v3, v4, v5, v6, v7];


    const xB = calculatedCoeffecients.reduce((partialSum, a) => partialSum + a, 0);
    return Math.exp(xB) / (1 + Math.exp(xB));

}


