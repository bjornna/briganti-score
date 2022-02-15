export interface BrigantiFactors {
    Intercept: number;
    Patient_Age: number;
    Preoperative_PSA: number;
    Preoperative_PSA_Spline_1: number;
    Preoperative_PSA_Spline_2: number;
    Biopsy_Gleason_Grade_Group_2: number;
    Biopsy_Gleason_Grade_Group_3: number;
    Biopsy_Gleason_Grade_Group_4: number;
    Biopsy_Gleason_Grade_Group_5: number;
    Clinical_Stage_2A: number;
    Clinical_Stage_2B: number;
    Clinical_Stage_2C: number;
    Clinical_Stage_3_plus: number;
    Model_N: number;
}
export interface LogisticsModel extends BrigantiFactors {
    AUC: number;
}
export interface SurvivalPreoperativeBcr extends BrigantiFactors {
    Number_of_Positive_Cores: number;
    Number_of_Negative_Cores: number;
    Scaling_Parameter: number;
    C_index: number;
}
// survival	Preoperative BCR(Cores)	
export const Survival_Preoperative_BCR_Cores: SurvivalPreoperativeBcr = {
    Intercept: 6.54845103,
    Patient_Age: - 0.01142415,
    Preoperative_PSA: - 0.42661017,
    Preoperative_PSA_Spline_1: 0.00341088,
    Preoperative_PSA_Spline_2: - 0.00936064,
    Biopsy_Gleason_Grade_Group_2: - 0.87637926,
    Biopsy_Gleason_Grade_Group_3: - 1.96738364,
    Biopsy_Gleason_Grade_Group_4: - 2.63816261,
    Biopsy_Gleason_Grade_Group_5: - 2.6826231,
    Clinical_Stage_2A: - 0.22515847,
    Clinical_Stage_2B: - 0.69429852,
    Clinical_Stage_2C: - 0.43136148,
    Clinical_Stage_3_plus: -0.8300922,
    Number_of_Positive_Cores: - 0.0288405,
    Number_of_Negative_Cores: 0.07753207,
    Scaling_Parameter: 1.08821949,
    C_index: 0.80725646,
    Model_N: 7186
}
const Logistic_Extracapsular_Extension_Cores: LogisticsModel = {
    Intercept: - 4.15856825,
    Patient_Age: 0.03315785,
    Preoperative_PSA: 0.23689779,
    Preoperative_PSA_Spline_1: - 0.00155664,
    Preoperative_PSA_Spline_2: 0.00421604,
    Biopsy_Gleason_Grade_Group_2: 0.57991782,
    Biopsy_Gleason_Grade_Group_3: 1.04867838,
    Biopsy_Gleason_Grade_Group_4: 1.08939426,
    Biopsy_Gleason_Grade_Group_5: 2.15344712,
    Clinical_Stage_2A: 0.2284917,
    Clinical_Stage_2B: 0.72812163,
    Clinical_Stage_2C: 0.44582508,
    Clinical_Stage_3_plus: 1.38278725,
    AUC: 0.78372783,
    Model_N: 7165

}
export const Logistic_Organ_Confined_Disease: LogisticsModel = {
    Intercept: 4.10123098,
    Patient_Age: - 0.02711172,
    Preoperative_PSA: - 0.2289207,
    Preoperative_PSA_Spline_1: 0.00143491,
    Preoperative_PSA_Spline_2: - 0.00386169,
    Biopsy_Gleason_Grade_Group_2: - 0.74330601,
    Biopsy_Gleason_Grade_Group_3: - 1.31501818,
    Biopsy_Gleason_Grade_Group_4: - 1.29291849,
    Biopsy_Gleason_Grade_Group_5: - 2.45664546,
    Clinical_Stage_2A: - 0.35412526,
    Clinical_Stage_2B: - 0.88304539,
    Clinical_Stage_2C: - 0.7937644,
    Clinical_Stage_3_plus: -1.66390345,
    AUC: 0.7538509,
    Model_N: 11978

}