# Briganti score 

This is a project trying to calculate the Brigani score as defined here: https://www.mskcc.org/nomograms/prostate/pre-op/coefficients 

```txt 

survival	Preoperative BCR	
Intercept	6.89129254
Patient Age - 0.00667038
Preoperative PSA - 0.42086984
Preoperative PSA Spline 1	0.00325414
Preoperative PSA Spline 2 - 0.00890319
Biopsy Gleason Grade Group 2 - 1.00336248
Biopsy Gleason Grade Group 3 - 2.13598293
Biopsy Gleason Grade Group 4 - 2.67572871
Biopsy Gleason Grade Group 5 - 2.96947204
Clinical Stage 2A - 0.41919179
Clinical Stage 2B - 0.93241185
Clinical Stage 2C - 0.7776788
Clinical Stage 3 + -1.20656131
Scaling Parameter	1.11545625
C - index	0.79486841
Model N	12859

logistic	Extracapsular Extension(Cores)	
Intercept - 4.15856825
Patient Age	0.03315785
Preoperative PSA	0.23689779
Preoperative PSA Spline 1 - 0.00155664
Preoperative PSA Spline 2	0.00421604
Biopsy Gleason Grade Group 2	0.57991782
Biopsy Gleason Grade Group 3	1.04867838
Biopsy Gleason Grade Group 4	1.08939426
Biopsy Gleason Grade Group 5	2.15344712
Clinical Stage 2A	0.2284917
Clinical Stage 2B	0.72812163
Clinical Stage 2C	0.44582508
Clinical Stage 3 + 1.38278725
No.of Positive Cores	0.09196409
No.of Negative Cores - 0.08716265
AUC	0.78372783
Model N	7165
logistic	Extracapsular Extension	Intercept - 4.43655304
Patient Age	0.02833911
Preoperative PSA	0.23913315
Preoperative PSA Spline 1 - 0.00161171
Preoperative PSA Spline 2	0.00437081
Biopsy Gleason Grade Group 2	0.8860922
Biopsy Gleason Grade Group 3	1.39796826
Biopsy Gleason Grade Group 4	1.41353564
Biopsy Gleason Grade Group 5	2.45951772
Clinical Stage 2A	0.36001666
Clinical Stage 2B	0.92904125
Clinical Stage 2C	0.84127043
Clinical Stage 3 + 1.66646485
AUC	0.7627261
Model N	12814
logistic	Lymph Node Involvement(Cores)	Intercept - 5.37368223
Patient Age	0.00906354
Preoperative PSA	0.21239809
Preoperative PSA Spline 1 - 0.00132481
Preoperative PSA Spline 2	0.00356913
Biopsy Gleason Grade Group 2	1.11942836
Biopsy Gleason Grade Group 3	2.04349206
Biopsy Gleason Grade Group 4	2.38639019
Biopsy Gleason Grade Group 5	3.03232465
Clinical Stage 2A	0.41343583
Clinical Stage 2B	0.61334931
Clinical Stage 2C	0.76929921
Clinical Stage 3 + 0.71055042
No.of Positive Cores	0.05499551
No.of Negative Cores - 0.11987793
AUC	0.84916281
Model N	6599
logistic	Lymph Node Involvement	Intercept - 6.16816581
Patient Age	0.0057656
Preoperative PSA	0.1995788
Preoperative PSA Spline 1 - 0.00114465
Preoperative PSA Spline 2	0.00304027
Biopsy Gleason Grade Group 2	1.49969162
Biopsy Gleason Grade Group 3	2.41319895
Biopsy Gleason Grade Group 4	2.77874176
Biopsy Gleason Grade Group 5	3.53163304
Clinical Stage 2A	0.49826546
Clinical Stage 2B	0.85236704
Clinical Stage 2C	1.18370788
Clinical Stage 3 + 1.34546403
AUC	0.8478659
Model N	11816
logistic	Organ Confined Disease(Cores)	Intercept	3.70545391
Patient Age - 0.03143678
Preoperative PSA - 0.21663245
Preoperative PSA Spline 1	0.00123992
Preoperative PSA Spline 2 - 0.00329964
Biopsy Gleason Grade Group 2 - 0.41226851
Biopsy Gleason Grade Group 3 - 0.96046378
Biopsy Gleason Grade Group 4 - 0.90807597
Biopsy Gleason Grade Group 5 - 2.12944092
Clinical Stage 2A - 0.2328776
Clinical Stage 2B - 0.67944746
Clinical Stage 2C - 0.38677363
Clinical Stage 3 + -1.28845284
No.of Positive Cores - 0.08551348
No.of Negative Cores	0.0866053
AUC	0.77100921
Model N	6698

logistic	Organ Confined Disease	
Intercept	4.10123098
Patient Age - 0.02711172
Preoperative PSA - 0.2289207
Preoperative PSA Spline 1	0.00143491
Preoperative PSA Spline 2 - 0.00386169
Biopsy Gleason Grade Group 2 - 0.74330601
Biopsy Gleason Grade Group 3 - 1.31501818
Biopsy Gleason Grade Group 4 - 1.29291849
Biopsy Gleason Grade Group 5 - 2.45664546
Clinical Stage 2A - 0.35412526
Clinical Stage 2B - 0.88304539
Clinical Stage 2C - 0.7937644
Clinical Stage 3 + -1.66390345
AUC	0.7538509
Model N	11978

logistic	Seminal Vesicle Invasion(Cores)	
Intercept - 5.80854959
Patient Age	0.02212368
Preoperative PSA	0.31963703
Preoperative PSA Spline 1 - 0.00250076
Preoperative PSA Spline 2	0.00683011
Biopsy Gleason Grade Group 2	0.66352931
Biopsy Gleason Grade Group 3	1.5969398
Biopsy Gleason Grade Group 4	1.79682202
Biopsy Gleason Grade Group 5	2.80766015
Clinical Stage 2A	0.16709435
Clinical Stage 2B	0.40037401
Clinical Stage 2C	0.46912914
Clinical Stage 3 + 0.6154436
No.of Positive Cores	0.06147231
No.of Negative Cores - 0.1772358
AUC	0.86228792
Model N	7157

logistic	Seminal Vesicle Invasion	
Intercept - 5.93445458
Patient Age	0.00603373
Preoperative PSA	0.23269245
Preoperative PSA Spline 1 - 0.00138984
Preoperative PSA Spline 2	0.00368768
Biopsy Gleason Grade Group 2	1.12622725
Biopsy Gleason Grade Group 3	2.01641249
Biopsy Gleason Grade Group 4	2.09276511
Biopsy Gleason Grade Group 5	3.11808355
Clinical Stage 2A	0.38397337
Clinical Stage 2B	0.7317131
Clinical Stage 2C	1.05132091
Clinical Stage 3 + 1.3205862
AUC	0.83724615
Model N	12802

survival	Postoperative BCR
Intercept	6.06544681
Patient Age	0.00217305
Preoperative PSA - 0.30855258
Preoperative PSA Spline 1	0.00273133
Preoperative PSA Spline 2 - 0.00754754
Pathologic Gleason Grade Group 2 - 0.85166185
Pathologic Gleason Grade Group 3 - 2.04732288
Pathologic Gleason Grade Group 4 - 2.69430008
Pathologic Gleason Grade Group 5 - 2.730107
Extracapsular Extension - 0.75415866
Seminal Vesicle Invasion - 0.52491813
Lymph Node Involvement - 1.1522794
Surgical Margin Status - 0.87872476
Scaling Parameter	0.98794906
C - index	0.83823618
Model N	11960

```
