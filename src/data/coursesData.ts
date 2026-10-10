import { CourseModule, ExamModality } from '../types';
import { CU_QUESTION_BANK_2024 } from './questionBank2024';

export const CU_DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1_m_CV0M40fPCF1aPwq3eL92Y0xalO6BG";

export const examModalitiesData: ExamModality[] = [
  {
    semester: "Semester I",
    courseCode: "ELTD-IDC-1 (IDC-1)",
    courseTitle: "IDC Electronics (ELTD) — Complete Common Curriculum",
    totalCredits: 3,
    theoryCredits: 2,
    tutorialCredits: 1,
    practicalCredits: 0,
    totalMarks: 75,
    theoryMarks: 50,
    tutorialMarks: 25,
    practicalMarks: 0,
    internalAssessmentMarks: 0,
    attendanceMarks: 0,
    examDuration: "2 Hours (Theory)",
    syllabusCoverage: "Same syllabus across all three semesters (Units 1 to 7): 1. Basic Circuit Components, 2. Semiconductor Devices and Circuits, 3. Bipolar Junction Transistors (BJT), 4. Field Effect Transistor, 5. Operational Amplifiers and Its Applications, 6. Digital Logic Circuits, 7. Electronic Communication.",
    questionPattern: {
      groupA: "Group A (Short Answer Questions): Answer 10 out of 12 questions of 2 marks each = 20 Marks (Definitions, laws, symbols, formulas, and fundamental circuit concepts across all modules)",
      groupB: "Group B (Broad / Analytical / Numerical Questions): Answer 3 out of 5 questions of 10 marks each {part mark not more than 5} = 30 Marks (Derivations, circuit schematics, working principles, design calculations; part-marking strictly ≤ 5 marks e.g. 5+5, 4+4+2)"
    }
  },
  {
    semester: "Semester II",
    courseCode: "ELTD-IDC-2 (IDC-2)",
    courseTitle: "IDC Electronics (ELTD) — Complete Common Curriculum",
    totalCredits: 3,
    theoryCredits: 2,
    tutorialCredits: 1,
    practicalCredits: 0,
    totalMarks: 75,
    theoryMarks: 50,
    tutorialMarks: 25,
    practicalMarks: 0,
    internalAssessmentMarks: 0,
    attendanceMarks: 0,
    examDuration: "2 Hours (Theory)",
    syllabusCoverage: "Same syllabus across all three semesters (Units 1 to 7): 1. Basic Circuit Components, 2. Semiconductor Devices and Circuits, 3. Bipolar Junction Transistors (BJT), 4. Field Effect Transistor, 5. Operational Amplifiers and Its Applications, 6. Digital Logic Circuits, 7. Electronic Communication.",
    questionPattern: {
      groupA: "Group A (Short Answer Questions): Answer 10 out of 12 questions of 2 marks each = 20 Marks (Definitions, laws, symbols, formulas, and fundamental circuit concepts across all modules)",
      groupB: "Group B (Broad / Analytical / Numerical Questions): Answer 3 out of 5 questions of 10 marks each {part mark not more than 5} = 30 Marks (Derivations, circuit schematics, working principles, design calculations; part-marking strictly ≤ 5 marks e.g. 5+5, 4+4+2)"
    }
  },
  {
    semester: "Semester III",
    courseCode: "ELTD-IDC-3 (IDC-3)",
    courseTitle: "IDC Electronics (ELTD) — Complete Common Curriculum",
    totalCredits: 3,
    theoryCredits: 2,
    tutorialCredits: 1,
    practicalCredits: 0,
    totalMarks: 75,
    theoryMarks: 50,
    tutorialMarks: 25,
    practicalMarks: 0,
    internalAssessmentMarks: 0,
    attendanceMarks: 0,
    examDuration: "2 Hours (Theory)",
    syllabusCoverage: "Same syllabus across all three semesters (Units 1 to 7): 1. Basic Circuit Components, 2. Semiconductor Devices and Circuits, 3. Bipolar Junction Transistors (BJT), 4. Field Effect Transistor, 5. Operational Amplifiers and Its Applications, 6. Digital Logic Circuits, 7. Electronic Communication.",
    questionPattern: {
      groupA: "Group A (Short Answer Questions): Answer 10 out of 12 questions of 2 marks each = 20 Marks (Definitions, laws, symbols, formulas, and fundamental circuit concepts across all modules)",
      groupB: "Group B (Broad / Analytical / Numerical Questions): Answer 3 out of 5 questions of 10 marks each {part mark not more than 5} = 30 Marks (Derivations, circuit schematics, working principles, design calculations; part-marking strictly ≤ 5 marks e.g. 5+5, 4+4+2)"
    }
  }
];

export const courseModulesData: CourseModule[] = [
  // 1. Basic Circuit Components (Exact CU Syllabus)
  {
    id: "basic_circuit_components",
    slug: "basic-circuit-components",
    title: "Basic Circuit Components",
    shortTitle: "Circuit Components",
    semester: "sem1",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Basic Circuit Components",
    officialSyllabus: "Circuit Elements: Resistors, Inductors, Capacitors, Transformers, concept of voltage and current sources, Kirchhoff’s current and voltage laws, concept of impedance, equivalent impedance of series and parallel combinations of R, L and C.",
    overview: "Covers fundamental circuit elements: Resistors, Inductors, Capacitors, Transformers, concept of voltage and current sources, Kirchhoff's current and voltage laws, concept of impedance, and equivalent impedance of series and parallel combinations of R, L, and C.",
    learningObjectives: [
      "Identify standard symbols and SI units of Resistors (Ω), Inductors (H), Capacitors (F), and Transformers.",
      "Calculate equivalent resistance of series and parallel resistor combinations, and understand variable resistors (potentiometers/rheostats).",
      "Calculate equivalent capacitance of series and parallel capacitor combinations.",
      "Understand Step-Up and Step-Down Transformers, transformation ratio k = Ns/Np = Vs/Vp, and why transformers are required (voltage stepping, isolation, impedance matching).",
      "Differentiate between Ideal and Practical Voltage and Current Sources, with internal resistance models.",
      "State Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) in text and formulate their mathematical equations.",
      "Understand the physical concept of Impedance (Z = R + jX) and calculate equivalent impedance of series and parallel combinations of R, L, and C."
    ],
    symbols: [
      {
        name: "Resistor (Fixed)",
        standard: "IEEE Std 315 / IEC 60617",
        description: "Passive 2-terminal dissipative element opposing electric current according to Ohm's Law. Unit: Ohm (Ω).",
        symbolType: "resistor",
        terminalNames: ["Terminal 1", "Terminal 2"],
        keyFormula: "V = I · R  |  Unit: Ohm (Ω)",
        specs: "Carbon film, metal film, wirewound (Units: Ω, kΩ, MΩ)"
      },
      {
        name: "Variable Resistor (Potentiometer / Rheostat)",
        standard: "IEEE Std 315",
        description: "Three-terminal or two-terminal resistor with an adjustable sliding wiper contact to vary resistance continuously. Unit: Ohm (Ω).",
        symbolType: "variable_resistor",
        terminalNames: ["Fixed Terminal 1", "Wiper (Adjustable)", "Fixed Terminal 2"],
        keyFormula: "V_out = V_in · (R_wiper / R_total)  |  Unit: Ohm (Ω)",
        specs: "Rotary potentiometer, wirewound rheostat (e.g. 10kΩ linear / logarithmic)"
      },
      {
        name: "Inductor",
        standard: "IEEE Std 315 / IEC 60617",
        description: "Passive component consisting of wire coils storing energy in a magnetic field opposing instantaneous changes in current (Faraday & Lenz's Law). Unit: Henry (H).",
        symbolType: "inductor",
        terminalNames: ["Lead 1", "Lead 2"],
        keyFormula: "v(t) = L · (di/dt), W = 1/2 L I²  |  Unit: Henry (H, mH, μH)",
        specs: "Air-core, iron-core, ferrite core toroidal inductors"
      },
      {
        name: "Capacitor",
        standard: "IEEE Std 315 / IEC 60617",
        description: "Passive 2-terminal component storing electrostatic energy between conducting plates separated by a dielectric. Unit: Farad (F).",
        symbolType: "capacitor",
        terminalNames: ["Anode (+)", "Cathode (-)"],
        keyFormula: "q = C · V, i(t) = C · (dv/dt)  |  Unit: Farad (F, μF, nF, pF)",
        specs: "Ceramic disc, electrolytic (polarized), polyester, mica"
      },
      {
        name: "Step-Up Transformer",
        standard: "IEEE Std 315",
        description: "Magnetic device with fewer primary turns and more secondary turns (Ns > Np), stepping up AC voltage (Vs > Vp).",
        symbolType: "transformer_step_up",
        terminalNames: ["Primary Winding (Np)", "Secondary Winding (Ns)", "Laminated Core"],
        keyFormula: "Vs / Vp = Ns / Np > 1  (Is < Ip)",
        specs: "Power grid transmission, microwave oven transformers"
      },
      {
        name: "Step-Down Transformer",
        standard: "IEEE Std 315",
        description: "Magnetic device with more primary turns and fewer secondary turns (Ns < Np), stepping down AC voltage (Vs < Vp) for safe electronics.",
        symbolType: "transformer_step_down",
        terminalNames: ["Primary Winding (Np)", "Secondary Winding (Ns)", "Magnetic Core"],
        keyFormula: "Vs / Vp = Ns / Np < 1  (Is > Ip)",
        specs: "230V AC to 12V/9V/5V DC adapters, battery chargers"
      },
      {
        name: "Voltage Source (Ideal & Practical)",
        standard: "IEEE Std 315",
        description: "Delivers potential difference between terminals. Ideal has zero internal resistance (rs = 0); Practical has small series internal resistance rs.",
        symbolType: "voltage_source",
        terminalNames: ["Positive (+)", "Negative (-)", "Internal Series rs"],
        keyFormula: "V_terminal = V_s - I · r_s  (Ideal: r_s = 0)",
        specs: "DC Battery, AC Wall Outlet, Regulated Power Supply"
      },
      {
        name: "Current Source (Ideal & Practical)",
        standard: "IEEE Std 315",
        description: "Delivers constant current independent of load voltage. Ideal has infinite parallel resistance (rsh = ∞); Practical has large parallel resistance rsh.",
        symbolType: "current_source",
        terminalNames: ["Current In", "Current Out", "Internal Shunt rsh"],
        keyFormula: "I_terminal = I_s - (V_load / r_sh)  (Ideal: r_sh = ∞)",
        specs: "Transistor collector in active mode, solar cell, Norton generator"
      }
    ],
    circuits: [
      {
        id: "rc_impedance_circuit",
        title: "Equivalent Impedance of Series & Parallel R-C Combinations",
        subtitle: "AC capacitive reactance Xc = 1/(ωC), series impedance Zs = R - jXc, parallel impedance Zp, and leading current phasor.",
        description: "In alternating current circuits with resistance R and capacitance C, the capacitor introduces capacitive reactance Xc = 1/(2πfC) where current leads voltage by 90°. In series, impedances add directly; in parallel, admittances add directly.",
        circuitType: "AC R-C Circuit Analysis",
        components: [
          "Sinusoidal AC Generator v(t) = Vm sin ωt",
          "Series Resistor R and Capacitor C (Xc = 1/ωC)",
          "Parallel Resistor R and Capacitor C branches",
          "Capacitive Impedance Triangle (θ = -tan⁻¹(Xc/R))"
        ],
        keyOperation: [
          "Series R-C Equivalent Impedance: Z_series = R - j Xc = R - j (1/ωC). Magnitude: |Z_series| = √[R² + Xc²] = √[R² + (1/2πfC)²].",
          "Series R-C Phase Angle & Power Factor: Phase angle θ = -tan⁻¹(Xc / R) = -tan⁻¹[1 / (ω C R)]. Current leads applied voltage by angle |θ| (Leading Power Factor cos θ = R / |Z_series|). Total voltage V = √[VR² + Vc²].",
          "Parallel R-C Equivalent Admittance: Y_parallel = 1/R + j ωC = G + j Bc, where Conductance G = 1/R and Capacitive Susceptance Bc = ωC = 1/Xc.",
          "Parallel R-C Equivalent Impedance: Z_parallel = 1 / Y_parallel = (R · (-j Xc)) / (R - j Xc) = R / (1 + j ωCR). Magnitude: |Z_parallel| = (R · Xc) / √[R² + Xc²]. Current splits into IR in phase with V and Ic leading V by 90°: I_total = √[IR² + Ic²]."
        ],
        inputOutputRelation: "Series: Zs = √[R² + Xc²] ∠ -tan⁻¹(Xc/R)  |  Parallel: Zp = (R · Xc)/√[R² + Xc²] ∠ -tan⁻¹(R/Xc)",
        formula: "Series: |Z_s| = √[R² + (1/2πfC)²]  ·  Parallel: |Z_p| = [R · (1/2πfC)] / √[R² + (1/2πfC)²]",
        cuExamTip: "Frequent CU Exam question: Derive the equivalent impedance expression for series and parallel R-C circuits connected across an AC supply. Draw phasor diagrams and state whether current leads or lags voltage."
      },
      {
        id: "rl_impedance_circuit",
        title: "Equivalent Impedance of Series & Parallel R-L Combinations",
        subtitle: "AC inductive reactance XL = ωL, series impedance Zs = R + jXL, parallel impedance Zp, and lagging current phasor.",
        description: "In alternating current circuits with resistance R and inductance L, the inductor introduces inductive reactance XL = 2πfL = ωL opposing current through electromagnetic back-EMF, causing voltage to lead current by 90°. Total opposition is represented by complex impedance Z.",
        circuitType: "AC R-L Circuit Analysis",
        components: [
          "Sinusoidal AC Generator v(t) = Vm sin ωt",
          "Series Resistor R and Inductor L (XL = ωL)",
          "Parallel Resistor R and Inductor L branches",
          "Inductive Impedance Triangle (θ = +tan⁻¹(XL/R))"
        ],
        keyOperation: [
          "Series R-L Equivalent Impedance: Z_series = R + j XL = R + j (ωL). Magnitude: |Z_series| = √[R² + XL²] = √[R² + (2πfL)²].",
          "Series R-L Phase Angle & Power Factor: Phase angle θ = +tan⁻¹(XL / R) = tan⁻¹[(ω L) / R]. Voltage leads current by angle θ (Lagging Power Factor cos θ = R / |Z_series|). Total voltage V = √[VR² + VL²].",
          "Parallel R-L Equivalent Admittance: Y_parallel = 1/R - j (1/ωL) = G - j BL, where Conductance G = 1/R and Inductive Susceptance BL = 1/(ωL) = 1/XL.",
          "Parallel R-L Equivalent Impedance: Z_parallel = 1 / Y_parallel = (R · (j XL)) / (R + j XL) = (j ωL R) / (R + j ωL). Magnitude: |Z_parallel| = (R · XL) / √[R² + XL²]. Current splits into IR in phase with V and IL lagging V by 90°: I_total = √[IR² + IL²]."
        ],
        inputOutputRelation: "Series: Zs = √[R² + XL²] ∠ +tan⁻¹(XL/R)  |  Parallel: Zp = (R · XL)/√[R² + XL²] ∠ +tan⁻¹(R/XL)",
        formula: "Series: |Z_s| = √[R² + (2πfL)²]  ·  Parallel: |Z_p| = [R · (2πfL)] / √[R² + (2πfL)²]",
        cuExamTip: "CU Exam Regular: Derive the equivalent impedance for a series R-L circuit and a parallel R-L circuit. Sketch the impedance triangle and phasor diagram."
      },
      {
        id: "rlc_impedance_circuit",
        title: "Equivalent Impedance of Series & Parallel R-L-C Combinations & Resonance",
        subtitle: "Complex AC impedance Z = R + j(XL - Xc), series resonance (f₀ = 1/(2π√LC)), parallel anti-resonance (Zd = L/(CR)), and Q-factor.",
        description: "In alternating current circuits containing Resistance R, Inductance L, and Capacitance C, energy exchanges periodically between the magnetic field of the inductor and electrostatic field of the capacitor, while resistor dissipates heat. Total opposition is the complex vector sum Z = R + j(XL - Xc).",
        circuitType: "AC R-L-C Circuit Analysis",
        components: [
          "Sinusoidal AC Generator v(t) = Vm sin ωt",
          "Resistor R, Inductor L (XL = ωL), Capacitor C (Xc = 1/ωC)",
          "Series RLC Loop and Parallel RLC Node Array",
          "Impedance Triangle & Frequency Response Curves"
        ],
        keyOperation: [
          "Series R-L-C Equivalent Impedance: Z_series = R + j(XL - Xc) = √[R² + (ωL - 1/ωC)²] with phase angle θ = tan⁻¹[(XL - Xc) / R].",
          "Series Resonance Condition: When inductive reactance equals capacitive reactance XL = Xc (ωL = 1/ωC), the net reactance vanishes (X = 0). Impedance is minimum (Z_0 = R), circuit current is maximum and in phase with voltage (cos θ = 1, unity power factor): Resonant frequency f₀ = 1 / (2π√[LC]).",
          "Parallel R-L-C Equivalent Admittance: Y_parallel = 1/R + j(ωC - 1/ωL). Total equivalent impedance: Z_parallel = 1 / Y_parallel = 1 / √[(1/R)² + (ωC - 1/ωL)²].",
          "Parallel Resonance (Anti-Resonance): At ω₀ = 1/√[LC], branch currents through L and C cancel externally (IL = -Ic). The circuit presents maximum dynamic impedance Zd = L / (C·R) and line current is minimum."
        ],
        inputOutputRelation: "Series: Zs = √[R² + (XL - Xc)²] ∠ tan⁻¹((XL - Xc)/R)  |  Parallel: Zp = 1 / √[(1/R)² + (ωC - 1/ωL)²]",
        formula: "Series: |Z_s| = √[R² + (2πfL - 1/2πfC)²]  ·  Resonance: f₀ = 1 / (2π√[LC])  ·  Parallel Dynamic Zd = L / (C · R)",
        cuExamTip: "CU Top Question: (a) Derive the expression for equivalent impedance of a series R-L-C circuit. (b) Find the resonant frequency and calculate impedance and power factor at resonance. (c) What is the dynamic impedance of a parallel R-L-C circuit?"
      },
      {
        id: "kirchhoff_laws_circuit",
        title: "Kirchhoff's Current Law (KCL) & Voltage Law (KVL)",
        subtitle: "Fundamental circuit laws in text and mathematical equation with node junction and closed mesh loop.",
        description: "Kirchhoff's Current Law states that the algebraic sum of currents entering a junction is zero (Σ I_in = Σ I_out). Kirchhoff's Voltage Law states that the algebraic sum of all potential differences around any closed circuit loop is zero (Σ V = 0).",
        circuitType: "Fundamental Circuit Laws",
        components: ["Node A with 4 branches (I1, I2 entering; I3, I4 leaving)", "Closed Mesh with DC Source Vs", "Resistors R1 and R2", "Loop Current I"],
        keyOperation: [
          "KCL Analysis: At central Node A, currents I1 and I2 enter while I3 and I4 exit. Conservation of charge dictates: I1 + I2 = I3 + I4.",
          "KVL Analysis: Tracing clockwise around the closed loop: Starting from ground, potential rises through Vs (+Vs), then drops across R1 (- I·R1) and drops across R2 (- I·R2).",
          "KVL Equation: Vs - I·R1 - I·R2 = 0 → Vs = I·(R1 + R2)."
        ],
        inputOutputRelation: "KCL: Σ I = 0  |  KVL: Σ V = 0",
        formula: "KCL: Σ I_in = Σ I_out  ·  KVL: Σ V_sources = Σ (I · R_drops)",
        cuExamTip: "Frequent CU Exam question: State Kirchhoff's Current and Voltage Laws both in text and write down their mathematical equations, stating their underlying conservation principles."
      },
      {
        id: "transformers_circuit",
        title: "Transformers: Step-Up vs Step-Down & Why Required",
        subtitle: "Electromagnetic induction, transformation ratio, and essential engineering requirements.",
        description: "A transformer consists of two magnetically coupled coils wound on a common high-permeability laminated ferromagnetic core. AC current in the primary winding creates time-varying mutual magnetic flux Φ(t), inducing voltage in the secondary winding according to Faraday's Law.",
        circuitType: "AC Electromagnetic Transformer",
        components: ["Primary Winding (Np turns)", "Secondary Winding (Ns turns)", "Laminated Silicon Steel Core", "Mutual Magnetic Flux Φ"],
        keyOperation: [
          "Step-Up Transformer: Ns > Np → Secondary voltage is higher than primary (Vs > Vp). Secondary current decreases (Is < Ip) so apparent power remains constant: Vp·Ip ≈ Vs·Is.",
          "Step-Down Transformer: Ns < Np → Secondary voltage is lower than primary (Vs < Vp), used in consumer adapters and low-voltage IC electronics.",
          "Transformation Ratio: k = Ns / Np = Vs / Vp = Ip / Is.",
          "Why Required: (1) Voltage level conversion (stepping up for long-distance low-loss transmission, stepping down for 5V/12V appliances); (2) Galvanic Safety Isolation; (3) Impedance Matching (Zp = (Np/Ns)² · Zs)."
        ],
        inputOutputRelation: "Vs / Vp = Ns / Np = k",
        formula: "Transformation Ratio k = Ns / Np = Vs / Vp = Ip / Is  ·  Impedance Reflection: Zp = (Np/Ns)² · Zs",
        cuExamTip: "CU Syllabus Question: Draw the symbols for step-up and step-down transformers. State why transformers are required in electrical and electronic circuits."
      },
      {
        id: "resistor_color_code",
        title: "Resistor Color Coding System & Standard 4-Band / 5-Band Chart",
        subtitle: "Color band value decoding, decimal multiplier, tolerance percentage, and precision calculation rules.",
        description: "Standard EIA color coding method for identifying resistance values and manufacturing tolerance on carbon composition and metal film resistors without requiring an ohmmeter. Uses 4-band and 5-band color rings based on standard mnemonics.",
        circuitType: "Passive Component Standard Specification",
        components: [
          "Resistor Body (Axial Leaded Ceramic / Carbon)",
          "Band 1 (1st Significant Digit: 0-9)",
          "Band 2 (2nd Significant Digit: 0-9)",
          "Band 3 (Decimal Multiplier 10⁰ to 10⁹, Gold ×0.1, Silver ×0.01)",
          "Band 4 (Tolerance %: Gold ±5%, Silver ±10%, Brown ±1%, Red ±2%)",
          "5th Band (Optional Precision Tolerance on 5-Band Resistors)"
        ],
        keyOperation: [
          "Mnemonic Rule: 'B. B. ROY of Great Britain had a Very Good Wife' (Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Gray=8, White=9).",
          "4-Band Decoding Formula: R = (Band 1 · 10 + Band 2) × 10^(Band 3) ± Band 4 (%).",
          "Calculation Example: Yellow (4) - Violet (7) - Orange (×10³) - Gold (±5%) = (47) × 10³ Ω ± 5% = 47 kΩ ± 5%. Allowable tolerance range is 44.65 kΩ to 49.35 kΩ.",
          "5-Band Precision Rule: 1st, 2nd, and 3rd bands denote three significant digits, 4th band is multiplier, 5th band is precision tolerance (e.g. Brown = ±1%).",
          "Multiplier Bands: Black ×1, Brown ×10, Red ×100, Orange ×1k, Yellow ×10k, Green ×100k, Blue ×1M, Gold ×0.1, Silver ×0.01.",
          "Tolerance Bands: Gold = ±5%, Silver = ±10%, None = ±20%, Brown = ±1%, Red = ±2%."
        ],
        inputOutputRelation: "R = (D1 · 10 + D2) × 10^Multiplier ± Tolerance %",
        formula: "R = (AB) × 10^C ± D% · Tolerable Limits: R_nom · (1 - Tol%) ≤ R ≤ R_nom · (1 + Tol%)",
        cuExamTip: "CU Frequent Exam Question: Explain the color coding of resistors with an example. Decode the value of a resistor with bands Yellow, Violet, Orange, and Gold."
      }
    ],
    theoreticalSections: [
      {
        id: "resistors_and_combinations",
        title: "1. Resistors: Symbol, Unit, Series & Parallel Combination, Variable Resistance & Color Code",
        summary: "A resistor is a passive two-terminal circuit element that implements electrical resistance as a circuit element. Its SI unit is the Ohm (Ω), defined as the resistance between two points of a conductor when a constant potential difference of 1 Volt applied between these points produces a current of 1 Ampere.",
        keyPoints: [
          "Symbol & Unit: Zig-zag (IEEE) or rectangle (IEC). Unit: Ohm (Ω). Derived units: kΩ (10³ Ω), MΩ (10⁶ Ω). Governing equation: V = I · R.",
          "Series Combination: In a series circuit, the same electric current I flows through all resistors sequentially. The total voltage drop is the sum of individual drops: V = V1 + V2 + ... = I·R1 + I·R2 + ... Therefore, equivalent series resistance is the direct algebraic sum: R_series = R1 + R2 + R3 + ... + Rn. Note: R_series is always strictly greater than the largest individual resistor in the chain.",
          "Parallel Combination: In a parallel circuit, all resistors are connected across the exact same pair of nodes, experiencing the same potential difference V. Total current divides: I = I1 + I2 + ... = V/R1 + V/R2 + ... Therefore, the reciprocal of equivalent resistance is the sum of reciprocals: 1/R_parallel = 1/R1 + 1/R2 + ... + 1/Rn. For two resistors: R_parallel = (R1 · R2) / (R1 + R2). Note: R_parallel is always strictly smaller than the smallest individual resistor.",
          "Variable Resistance (Rheostat / Potentiometer): A variable resistor allows manual or electronic adjustment of resistance. A Potentiometer is a 3-terminal component functioning as an adjustable potential divider (Vout = Vin · R_wiper/R_total). A Rheostat is a 2-terminal configuration (wiper tied to one end) used to directly regulate current in a circuit.",
          "Resistor Color Code System: Carbon and metal film resistors are marked with 4 or 5 colored rings to indicate resistance and tolerance without an ohmmeter.",
          "Mnemonic Code: 'B. B. ROY of Great Britain had a Very Good Wife' where: Black = 0, Brown = 1, Red = 2, Orange = 3, Yellow = 4, Green = 5, Blue = 6, Violet = 7, Gray = 8, White = 9.",
          "Multiplier & Tolerance Rings: Multipliers: Black = ×10⁰, Brown = ×10¹, Red = ×10², Orange = ×10³, Yellow = ×10⁴, Green = ×10⁵, Blue = ×10⁶, Gold = ×0.1 (10⁻¹), Silver = ×0.01 (10⁻²). Tolerances: Gold = ±5%, Silver = ±10%, None = ±20%, Brown = ±1%, Red = ±2%.",
          "4-Band Calculation Formula & Solved Example: R = (Band 1 × 10 + Band 2) × 10^(Band 3) ± Band 4%. For Yellow-Violet-Orange-Gold: Yellow = 4, Violet = 7, Orange = ×10³, Gold = ±5%. Thus R = 47 × 10³ Ω ± 5% = 47 kΩ ± 5% (allowable range: 44.65 kΩ to 49.35 kΩ). For Brown-Black-Red-Gold: R = 10 × 10² ± 5% = 1 kΩ ± 5%."
        ],
        circuitRef: "resistor_color_code"
      },
      {
        id: "inductors_and_capacitors",
        title: "2. Inductors & Capacitors: Symbols, Units, Series & Parallel Combinations",
        summary: "Inductors and Capacitors are energy storage components that do not dissipate power in ideal conditions.",
        keyPoints: [
          "Inductors - Symbol & Unit: Symbol is a coiled wire. SI unit is the Henry (H). An inductor has an inductance of 1 Henry when current changing at the rate of 1 Ampere per second induces a back-EMF of 1 Volt: v(t) = L · (di/dt). Energy stored in magnetic field: W = 1/2 · L · I².",
          "Inductors Series & Parallel: Series inductors combine additively (like resistors): L_series = L1 + L2 + ... + Ln. Parallel inductors combine reciprocally: 1/L_parallel = 1/L1 + 1/L2 + ...",
          "Capacitors - Symbol & Unit: Symbol is two parallel plates (with a curved plate for polarized electrolytic types). SI unit is the Farad (F). A capacitor has a capacitance of 1 Farad when 1 Coulomb of charge causes a potential difference of 1 Volt across its plates: q = C · V, i(t) = C · (dv/dt). Energy stored in electric field: W = 1/2 · C · V².",
          "Capacitors Series Combination: In series, all capacitors carry the exact same charge Q while voltage divides (V = V1 + V2). Since V = Q/C: 1/C_series = 1/C1 + 1/C2 + ... + 1/Cn. For two capacitors: C_series = (C1 · C2) / (C1 + C2).",
          "Capacitors Parallel Combination: In parallel, all capacitors experience the exact same voltage V while charges add (Q = Q1 + Q2 = C1·V + C2·V). Therefore, equivalent parallel capacitance is the direct algebraic sum: C_parallel = C1 + C2 + ... + Cn."
        ]
      },
      {
        id: "transformers_why_required",
        title: "3. Transformers: Step-Up and Step-Down Symbols & Why Required",
        summary: "A transformer is a static electromagnetic device transferring electrical energy between two or more circuits through mutual induction without changing frequency.",
        keyPoints: [
          "Symbols: Two parallel coils separated by two solid lines representing the laminated iron/ferrite magnetic core.",
          "Step-Up Transformer: Has more secondary turns than primary turns (Ns > Np). It raises voltage (Vs > Vp) while decreasing current proportionally (Is < Ip).",
          "Step-Down Transformer: Has fewer secondary turns than primary turns (Ns < Np). It reduces high primary voltage to safe low secondary voltage (Vs < Vp) while increasing available current (Is > Ip).",
          "Transformation Equation: k = Ns / Np = Vs / Vp = Ip / Is (assuming ideal 100% efficiency, Vp·Ip = Vs·Is).",
          "Why Required in Electronics & Electrical Systems: (1) Voltage Stepping: Enables stepping up AC voltage to hundreds of kilovolts for low-loss power transmission over hundreds of miles, and stepping down to 230V for domestic supply, and further down to 5V/12V for semiconductor rectifiers; (2) Galvanic Safety Isolation: Completely breaks electrical DC continuity between hazardous AC mains and user-accessible chassis; (3) Impedance Matching: Matches the internal resistance of a source to a load for maximum power transfer according to Zp = (Np/Ns)² · Zs (e.g. audio amplifier output transformer matching 10kΩ tube impedance to an 8Ω speaker)."
        ],
        circuitRef: "transformers_circuit"
      },
      {
        id: "voltage_and_current_sources",
        title: "4. Concept of Voltage and Current Sources: Symbols & Basic Concept",
        summary: "Electrical sources supply energy to networks and are classified as independent or dependent, ideal or practical.",
        keyPoints: [
          "Voltage Source Concept: An energy source that maintains a specified potential difference across its terminals regardless of the current drawn by external load.",
          "Ideal vs Practical Voltage Source: An ideal voltage source maintains V_terminal = Vs with zero internal resistance (rs = 0). A practical voltage source has a small internal resistance rs in series with Vs, causing terminal voltage to decrease under heavy load current: V_terminal = Vs - I · rs.",
          "Current Source Concept: An energy source that forces a constant current to flow through its terminals regardless of the voltage across them.",
          "Ideal vs Practical Current Source: An ideal current source provides constant current Is with infinite internal shunt resistance (rsh = ∞). A practical current source has a finite parallel shunt resistance rsh, causing delivered load current to drop as load voltage increases: I_load = Is - (V_load / rsh).",
          "Source Transformation: A practical voltage source (Vs in series with rs) can be converted into an equivalent practical current source (Is = Vs / rs in parallel with rsh = rs)."
        ]
      },
      {
        id: "kirchhoff_laws_text_and_math",
        title: "5. Kirchhoff’s Current and Voltage Laws: In Text & Mathematical Equation",
        summary: "Formulated in 1845 by Gustav Kirchhoff, these two fundamental physical laws describe conservation of charge and energy in electrical circuits.",
        keyPoints: [
          "Kirchhoff's Current Law (KCL) in Text: 'The algebraic sum of all electric currents entering and exiting any node or junction in an electrical circuit is identically equal to zero at every instant of time.' Alternatively: 'The total current entering any node is equal to the total current leaving that node.'",
          "KCL Mathematical Equation: Σ(k=1 to n) I_k = 0  or  Σ I_in = Σ I_out.",
          "Physical Basis of KCL: Based directly on the Law of Conservation of Electric Charge (electric charge cannot accumulate or disappear at an infinitesimally small junction point in lumped circuits).",
          "Kirchhoff's Voltage Law (KVL) in Text: 'The algebraic sum of all potential differences (voltages), including electromotive forces of sources and voltage drops across passive components, around any closed loop or mesh in an electric circuit is equal to zero.' Alternatively: 'In any closed loop, the sum of voltage rises is equal to the sum of voltage drops.'",
          "KVL Mathematical Equation: Σ(k=1 to m) V_k = 0  or  Σ V_sources = Σ (I · R_drops).",
          "Physical Basis of KVL: Based directly on the Law of Conservation of Energy (the work done in moving a unit charge around any closed loop in an electrostatic conservative field is zero)."
        ],
        circuitRef: "kirchhoff_laws_circuit"
      },
      {
        id: "concept_of_impedance",
        title: "6. Concept of Impedance & Equivalent Impedance of Series & Parallel R-C, R-L, and R-L-C",
        summary: "In alternating current (AC) sinusoidal steady-state analysis, Ohm's law is generalized into complex Impedance Z = R + jX.",
        keyPoints: [
          "Concept of Impedance (Z): Total opposition that a circuit element or network presents to the flow of alternating sinusoidal electric current at frequency f. Complex quantity measured in Ohms (Ω): Z = R + jX.",
          "Reactance & Phase Relationships: Inductive Reactance XL = 2πfL = ωL (voltage leads current by 90°). Capacitive Reactance Xc = 1/(2πfC) = 1/(ωC) (current leads voltage by 90°). Net reactance X = XL - Xc.",
          "Series & Parallel R-C Combinations: Series R-C gives Z_series = R - jXc = √[R² + (1/ωC)²] ∠ -tan⁻¹(1/ωCR) with leading current (cos θ = R/|Zs|). Parallel R-C gives admittance Y_p = 1/R + jωC and equivalent impedance magnitude |Z_p| = (R · Xc) / √[R² + Xc²].",
          "Series & Parallel R-L Combinations: Series R-L gives Z_series = R + jXL = √[R² + (ωL)²] ∠ +tan⁻¹(ωL/R) with lagging current (cos θ = R/|Zs|). Parallel R-L gives admittance Y_p = 1/R - j(1/ωL) and equivalent impedance magnitude |Z_p| = (R · XL) / √[R² + XL²].",
          "Series R-L-C Combination & Resonance: Z_series = R + j(XL - Xc) = √[R² + (ωL - 1/ωC)²] ∠ θ. At series resonance (XL = Xc): net reactance is zero, impedance is minimum (Z_0 = R), circuit current is maximum and in phase with voltage (cos θ = 1, unity PF): f₀ = 1 / (2π√[LC]).",
          "Parallel R-L-C Combination & Anti-Resonance: Admittance Y_parallel = 1/R + j(ωC - 1/ωL). At parallel resonance (ωC = 1/ωL), reactive line currents cancel. The circuit presents maximum dynamic impedance Zd = L / (C · R) and line current drawn from the supply is minimum."
        ],
        circuitRef: "rc_impedance_circuit"
      }
    ],
    formulas: [
      {
        name: "Resistors in Series & Parallel",
        formula: "R_series = R₁ + R₂ + ... + R_n  |  1/R_parallel = 1/R₁ + 1/R₂ + ... + 1/R_n",
        explanation: "Equivalent resistance: series adds directly, parallel combines inversely. For two resistors: R_parallel = (R₁·R₂)/(R₁+R₂).",
        unit: "Ohms (Ω)"
      },
      {
        name: "Capacitors in Series & Parallel",
        formula: "1/C_series = 1/C₁ + 1/C₂ + ...  |  C_parallel = C₁ + C₂ + ... + C_n",
        explanation: "Equivalent capacitance: series combines reciprocally, parallel adds directly (opposite of resistors).",
        unit: "Farads (F, μF, nF, pF)"
      },
      {
        name: "Inductors in Series & Parallel",
        formula: "L_series = L₁ + L₂ + ... + L_n  |  1/L_parallel = 1/L₁ + 1/L₂ + ...",
        explanation: "Equivalent inductance: series adds directly, parallel combines inversely (identical to resistors).",
        unit: "Henries (H, mH, μH)"
      },
      {
        name: "Transformer Transformation Ratio",
        formula: "k = N_s / N_p = V_s / V_p = I_p / I_s",
        explanation: "Turns ratio relationship linking primary and secondary voltages and currents in ideal transformers.",
        unit: "Dimensionless ratio"
      },
      {
        name: "Kirchhoff's Current Law (KCL)",
        formula: "Σ I_in = Σ I_out  or  Σ_{k=1}^n I_k = 0",
        explanation: "Mathematical equation expressing Conservation of Electric Charge at any circuit node.",
        unit: "Amperes (A)"
      },
      {
        name: "Kirchhoff's Voltage Law (KVL)",
        formula: "Σ V_sources - Σ (I · R_drops) = 0  or  Σ_{k=1}^m V_k = 0",
        explanation: "Mathematical equation expressing Conservation of Energy around any closed circuit loop.",
        unit: "Volts (V)"
      },
      {
        name: "Equivalent Impedance of Series & Parallel R-C",
        formula: "Series: Z_s = R - j X_C = √[R² + (1/ωC)²] ∠ -tan⁻¹(1/ωCR)  |  Parallel: Z_p = (R · X_C)/√[R² + X_C²]",
        explanation: "In series RC, current leads voltage by angle |θ|; in parallel RC, equivalent impedance magnitude is Zp = (R·Xc)/√[R² + Xc²].",
        unit: "Ohms (Ω)"
      },
      {
        name: "Equivalent Impedance of Series & Parallel R-L",
        formula: "Series: Z_s = R + j X_L = √[R² + (ωL)²] ∠ +tan⁻¹(ωL/R)  |  Parallel: Z_p = (R · X_L)/√[R² + X_L²]",
        explanation: "In series RL, voltage leads current by angle θ; in parallel RL, equivalent impedance magnitude is Zp = (R·XL)/√[R² + XL²].",
        unit: "Ohms (Ω)"
      },
      {
        name: "Equivalent Impedance of Series R-L-C",
        formula: "Z_series = R + j(X_L - X_C) = √[ R² + (2πfL - 1/(2πfC))² ] ∠θ",
        explanation: "Complex impedance of series RLC where θ = tan⁻¹[(XL - Xc)/R] and cos θ = R/|Z| is circuit power factor.",
        unit: "Ohms (Ω)"
      },
      {
        name: "Equivalent Impedance of Parallel R-L-C",
        formula: "Z_parallel = 1 / Y = 1 / √[ (1/R)² + (2πfC - 1/(2πfL))² ]",
        explanation: "Admittance Y = 1/R + j(ωC - 1/ωL). At parallel resonance, dynamic impedance reaches maximum: Z_dynamic = L / (C · R).",
        unit: "Ohms (Ω)"
      },
      {
        name: "Resonance Frequency (R-L-C)",
        formula: "f₀ = 1 / (2 · π · √[L · C])",
        explanation: "Frequency where XL = Xc (ωL = 1/ωC). In series, Z is minimum (Z=R); in parallel, Z is maximum (Zd=L/CR).",
        unit: "Hertz (Hz)"
      }
    ],
    examQuestions: [
      {
        id: "q_comp_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Kirchhoff's Laws",
        question: "State Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) in text and write down their mathematical equations. Which physical conservation principles do they represent?",
        answerHint: "KCL in text: The algebraic sum of all currents entering and leaving any node or junction in an electrical circuit is identically zero at every instant of time: Σ I_in = Σ I_out (or Σ I_k = 0). Represents the Conservation of Electric Charge. KVL in text: The algebraic sum of all potential differences (EMFs and IR voltage drops) around any closed circuit loop or mesh is zero: Σ V_sources - Σ (I · R_drops) = 0 (or Σ V_k = 0). Represents the Conservation of Energy."
      },
      {
        id: "q_comp_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Circuit Sources & Components",
        question: "Distinguish between an ideal voltage source and a practical voltage source. Draw their standard circuit symbols and state their internal resistance values.",
        answerHint: "An ideal voltage source maintains a constant terminal voltage regardless of the current drawn, having zero internal resistance (rs = 0). A practical voltage source has a small internal resistance rs in series with the ideal voltage generator: V_terminal = Vs - I·rs. As load current increases, terminal voltage drops due to internal voltage drop."
      },
      {
        id: "q_comp_3",
        year: "CU 2023",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "AC Reactance & Units",
        question: "Define Inductive Reactance (XL) and Capacitive Reactance (Xc) with their SI units. Explain how each varies with frequency f.",
        answerHint: "Inductive Reactance XL = 2πfL = ωL: Opposes AC current in inductors due to self-induced counter-EMF. Measured in Ohms (Ω). Varies directly proportional to frequency (XL ∝ f; at f = 0 DC, XL = 0). Capacitive Reactance Xc = 1/(2πfC) = 1/(ωC): Opposes AC current in capacitors due to stored charge potential. Measured in Ohms (Ω). Varies inversely with frequency (Xc ∝ 1/f; at f = 0 DC, Xc = ∞, acting as open circuit)."
      },
      {
        id: "q_comp_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Capacitors & Combinations",
        question: "Two capacitors C1 = 4 μF and C2 = 12 μF are connected first in series and then in parallel across a 100 V DC power supply. (a) Derive the equivalent capacitance formulas for series and parallel combinations. (b) Calculate the equivalent capacitance and total stored energy for both configurations.",
        answerHint: "(a) Series: 1/C_eq = 1/C1 + 1/C2 → C_series = (C1·C2)/(C1 + C2). Charges are equal (Q = Q1 = Q2), voltages add (V = V1 + V2). Parallel: C_parallel = C1 + C2. Voltages are equal (V1 = V2 = V), charges add (Q = Q1 + Q2). (b) Calculations: Series: C_series = (4 × 12)/(4 + 12) = 48/16 = 3 μF. Stored Energy W_series = 1/2 · C_eq · V² = 0.5 × 3×10⁻⁶ × 100² = 0.015 Joules (15 mJ). Parallel: C_parallel = 4 + 12 = 16 μF. Stored Energy W_parallel = 1/2 × 16×10⁻⁶ × 100² = 0.08 Joules (80 mJ)."
      },
      {
        id: "q_comp_5",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Transformers",
        question: "Draw the standard circuit symbols for Step-Up and Step-Down transformers. State three essential reasons why transformers are required in electrical and electronic circuits. Why can a transformer not operate on DC?",
        answerHint: "Symbols: Step-up has Ns > Np (more secondary turns); Step-down has Ns < Np. Why Required: (1) Voltage level conversion (stepping up for long-distance power grid transmission, stepping down 230V mains to 5V/12V DC for ICs); (2) Galvanic Safety Isolation (prevents electric shock by isolating mains ground from secondary); (3) Impedance Matching (maximum power transfer Zp = (Np/Ns)² · Zs). DC Limitation: Faraday's law of electromagnetic induction states that induced EMF e = -N(dΦ/dt). On DC, current is constant, rate of change of flux dΦ/dt = 0, so no EMF is induced. Moreover, DC resistance of windings is very low (pure copper), causing massive DC current that burns the primary winding."
      },
      {
        id: "q_comp_6",
        year: "CU 2024",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "RLC Impedance & Resonance",
        question: "A series R-L-C circuit consists of a resistor R = 30 Ω, an inductor L = 100 mH, and a capacitor C = 20 μF connected across a 230 V, 50 Hz sinusoidal AC supply. (a) Derive the expression for the equivalent impedance Z of the circuit and sketch the impedance triangle; (b) Calculate inductive reactance XL, capacitive reactance Xc, and total impedance Z; (c) Find circuit current I and power factor cos θ; (d) Determine the resonant frequency f₀.",
        answerHint: "(a) Z = R + j(XL - Xc) = |Z| ∠θ, where |Z| = √[R² + (ωL - 1/ωC)²] and phase angle θ = tan⁻¹[(XL - Xc)/R]. Power factor is cos θ = R/|Z|. (b) ω = 2π × 50 = 314.16 rad/s. XL = ωL = 314.16 × 0.10 = 31.42 Ω. Xc = 1/(ωC) = 1 / (314.16 × 20×10⁻⁶) = 159.15 Ω. Net Reactance X = XL - Xc = 31.42 - 159.15 = -127.73 Ω (Capacitive). Impedance |Z| = √[30² + (-127.73)²] = √[900 + 16314.96] = √17214.96 = 131.21 Ω. (c) Circuit Current I = V / |Z| = 230 / 131.21 = 1.753 A. Power Factor cos θ = R / |Z| = 30 / 131.21 = 0.2286 (Leading). (d) Resonant Frequency: f₀ = 1 / (2π√[LC]) = 1 / (2π√[0.1 × 20×10⁻⁶]) = 1 / (2π × 1.414×10⁻³) = 1 / (8.886×10⁻⁴) ≈ 112.54 Hz."
      }
    ],
    recommendedBooks: [
      "Foundations of Analog and Digital Electronic Circuits - Anant Agarwal & Jeffrey Lang (Morgan Kaufmann / MIT)",
      "Electric Circuits - Joseph A. Edminister & Mahmood Nahvi (Schaum's Outline Series, McGraw-Hill)",
      "Network Analysis - M. E. Van Valkenburg (Prentice Hall of India)",
      "Introductory Circuit Analysis - Robert L. Boylestad (Pearson Education)",
      "CU IDC Electronics (ELTD) Syllabus & Regulations Circular (CCF-2022)"
    ]
  },

  // 2. Semiconductor Devices and Circuits
  {
    id: "semiconductor_devices_circuits",
    slug: "semiconductor-devices-circuits",
    title: "Semiconductor Devices and Circuits",
    shortTitle: "Semiconductors & Diodes",
    semester: "sem1",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Semiconductor Devices and Circuits",
    officialSyllabus: "Intrinsic and Extrinsic Semiconductors, Direct and Indirect Bandgap Semiconductors, Basic Concept of P-N Junction, P-N Junction Diode, Zener Diode, Solar Cell, LED and their I-V Characteristics, Use of Diode as Half-Wave and Full-Wave (Center Tapped) Rectifier.",
    overview: "Covers intrinsic and extrinsic semiconductors, direct and indirect bandgap semiconductors, basic concept of P-N junction, P-N junction diode, Zener diode, Solar Cell, LED and their I-V characteristics, and use of diode as half-wave and full-wave (center tapped) rectifier.",
    learningObjectives: [
      "Understand energy bands, Fermi-Dirac statistics, and carrier concentrations (electrons n and holes p).",
      "Explain P-N junction barrier potential, depletion layer width variation, and Shockley equation.",
      "Calculate rectifier metrics: rectification efficiency (η), ripple factor (γ), Form factor, and Peak Inverse Voltage (PIV).",
      "Analyze the role of shunt capacitor filters in smoothing pulsating DC output.",
      "Design a Zener diode voltage regulator circuit to maintain steady DC output against line and load variations."
    ],
    symbols: [
      {
        name: "P-N Junction Diode",
        standard: "IEEE Std 315",
        description: "Unidirectional semiconductor device conducting heavily when forward biased (Anode > Cathode by Vγ) and blocking current when reverse biased.",
        symbolType: "diode",
        terminalNames: ["Anode (p-type)", "Cathode (n-type)"],
        keyFormula: "I = I0 · (e^(V / ηVT) - 1)",
        specs: "1N4007 (1A, 1000V PIV), 1N4148 (Fast Switching)"
      },
      {
        name: "Zener Diode",
        standard: "IEEE Std 315",
        description: "Heavily doped P-N junction engineered to operate safely in the reverse breakdown region at a sharp, stable breakdown voltage Vz.",
        symbolType: "zener",
        terminalNames: ["Anode (+)", "Cathode (-)"],
        keyFormula: "Vout = Vz (when Vin > Vz and Iz,min ≤ Iz ≤ Iz,max)",
        specs: "BZX55C5V1 (5.1V Zener), 1N4733A (5.1V 1W)"
      }
    ],
    circuits: [
      {
        id: "pn_junction_iv_characteristic",
        title: "I-V Characteristics of P-N Junction Diode (Silicon & Germanium)",
        subtitle: "Complete 4-quadrant forward and reverse bias curves, cut-in knee voltage, and Shockley behavior.",
        description: "Experimental and theoretical V-I characteristic curve of a semiconductor P-N junction diode under forward bias (exponential diffusion current above cut-in voltage Vγ = 0.7V for Si and 0.3V for Ge) and reverse bias (minority carrier reverse saturation current I0 and reverse breakdown).",
        circuitType: "Semiconductor Diode Characteristic Curves & Test Setup",
        components: [
          "P-N Junction Diode (1N4007 Silicon / OA79 Germanium)",
          "Regulated Variable DC Power Supply (0 - 30V)",
          "Series Current-Limiting Resistor (Rs = 1 kΩ)",
          "Precision DC Milliammeter (0 - 100 mA for Forward Bias)",
          "Precision DC Microammeter (0 - 100 μA for Reverse Bias)",
          "High-Impedance DC Voltmeter (0 - 2V / 0 - 50V)"
        ],
        keyOperation: [
          "Forward Bias Region (VF > 0): When the p-side (anode) is connected to the positive terminal and n-side (cathode) to negative, the applied electric field opposes the built-in barrier field, shrinking the depletion width W.",
          "Cut-In / Knee Voltage (Vγ or VK): For VF < Vγ, forward current is negligibly small. Once VF exceeds the knee voltage (0.7V for Silicon, 0.3V for Germanium), the barrier is overcome and majority carriers cross in large numbers, causing current IF to increase exponentially according to Shockley's equation.",
          "Dynamic / AC Resistance: In the steep forward conduction region, dynamic resistance is rf = ΔVF / ΔIF = (η · VT) / IF ≈ 26 mV / IF (for η = 1 at 300K). Typically rf is very low (10 Ω - 30 Ω).",
          "Reverse Bias Region (VR > 0): Connecting positive terminal to n-side and negative terminal to p-side widens the depletion layer and raises the barrier potential to (V0 + VR). Majority carrier diffusion is completely blocked.",
          "Reverse Saturation Current (I0): Only thermally generated minority carriers (electrons in p-side, holes in n-side) can cross the junction. This results in an extremely small, almost constant reverse saturation current I0 (nanoamperes for Si, microamperes for Ge) that is practically independent of applied reverse voltage but doubles every 10°C temperature rise.",
          "Reverse Breakdown Region (VBR / VZ): At sufficiently high reverse voltage, high electric fields cause quantum mechanical tunneling (Zener breakdown) or avalanche carrier multiplication through impact ionization, causing a sharp, nearly vertical spike in reverse current."
        ],
        inputOutputRelation: "I = I0 · [exp(V / (η · VT)) - 1] where VT = kT/q ≈ 26 mV at 300K",
        formula: "Vγ(Si) = 0.7V · Vγ(Ge) = 0.3V · Dynamic rf = ΔVF/ΔIF ≈ 26mV/IF · Reverse I ≈ -I0",
        cuExamTip: "CU Frequent Exam Question: Draw the I-V characteristics of a P-N junction diode for both forward and reverse bias. Mark the cut-in voltage for Silicon and Germanium, reverse saturation current, and breakdown voltage."
      },
      {
        id: "half_wave_rectifier",
        title: "Half-Wave Rectifier Circuit with Transformer & Waveforms",
        subtitle: "Single diode circuit converting AC to pulsating DC during positive half-cycle only.",
        description: "A single P-N junction diode is connected in series with the secondary winding of a step-down transformer and load resistor RL. During the positive half-cycle of AC input, the diode is forward-biased and conducts current through RL. During the negative half-cycle, the diode is reverse-biased, completely cutting off current and withstanding peak inverse voltage PIV = Vm.",
        circuitType: "AC-DC Rectifier Power Supply",
        components: [
          "Step-down Transformer (230V to 12V RMS)",
          "P-N Junction Diode (1N4007)",
          "Load Resistor (RL)",
          "Oscilloscope Monitoring Probes"
        ],
        keyOperation: [
          "Positive Half-Cycle (0 to π): Transformer secondary top terminal is positive. Diode D is forward-biased (anode > cathode by Vγ ≈ 0.7V for Si), conducting current iL through RL. Output voltage is Vo ≈ Vm sin ωt - 0.7V.",
          "Negative Half-Cycle (π to 2π): Transformer secondary top terminal is negative. Diode D is reverse-biased and acts as an open circuit. Output current is zero and Vo = 0V.",
          "Average DC Output Voltage: Vdc = Vm / π ≈ 0.318 Vm, with average DC load current Idc = Im / π.",
          "RMS Output Voltage: Vrms = Vm / 2 = 0.5 Vm. The maximum theoretical rectification efficiency is η = Pdc / Pac = (0.406 / (1 + rf/RL)) ≈ 40.6%.",
          "Peak Inverse Voltage (PIV): During the negative half-cycle, the reverse-biased diode must withstand maximum reverse voltage PIV = Vm without breaking down.",
          "Ripple Factor: γ = √[(Vrms / Vdc)² - 1] = √[(π/2)² - 1] ≈ 1.21. Unwanted AC harmonic ripples dominate over the DC component, requiring large smoothing filters.",
          "Transformer Core Limitation: Unidirectional pulses cause net DC magnetization in the transformer core, resulting in DC core saturation and hysteretic losses."
        ],
        inputOutputRelation: "Vdc = Vm / π ≈ 0.318 Vm · Vrms = Vm / 2 = 0.5 Vm",
        formula: "Efficiency η = 40.6% · Ripple Factor γ = 1.21 · PIV = Vm · Ripple Freq fr = f (50 Hz)",
        cuExamTip: "CU Favorite Question: Why is a half-wave rectifier rarely used in commercial power supplies? (Answer: Low efficiency 40.6%, high ripple factor 1.21, low transformer utilization factor TUF = 0.287, and DC core saturation)."
      },
      {
        id: "center_tapped_full_wave_rectifier",
        title: "Full-Wave Center-Tapped Transformer Rectifier & Waveforms",
        subtitle: "Two-diode full-wave rectifier utilizing center-tapped secondary winding for alternate half-cycle conduction.",
        description: "Employs a center-tapped transformer delivering two equal secondary voltages (+vs and -vs) 180° out of phase relative to the central ground tap. Two diodes conduct alternately during successive half-cycles, steering current through the common load resistor RL in the exact same downward direction throughout the entire 360° AC period.",
        circuitType: "AC-DC Rectifier Power Supply",
        components: [
          "Center-Tapped Step-Down Transformer (230V to 12V-0-12V)",
          "2 Diodes (D1, D2 - 1N4007)",
          "Load Resistor (RL)",
          "Center-Tap Common Ground Rail"
        ],
        keyOperation: [
          "Positive Half-Cycle (0 to π): Terminal A is positive with respect to CT, while Terminal B is negative. Diode D1 is forward-biased (conducts) and D2 is reverse-biased (OFF). Current flows along A → D1 → RL (downwards) → CT.",
          "Negative Half-Cycle (π to 2π): Terminal B is positive with respect to CT, while Terminal A is negative. Diode D2 is forward-biased (conducts) and D1 is reverse-biased (OFF). Current flows along B → D2 → RL (downwards in the exact same direction!) → CT.",
          "Continuous DC Output: Output voltage pulses at twice the mains frequency (fr = 2f = 100 Hz for 50 Hz mains), making harmonic ripples significantly easier to smooth with smaller capacitors.",
          "Average DC Output Voltage: Vdc = 2 · Vm / π ≈ 0.636 Vm (exactly double that of half-wave), with average load current Idc = 2 · Im / π.",
          "RMS Output Voltage: Vrms = Vm / √2 ≈ 0.707 Vm. Maximum theoretical rectification efficiency is η = 81.2% (twice of half-wave).",
          "Peak Inverse Voltage (PIV): When D1 is conducting at peak +Vm, its cathode is at +Vm; simultaneously, D2's anode is at -Vm. The reverse voltage across non-conducting D2 is Vm - (-Vm) = 2 · Vm. Diodes must have double PIV rating compared to bridge rectifier!",
          "Ripple Factor: γ = √[(Vrms / Vdc)² - 1] = √[(π² / 8) - 1] ≈ 0.482."
        ],
        inputOutputRelation: "Vdc = 2 · Vm / π ≈ 0.636 Vm · Vrms = Vm / √2 ≈ 0.707 Vm",
        formula: "Efficiency η = 81.2% · Ripple Factor γ = 0.482 · PIV = 2 Vm · Ripple Freq fr = 2f (100 Hz)",
        cuExamTip: "CU Question: Why does a Center-Tapped rectifier require diodes with PIV = 2Vm? (Answer: When D1 conducts at positive peak Vm, cathode is at +Vm while D2 anode is at -Vm; hence reverse voltage across D2 is Vm - (-Vm) = 2Vm)."
      },
      {
        id: "bridge_rectifier",
        title: "Full-Wave Bridge Rectifier with Shunt Capacitor Filter",
        subtitle: "Four-diode bridge configuration converting bidirectional AC into smooth unidirectional DC with PIV = Vm.",
        description: "Four diodes arranged in a closed bridge loop conduct in alternating diagonal pairs (D1-D2 during positive half-cycle, D3-D4 during negative half-cycle). Current through the load RL flows in the exact same downward direction during both half-cycles without requiring a bulky, expensive center-tapped transformer. A parallel shunt filter capacitor C smooths the pulsating DC output.",
        circuitType: "AC-DC Converter Power Supply",
        components: [
          "Standard Step-Down Transformer (230V to 12V RMS)",
          "4 Rectifier Diodes (D1, D2, D3, D4 - 1N4007)",
          "Shunt Smoothing Capacitor (C = 470 μF / 1000 μF Electrolytic)",
          "Load Resistor (RL = 1 kΩ)"
        ],
        keyOperation: [
          "Positive Half-Cycle (0 to π): Upper AC secondary terminal is positive, lower terminal is negative. Diodes D1 and D2 are forward-biased and conduct in series with RL; diodes D3 and D4 are reverse-biased (OFF).",
          "Negative Half-Cycle (π to 2π): Lower AC secondary terminal is positive, upper terminal is negative. Diodes D3 and D4 are forward-biased and conduct in series with RL; diodes D1 and D2 are reverse-biased (OFF).",
          "Load Current: Unidirectional during both half-cycles into the +Vdc bus and returning via GND rail, producing full-wave rectified DC pulsating at 2·f (100 Hz for 50 Hz mains).",
          "Capacitor Filter Operation: Capacitor C charges rapidly to peak Vm through forward-biased diodes during conduction intervals; when source voltage drops below capacitor voltage, diodes turn OFF and C discharges slowly through RL (time constant τ = RL·C >> T/2), converting pulsating DC into smooth DC with minor ripple.",
          "Peak Inverse Voltage (PIV): PIV = Vm (half that of the center-tapped rectifier), allowing use of smaller, less expensive diodes with lower reverse breakdown ratings.",
          "Ripple Factor with Filter: γ ≈ 1 / (4 · √3 · f · C · RL), where peak-to-peak ripple voltage is Vr(p-p) = Idc / (2 · f · C)."
        ],
        inputOutputRelation: "Vdc = 2 · Vm / π ≈ 0.636 Vm (without filter) · Vdc ≈ Vm - Idc / (4 · f · C) (with filter)",
        formula: "Efficiency η = 81.2% · PIV = Vm · Ripple Factor (unfiltered) γ = 0.482 · Ripple Factor (filtered) γ = 1 / (4√3 f C RL)",
        cuExamTip: "CU Model Question: State two distinct engineering advantages of Bridge Rectifier over Center-Tapped: (1) Does not require costly, heavy center-tapped transformer; (2) PIV per diode is only Vm (compared to 2Vm for center-tapped)."
      },
      {
        id: "zener_iv_characteristics",
        title: "Zener Diode 4-Quadrant I-V Characteristics & Shunt Voltage Regulator",
        subtitle: "Forward conduction knee, sharp reverse Zener/Avalanche breakdown, IZK to IZM, and line/load regulation.",
        description: "A heavily doped P-N junction diode specifically engineered to operate reliably in the reverse breakdown regime. Displays normal forward conduction (0.7V for Silicon) and an abrupt, vertical reverse current spike at breakdown voltage VZ. When connected in shunt with a load resistor RL behind a series current-limiting resistor RS, it maintains an unwavering load voltage Vout = VZ despite fluctuations in input line voltage Vin or variations in load current IL.",
        circuitType: "Voltage Regulator & Characteristic Bench",
        components: [
          "Zener Diode (BZX55C5V1 / 1N4733A 5.1V 1W)",
          "Unregulated DC Power Supply (Vin: 8V - 20V)",
          "Series Current-Limiting Resistor (RS = 220 Ω / 470 Ω)",
          "Variable Load Resistor (RL = 100 Ω - 5 kΩ)",
          "DC Milliammeter for Zener Current (IZ: 1 - 50 mA)",
          "DC Digital Voltmeter for Load Voltage (Vout)"
        ],
        keyOperation: [
          "4-Quadrant I-V Characteristics: (1) 1st Quadrant (Forward Bias): Behaves like an ordinary P-N junction diode with knee cut-in voltage Vγ ≈ 0.7V. (2) 3rd Quadrant (Reverse Bias): For VR < VZ, only tiny reverse leakage current flows. Once VR reaches breakdown voltage VZ, reverse current surges sharply while terminal voltage stays clamped at VZ.",
          "Operating Current Boundaries: Zener must operate between minimum knee current IZK (typically 1-5 mA to ensure operation beyond the rounded knee in the true vertical region) and maximum current IZM = Pmax / VZ (to prevent thermal destruction).",
          "Dynamic Zener Impedance (rz): The steep slope in breakdown defines dynamic resistance rz = ΔVZ / ΔIZ (typically 2 Ω - 10 Ω). Low rz guarantees superior voltage regulation.",
          "Line Regulation (Varying Vin, Constant RL): If input voltage Vin increases by ΔVin, the increase appears across series resistor RS as excess current ΔIS = ΔVin / RS. This excess current is absorbed entirely by the Zener diode (ΔIZ ≈ ΔIS) while load voltage remains firmly pinned to VZ.",
          "Load Regulation (Constant Vin, Varying RL): If load resistance RL decreases, load current IL increases. The Zener automatically decreases its own conduction current IZ by the exact same amount (ΔIZ = - ΔIL), keeping total supply current IS through RS constant and preserving constant output voltage Vout = VZ.",
          "Series Resistor Design Formula: RS,max = (Vin,min - VZ) / (IL,max + IZ,min) and RS,min = (Vin,max - VZ) / (IL,min + IZ,max)."
        ],
        inputOutputRelation: "Vout = VZ = constant · IS = IZ + IL · RS = (Vin - VZ) / (IZ + IL)",
        formula: "Vout ≈ VZ · Dynamic rz = ΔVZ / ΔIZ ≈ 2-10 Ω · Max Power PZM = VZ · IZM · RS = (Vin - VZ)/(IZ + IL)",
        cuExamTip: "CU Frequent Exam Question: Draw the I-V characteristics of a Zener diode and explain its working as a shunt voltage regulator. Explain how it regulates against line and load variations."
      }
    ],
    theoreticalSections: [
      {
        id: "what_is_semiconductor",
        title: "What is a Semiconductor: Definition, Properties & Energy Band Model",
        summary: "A semiconductor is a solid crystalline material whose electrical resistivity lies between that of a conductor (metals like Copper with resistivity ~10⁻⁸ Ω·m) and an insulator (fused quartz, glass with resistivity >10¹² Ω·m), typically falling in the range of 10⁻⁴ to 10⁴ Ω·m. Semiconductors are characterized by a negative temperature coefficient of resistance (resistance decreases as temperature rises, α < 0), tetrahedral covalent crystal lattice, and a narrow forbidden energy bandgap (Eg ≈ 1.12 eV for Silicon, 0.67 eV for Germanium at 300K).",
        keyPoints: [
          "Intermediate Resistivity & Dual Carriers: Electrical resistivity is intermediate between metals and insulators. While current in metals is carried exclusively by free conduction electrons, current in semiconductors is carried by two complementary types of charge carriers: negative free electrons (e⁻) in the conduction band and positive vacancies termed holes (h⁺) in the valence band.",
          "Energy Band Theory & Forbidden Gap (Eg): In solids, discrete atomic energy levels broaden into energy bands. The valence band (occupied by valence electrons) is separated from the higher conduction band by a forbidden energy gap Eg where no electron energy states can exist. At absolute zero (0 K), the valence band is completely full and conduction band is completely empty; the semiconductor behaves as a perfect insulator with zero conductivity.",
          "Negative Temperature Coefficient of Resistance (α < 0): In metals, thermal vibrations scatter electrons, increasing resistance with temperature (α > 0). In semiconductors, increasing temperature imparts thermal kinetic energy that breaks covalent bonds, exciting electrons across Eg into the conduction band; the exponential increase in free carrier concentration n(T) heavily overwhelms lattice scattering, causing resistivity to drop sharply as temperature rises.",
          "Tetravalent Crystalline Lattice: Standard elemental semiconductors belong to Group IV of the periodic table: Silicon (Si, Z=14, atomic configuration 1s² 2s² 2p⁶ 3s² 3p²) and Germanium (Ge, Z=32, configuration [Ar] 3d¹⁰ 4s² 4p²). Each atom has 4 valence electrons and forms four strong, directed covalent bonds with neighbouring atoms in a diamond-cubic tetrahedral structure."
        ]
      },
      {
        id: "intrinsic_extrinsic_semiconductors",
        title: "Intrinsic and Extrinsic Semiconductors with Real-World Examples",
        summary: "Semiconductors are fundamentally classified into intrinsic (chemically pure crystals with thermally generated carrier pairs) and extrinsic (chemically doped crystals engineered with controlled impurity atoms). Because intrinsic semiconductors possess very low and uncontrollable carrier concentrations at room temperature, all modern electronic devices (diodes, BJTs, MOSFETs, ICs) are fabricated using extrinsic semiconductors.",
        keyPoints: [
          "Intrinsic Semiconductor Definition & Behavior: An intrinsic semiconductor is an extremely pure semiconductor crystal containing negligible foreign impurity atoms (impurity concentration < 1 part in 10¹⁰). At 0 K, it is an insulator. At room temperature (300 K), thermal energy breaks a minute fraction of covalent bonds, creating equal numbers of free electrons in the conduction band and holes in the valence band: n = p = ni (where ni is the intrinsic carrier concentration).",
          "Intrinsic Real-World Examples: Pure monocrystalline Silicon (Si, ni ≈ 1.5 × 10¹⁰ cm⁻³ at 300 K) and pure Germanium (Ge, ni ≈ 2.5 × 10¹³ cm⁻³ at 300 K). Because total atomic density of Silicon is ~5 × 10²² atoms/cm³, only about 1 out of every 3.3 trillion Silicon atoms is thermally ionized at room temperature, yielding very low conductivity (σ ≈ 4.3 × 10⁻⁶ S/cm) that is impractical for circuit design.",
          "Extrinsic Semiconductor Definition & Doping: An extrinsic semiconductor is produced by deliberately introducing a minute, precisely controlled quantity of specific trivalent or pentavalent impurity atoms into an intrinsic semiconductor lattice—a metallurgical process known as doping (typically 1 dopant atom per 10⁶ to 10⁸ Silicon atoms). Doping multiplies electrical conductivity by factors of 100,000 or more.",
          "N-Type Extrinsic Semiconductor Example: Pure Silicon crystal doped with pentavalent donor impurities such as Phosphorus (¹⁵P), Arsenic (³³As), or Antimony (⁵¹Sb). Four of the five valence electrons bond with Silicon, while the 5th electron is loosely bound and ionizes into the conduction band at room temperature, providing abundant free electrons.",
          "P-Type Extrinsic Semiconductor Example: Pure Silicon crystal doped with trivalent acceptor impurities such as Boron (⁵B), Gallium (³¹Ga), or Indium (⁴⁹In). Three valence electrons form bonds with neighboring Silicon atoms, leaving one bond deficient; an electron from an adjacent bond readily hops in to complete it, creating a positive hole in the valence band.",
          "Law of Mass Action: Under thermal equilibrium, regardless of doping concentration or type, the product of electron concentration n and hole concentration p is strictly constant at a given temperature: n · p = ni²(T)."
        ]
      },
      {
        id: "n_type_semiconductor_carriers",
        title: "N-Type Semiconductor: Doping Mechanism, Majority & Minority Carriers",
        summary: "In an n-type semiconductor, conduction is dominated by negative electron carriers introduced by pentavalent donor impurities. The presence of donor energy levels (Ed) near the conduction band edge enables full ionization at room temperature, establishing free electrons as majority carriers while suppressing thermal hole concentration to minority levels through electron-hole recombination.",
        keyPoints: [
          "Donor Energy Level (Ed) & Ionization: Pentavalent donor atoms (e.g., Phosphorus) have 5 valence electrons. The 5th electron orbits the donor nucleus in a hydrogen-like orbit with small ionization energy ΔEd = Ec - Ed ≈ 0.045 eV in Si (0.01 eV in Ge). Since thermal energy at room temperature is kT ≈ 0.026 eV, virtually 100% of donor atoms are thermally ionized at 300 K, releasing their 5th electron to the conduction band. The donor atom itself becomes an immobile, positively charged core ion (Nd⁺).",
          "Majority Carriers in N-Type: Free conduction band electrons (e⁻) are the **majority carriers** because their concentration is determined by the heavy donor doping density: n ≈ Nd (typically 10¹⁶ to 10¹⁸ electrons/cm³). Majority carriers carry virtually all the forward drift and diffusion current.",
          "Minority Carriers in N-Type: Valence band holes (h⁺) are the **minority carriers**. They arise exclusively from spontaneous thermal breaking of Silicon-Silicon covalent bonds. Because the electron density n ≈ Nd is enormous, the recombination rate increases drastically, driving down hole concentration in accordance with the Law of Mass Action: p = ni² / Nd << n (e.g., if Nd = 10¹⁶ cm⁻³ in Si where ni = 1.5 × 10¹⁰ cm⁻³, minority hole density is p = 2.25 × 10⁴ cm⁻³).",
          "P-Type Comparison (Mirror Image): In p-type semiconductor doped with acceptor concentration Na, holes are the **majority carriers** (p ≈ Na) and electrons are the **minority carriers** (n = ni² / Na << p).",
          "Crucial Physical Differences: Majority carriers determine on-state conductivity, ohmic drop, and device current rating. Minority carriers determine reverse saturation leakage current (I0 in diodes), reverse breakdown, and carrier storage/switching speed in bipolar junction transistors.",
          "Total Crystal Electrical Neutrality: Despite having millions of times more negative electrons than positive holes, the bulk n-type crystal remains strictly electrically neutral: Total positive charge = Total negative charge: q(p + Nd⁺) = q(n + Na⁻) → n ≈ Nd."
        ]
      },
      {
        id: "direct_indirect_semiconductors",
        title: "Direct and Indirect Bandgap Semiconductors: E-k Diagram & Light Emission",
        summary: "The quantum mechanical alignment of crystal momentum (wave vector k) between the conduction band minimum and valence band maximum on an energy-momentum (E-k) diagram divides semiconductors into direct and indirect bandgap types. This distinction determines whether electron-hole recombination can directly emit light (photons) or must dissipate energy into crystal lattice vibrations (phonons/heat).",
        keyPoints: [
          "Crystal Momentum & The E-k Diagram: In a periodic crystalline lattice, electron energy E depends on the crystal wave vector k (where crystal momentum is p = ħ·k). Band extrema determine the nature of optical absorption and emission transitions.",
          "Direct Bandgap Semiconductor Definition: The minimum energy state of the conduction band and the maximum energy state of the valence band align at the exact same crystal wave vector (typically k = 0, the Γ-point of the Brillouin zone).",
          "Direct Recombination Mechanism: When an excited electron in the conduction band drops to recombine with a hole in the valence band, crystal momentum is already conserved (Δk = 0). Conservation of energy requires the released energy Eg to be emitted directly as a single photon of light: hν = Eg, with wavelength λ = hc / Eg ≈ 1.24 / Eg(eV) μm. The radiative recombination probability is extremely high, with short carrier lifetimes (~1 to 10 nanoseconds).",
          "Direct Semiconductor Examples & Uses: **Gallium Arsenide (GaAs, Eg = 1.42 eV)**, **Indium Phosphide (InP, Eg = 1.34 eV)**, **Gallium Nitride (GaN, Eg = 3.4 eV)**. Applications: Light Emitting Diodes (LEDs), semiconductor laser diodes, optocouplers, infrared remote transmitters, and high-efficiency multi-junction solar cells.",
          "Indirect Bandgap Semiconductor Definition: The conduction band minimum and the valence band maximum occur at different values of crystal wave vector (kc,min ≠ kv,max).",
          "The Phonon Requirement in Indirect Semiconductors: Photons carry negligible momentum (pphoton = h / λ ≈ 0). Therefore, an electron at the conduction band minimum cannot directly drop into a valence band hole without violating the Law of Conservation of Crystal Momentum. Recombination requires a simultaneous three-particle collision: an electron, a hole, and a crystal lattice vibration quantum called a **phonon** to absorb or impart the momentum difference Δk = kc - kv.",
          "Why Silicon Cannot Make Efficient LEDs: Three-body quantum collisions are statistically rare. The radiative lifetime in indirect semiconductors is long (~10⁻³ s, 100,000 times slower than GaAs). Nearly all excited electrons recombine non-radiatively through deep-level crystal defects or Auger processes, releasing their bandgap energy as waste heat rather than light.",
          "Indirect Semiconductor Examples & Uses: **Silicon (Si, Eg = 1.12 eV)**, **Germanium (Ge, Eg = 0.67 eV)**, **Gallium Phosphide (GaP, Eg = 2.26 eV)**. Applications: Rectifier diodes, BJTs, MOSFETs, and ULSI microprocessors (Silicon dominates microelectronics due to abundant raw materials, mechanical robustness, and native insulating oxide SiO₂, but cannot serve as laser or LED sources)."
        ]
      },
      {
        id: "pn_junction_physics",
        title: "P-N Junction Formation, Depletion Layer & V-I Characteristics",
        summary: "When p-type and n-type semiconductors are metallurgically joined, majority electrons diffuse from n to p and holes diffuse from p to n. Uncompensated immobile ionized donor (Nd⁺) and acceptor (Na⁻) ions leave a space-charge depletion region establishing built-in barrier potential V0 (0.7V for Silicon, 0.3V for Germanium at 300K). The complete I-V characteristic exhibits exponential forward conduction above cut-in voltage Vγ and tiny minority reverse saturation current I0.",
        keyPoints: [
          "Depletion Region Formation: At the metallurgical junction, majority carrier diffusion leaves behind unneutralized immobile positive donor ions (Nd⁺) on the n-side and negative acceptor ions (Na⁻) on the p-side. This uncovered space-charge layer creates an internal built-in electric field (directed from n to p) that opposes further majority diffusion, establishing thermal equilibrium with barrier potential V0.",
          "Forward Bias (Anode > Cathode, VF > 0): The applied positive voltage opposes the built-in barrier potential, dramatically narrowing the depletion layer width W. When VF exceeds the cut-in knee voltage (Vγ ≈ 0.7V for Silicon, Vγ ≈ 0.3V for Germanium), the barrier is overcome and majority carriers diffuse across the junction in enormous numbers, yielding steep exponential forward current IF.",
          "Dynamic Forward Resistance (rf): In the forward conduction region above the knee, the slope of the I-V curve defines the dynamic / AC resistance: rf = ΔVF / ΔIF = (η · VT) / IF ≈ 26 mV / IF (at room temperature 300K). Typical forward resistance is very small (10 Ω to 30 Ω).",
          "Reverse Bias (Cathode > Anode, VR > 0): The applied voltage reinforces the built-in barrier field, widening the depletion region and creating an insurmountable barrier for majority carriers. Only thermally generated minority carriers (electrons in p-side, holes in n-side) are swept across the junction by the electric field.",
          "Reverse Saturation Current (I0): The minority drift current produces an extremely small, almost voltage-independent reverse saturation current I0 (nanoamperes for Silicon, microamperes for Germanium). Because it originates from thermal electron-hole generation, I0 approximately doubles for every 10°C rise in temperature.",
          "Reverse Breakdown (Zener & Avalanche): When reverse voltage reaches the breakdown threshold (VBR or VZ), high electric field leads to quantum mechanical tunneling (Zener breakdown < 5V) or carrier impact ionization multiplication (Avalanche breakdown > 6V), causing an abrupt vertical surge in reverse current without destroying the diode if external current is properly limited.",
          "Shockley Diode Equation: I = I0 [exp(qV / (η · k · T)) - 1] = I0 [exp(V / (η · VT)) - 1], where thermal voltage VT = kT/q ≈ 25.86 mV at 300K and η is the ideality factor (η ≈ 1 for Ge, η ≈ 2 for Si at moderate currents)."
        ],
        circuitRef: "pn_junction_iv_characteristic"
      },
      {
        id: "zener_regulation",
        title: "Zener Diode as a Voltage Regulator & 4-Quadrant I-V Characteristics",
        summary: "A Zener diode is a heavily doped P-N junction diode specifically designed to operate stably in the reverse breakdown regime. Its complete 4-quadrant I-V characteristic curve exhibits normal forward conduction above knee cut-in voltage Vγ ≈ 0.7V and an extremely sharp, vertical reverse breakdown at breakdown voltage VZ.",
        keyPoints: [
          "Complete 4-Quadrant I-V Characteristics: Forward bias: Exhibits standard exponential conduction above cut-in voltage Vγ ≈ 0.7V. Reverse bias: Shows negligible reverse saturation current until reverse voltage reaches breakdown VZ. At VZ, reverse current surges sharply while voltage across the diode remains practically constant.",
          "Operating Region Limits (IZK to IZM): To maintain reliable regulation, reverse current must be kept strictly between the knee current IZK (typically 1-5 mA, below which the curve rounds off) and the maximum safe current IZM = Pmax / VZ (above which excessive dissipation causes thermal destruction).",
          "Dynamic Zener Impedance (rz): The slope of the I-V curve in the breakdown region defines dynamic impedance rz = ΔVZ / ΔIZ. Typical values range from 2 Ω to 10 Ω, meaning large swings in current produce only millivolt changes in terminal voltage.",
          "Shunt DC Voltage Regulator Operation: The Zener diode is connected in parallel (shunt) with load resistor RL behind a series current-limiting resistor RS: Vout = VZ.",
          "Regulation against Line Voltage Variations: If input voltage Vin increases, the excess voltage drops across RS, and the extra current ΔIS flows harmlessly through the low dynamic resistance of the Zener diode to ground while load voltage Vout stays firmly pinned to VZ.",
          "Regulation against Load Resistance Variations: If load resistance RL decreases, load current IL increases; the Zener diode automatically sheds current (IZ drops) so that total current IS = IZ + IL through RS remains constant, keeping Vout = VZ stable.",
          "Two Breakdown Mechanisms: Zener Breakdown occurs in heavily doped diodes (VZ < 5V) via quantum mechanical tunneling of valence electrons across an ultra-thin depletion layer (<10 nm) with a negative temperature coefficient. Avalanche Breakdown occurs in lightly doped diodes (VZ > 6V) via high-field impact ionization multiplication with a positive temperature coefficient."
        ],
        circuitRef: "zener_iv_characteristics"
      },
      {
        id: "half_wave_rectifier_theory",
        title: "Half-Wave Rectifier: Circuit Diagram, Operation, Waveforms & Performance Parameters",
        summary: "A half-wave rectifier converts alternating sinusoidal AC input into pulsating unidirectional direct current (DC) by allowing conduction during positive half-cycles only while blocking negative half-cycles.",
        keyPoints: [
          "Circuit Configuration: Consists of a step-down transformer secondary winding, a single semiconductor rectifier diode (D), and a load resistor (RL) in series.",
          "Working Principle: During positive AC half-cycle (0 to π), secondary terminal A is positive with respect to B; diode D is forward-biased and conducts current iL = (Vm sin ωt - Vγ) / (rf + RL) through RL. During negative half-cycle (π to 2π), terminal A is negative; diode D is reverse-biased, acting as an open switch (iL = 0).",
          "Average DC Output Voltage: Vdc = Vm / π ≈ 0.318 Vm, and average DC load current Idc = Im / π.",
          "RMS Output Voltage: Vrms = Vm / 2 = 0.5 Vm. Theoretical rectification efficiency is η = Pdc / Pac = 40.6% / (1 + rf/RL) ≈ 40.6%.",
          "Peak Inverse Voltage (PIV): During the negative non-conducting half-cycle, maximum reverse voltage across the diode is PIV = Vm.",
          "Ripple Factor & Ripple Frequency: Ripple factor γ = √[(Vrms/Vdc)² - 1] = √[(π/2)² - 1] ≈ 1.21 (unwanted AC harmonic components dominate over DC). Ripple fundamental frequency is fr = f (50 Hz for 50 Hz mains).",
          "Engineering Disadvantages: Low efficiency (40.6%), high ripple factor (1.21), poor transformer utilization factor (TUF = 0.287), and unidirectional DC current causing core saturation."
        ],
        circuitRef: "half_wave_rectifier"
      },
      {
        id: "center_tapped_full_wave_rectifier_theory",
        title: "Full-Wave Center-Tapped Rectifier: Circuit Diagram, Operation, Waveforms & PIV Analysis",
        summary: "A full-wave center-tapped rectifier utilizes a center-tapped transformer delivering two equal and opposite secondary voltages to two diodes, enabling alternate conduction during both positive and negative AC half-cycles.",
        keyPoints: [
          "Circuit Configuration: A center-tapped secondary winding (12V-0-12V) feeds two diodes D1 and D2 connected to a common load resistor RL returned to the central ground tap (CT).",
          "Conduction Mechanism: During positive half-cycle (0 to π), Terminal A is positive and B is negative; D1 is forward-biased (conducts) while D2 is reverse-biased (OFF). Current flows from A → D1 → RL (downwards) → CT. During negative half-cycle (π to 2π), Terminal B is positive and A is negative; D2 conducts while D1 is OFF. Current flows from B → D2 → RL (downwards in the exact same direction!) → CT.",
          "Average DC Output Voltage: Vdc = 2 · Vm / π ≈ 0.636 Vm (double of half-wave), and average load current Idc = 2 · Im / π.",
          "RMS Output Voltage: Vrms = Vm / √2 ≈ 0.707 Vm. Maximum theoretical rectification efficiency is η = 81.2% (twice of half-wave).",
          "Peak Inverse Voltage (PIV = 2 Vm): When D1 is conducting at peak +Vm, its cathode is at +Vm; simultaneously D2's anode is at -Vm. The reverse voltage across D2 is Vm - (-Vm) = 2 · Vm. Diodes must have double the breakdown rating of a bridge rectifier.",
          "Ripple Factor & Frequency: Ripple factor γ = √[(π²/8) - 1] ≈ 0.482. Output ripple frequency is fr = 2f = 100 Hz, making ripple filtering significantly easier."
        ],
        circuitRef: "center_tapped_full_wave_rectifier"
      },
      {
        id: "bridge_rectifier_theory",
        title: "Full-Wave Bridge Rectifier with Shunt Filter: Circuit Diagram, Operation & Ripple Factor",
        summary: "A full-wave bridge rectifier employs four diodes in a closed bridge loop to convert AC to DC without requiring a center-tapped transformer, with half the diode PIV rating (PIV = Vm) and superior efficiency.",
        keyPoints: [
          "Circuit Configuration: Four diodes (D1, D2, D3, D4) in a bridge network connected across a standard step-down transformer secondary. A shunt capacitor C is connected in parallel with RL to smooth pulsating DC.",
          "Conduction in Alternating Pairs: During positive half-cycle, diodes D1 and D2 conduct in series with RL; D3 and D4 are reverse-biased. During negative half-cycle, diodes D3 and D4 conduct in series with RL; D1 and D2 are reverse-biased. Current passes through RL in the same direction during both half-cycles.",
          "Average DC Output & PIV: Vdc = 2 · Vm / π ≈ 0.636 Vm (unfiltered). PIV per diode is only PIV = Vm (major engineering advantage over center-tapped rectifier).",
          "Rectification Efficiency: Maximum theoretical efficiency is η = 81.2% with ripple factor γ = 0.482 (unfiltered).",
          "Shunt Capacitor Filter Operation: The capacitor C charges to peak Vm through the conducting diodes; when input voltage drops below capacitor voltage, diodes turn OFF and C discharges slowly through load RL (time constant τ = RL·C >> T/2), maintaining a nearly steady DC level with minor ripple.",
          "Ripple Factor with Filter: Peak-to-peak ripple voltage is Vr(p-p) = Idc / (2 · f · C). Filtered ripple factor is γ = 1 / (4 · √3 · f · C · RL)."
        ],
        circuitRef: "bridge_rectifier"
      }
    ],
    formulas: [
      {
        name: "Shockley Diode Equation",
        formula: "I = I₀ · [exp(V / (η · V_T)) - 1]",
        explanation: "Diode current where I₀ is reverse saturation current, η is ideality factor (1 for Ge, ~2 for Si), and VT = kT/q ≈ 26mV at 300K.",
        unit: "Amperes (A)"
      },
      {
        name: "Mass Action Law",
        formula: "n · p = n_i²(T)",
        explanation: "Product of electron concentration n and hole concentration p is constant at thermal equilibrium. In n-type: n ≈ Nd, p = ni²/Nd.",
        unit: "cm⁻⁶"
      },
      {
        name: "Direct Bandgap Emission Wavelength",
        formula: "λ = (h · c) / E_g ≈ 1.24 / E_g(eV)",
        explanation: "Wavelength of light emitted during direct electron-hole radiative recombination across bandgap Eg.",
        unit: "Micrometers (μm)"
      },
      {
        name: "Half-Wave Rectifier DC Voltage",
        formula: "V_dc = V_m / π ≈ 0.318 V_m",
        explanation: "Average DC output voltage across load in half-wave rectification.",
        unit: "Volts (V)"
      },
      {
        name: "Full-Wave DC Voltage (Center-Tap & Bridge)",
        formula: "V_dc = 2 · V_m / π ≈ 0.636 V_m",
        explanation: "Average DC output voltage for full-wave center-tapped and bridge rectifiers.",
        unit: "Volts (V)"
      },
      {
        name: "Rectifier Efficiency (Half vs Full Wave)",
        formula: "η_half = 40.6%  ·  η_full = 81.2%",
        explanation: "Maximum theoretical efficiency of converting AC input power to DC load power.",
        unit: "Percentage (%)"
      },
      {
        name: "Ripple Factor (Half vs Full Wave)",
        formula: "γ_half = 1.21  ·  γ_full = 0.482",
        explanation: "Ratio of RMS AC ripple component to DC component: γ = √((Vrms/Vdc)² - 1).",
        unit: "Dimensionless"
      },
      {
        name: "Capacitor Filter Ripple Voltage",
        formula: "V_r(p-p) = I_dc / (2 · f · C)",
        explanation: "Peak-to-peak ripple voltage across shunt smoothing capacitor C at mains frequency f.",
        unit: "Volts (V)"
      },
      {
        name: "Zener Minimum Series Resistor",
        formula: "R_s = (V_in(min) - V_Z) / (I_Z(min) + I_L(max))",
        explanation: "Limits maximum diode power dissipation while ensuring Zener stays reliably in reverse breakdown.",
        unit: "Ohms (Ω)"
      }
    ],
    examQuestions: [
      {
        id: "q_semi_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Semiconductor Physics",
        question: "Define intrinsic and extrinsic semiconductors with suitable examples. State the Law of Mass Action.",
        answerHint: "Intrinsic Semiconductor: A chemically pure semiconductor crystal with no significant impurity atoms, where electron density equals hole density (n = p = ni). Examples: Pure Silicon (Si) and Germanium (Ge). Extrinsic Semiconductor: Formed by deliberately doping an intrinsic semiconductor with pentavalent donors (e.g., Si doped with Phosphorus - n-type) or trivalent acceptors (e.g., Si doped with Boron - p-type) to dramatically raise conductivity. Law of Mass Action: Under thermal equilibrium, the product of electron and hole concentrations is invariant at a constant temperature: n · p = ni²."
      },
      {
        id: "q_semi_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Carrier Transport",
        question: "What are majority and minority carriers in an n-type semiconductor? How are they generated?",
        answerHint: "In an n-type semiconductor: (1) Free conduction electrons are majority carriers (n ≈ Nd), generated by thermal ionization of pentavalent donor impurities (P, As) which donate their 5th valence electron at room temperature; (2) Holes are minority carriers (p = ni²/Nd << n), generated solely by spontaneous thermal rupture of Silicon-Silicon covalent bonds."
      },
      {
        id: "q_semi_3",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Direct vs Indirect Bandgap",
        question: "Distinguish between Direct and Indirect bandgap semiconductors with appropriate examples and E-k band diagrams. Why cannot Silicon be used to manufacture efficient Light Emitting Diodes (LEDs)?",
        answerHint: "Direct Bandgap: Conduction band minimum and valence band maximum align at the exact same crystal wave vector (k = 0). Electron-hole recombination conserves crystal momentum directly (Δk = 0), releasing the entire bandgap energy as a photon of light (hν = Eg). Examples: Gallium Arsenide (GaAs), InP, GaN. Applications: LEDs, laser diodes. Indirect Bandgap: Conduction band minimum and valence band maximum occur at different crystal wave vectors (kc ≠ kv). Recombination cannot conserve momentum directly because photons carry negligible momentum; it requires a simultaneous 3-particle collision involving a lattice vibration (phonon). Radiative lifetime is 100,000× slower, and energy is dissipated as heat. Why Silicon cannot make LEDs: Silicon is an indirect bandgap semiconductor (Eg = 1.12 eV); electron-hole recombination is predominantly non-radiative and lost as heat, making light emission efficiency near zero."
      },
      {
        id: "q_semi_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Rectifier Comparison",
        question: "Compare Half-Wave, Center-Tapped Full-Wave, and Bridge Full-Wave rectifiers with respect to: (a) Number of diodes used, (b) Peak Inverse Voltage (PIV), (c) Rectification efficiency (η), and (d) Ripple factor (γ).",
        answerHint: "Comparison: (1) Half-Wave: 1 diode, PIV = Vm, Efficiency η = 40.6%, Ripple factor γ = 1.21, Ripple frequency fr = f (50 Hz). (2) Full-Wave Center-Tapped: 2 diodes, PIV = 2Vm, Efficiency η = 81.2%, Ripple factor γ = 0.482, Ripple frequency fr = 2f (100 Hz). Requires bulky center-tapped transformer. (3) Full-Wave Bridge: 4 diodes, PIV = Vm, Efficiency η = 81.2%, Ripple factor γ = 0.482, Ripple frequency fr = 2f (100 Hz). Does not require center-tapped transformer, and diodes require only half the PIV rating of center-tapped."
      },
      {
        id: "q_semi_5",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Capacitor Smoothing Filter",
        question: "Explain how a shunt capacitor filter reduces ripple in a full-wave rectifier output. Draw the circuit diagram and rectified DC output waveform showing charging and discharging periods.",
        answerHint: "Working: A large electrolytic capacitor C is connected in parallel with load resistor RL. When diodes conduct, capacitor charges rapidly to peak secondary voltage Vm. As the AC voltage falls below the capacitor voltage, all diodes become reverse-biased and cut off. The capacitor then slowly discharges its stored charge through RL with time constant τ = RL·C. Because RL·C >> T/2, the output voltage drops only slightly before the next pulse recharges it, converting pulsating DC into steady DC with small ripple. Ripple factor: γ ≈ 1 / (4√3 · f · RL · C), with peak-to-peak ripple Vr(p-p) = Idc / (2fC)."
      },
      {
        id: "q_semi_6",
        year: "CU 2023",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "Zener Diode Voltage Regulator",
        question: "Design a 6.0 V Zener voltage regulator to supply a DC load drawing between 10 mA and 50 mA from an unregulated DC supply that varies between 12 V and 18 V. The minimum Zener diode breakdown current is Iz,min = 5 mA and maximum rated Zener power is Pz,max = 1.0 W. (a) Draw the regulator circuit; (b) Calculate the series resistance Rs; (c) Find maximum Zener current Iz,max and check power rating.",
        answerHint: "(a) Draw DC source Vin, series resistor Rs, shunt reverse-biased Zener diode (cathode pointing to positive rail), and parallel load resistor RL. (b) For reliable regulation at minimum input (Vin,min = 12V) and maximum load (IL,max = 50 mA): Rs = (Vin,min - Vz) / (IL,max + Iz,min) = (12 - 6) / (50 mA + 5 mA) = 6 V / 55 mA ≈ 109.1 Ω (Standard 110 Ω, 2W). (c) Maximum Zener current occurs when Vin = Vin,max (18 V) and load current is minimum (IL,min = 10 mA): Total current IT,max = (Vin,max - Vz) / Rs = (18 - 6) / 109.1 = 12 V / 109.1 Ω = 110 mA. Zener current Iz,max = IT,max - IL,min = 110 mA - 10 mA = 100 mA. Maximum power dissipated by Zener: Pz = Vz · Iz,max = 6.0 V × 0.100 A = 0.60 W. Since 0.60 W < 1.0 W (Pz,max rating), the design is thermally safe."
      }
    ],
    recommendedBooks: [
      "Electronic Devices and Circuit Theory - Robert L. Boylestad & Louis Nashelsky",
      "Electronic Principles - Albert Malvino & David Bates",
      "Integrated Electronics - Jacob Millman & Christos Halkias"
    ]
  },

  // 3. Bipolar Junction Transistors (BJT)
  {
    id: "bipolar_junction_transistors",
    slug: "bipolar-junction-transistors",
    title: "Bipolar Junction Transistors (BJT)",
    shortTitle: "BJT & Amplifiers",
    semester: "sem2",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Bipolar Junction Transistors (BJT)",
    officialSyllabus: "NPN and PNP Transistors, Energy Band Diagram, Working Principle of Transistor as Amplifier and Switch, CE, CB, CC Configurations, Input and Output Characteristics of NPN Transistor in CB and CE modes, Cut-off, Active and Saturation Regions, Current Components in Active Mode, Need for Biasing and Bias Stability, Operating (Q) Point, Small Signal h-Parameter Model of CE Transistor.",
    overview: "Covers NPN and PNP transistors, energy band diagram, working principle of transistor as amplifier and switch, CE, CB, CC configurations, input and output characteristics of NPN transistor in CB and CE modes, cut-off, active and saturation regions, current components in active mode, need for biasing and bias stability, operating (Q) point, and small signal h-parameter model of CE transistor.",
    learningObjectives: [
      "Understand transistor physical regions: heavily doped Emitter, very thin lightly doped Base, moderately doped large Collector.",
      "Analyze current relationships: IE = IB + IC, IC = α IE + ICBO = β IB + ICEO.",
      "Plot and interpret CE input and output characteristics (Cutoff, Active, and Saturation regions).",
      "Construct DC and AC load lines and locate the Quiescent Operating Point (Q-point).",
      "Derive stability factors (S = ∂IC/∂ICO) for fixed bias vs self-bias (voltage divider) configurations.",
      "Calculate voltage gain Av, current gain Ai, input impedance Rin, and output impedance Rout of a small-signal CE amplifier."
    ],
    symbols: [
      {
        name: "NPN Transistor",
        standard: "IEEE Std 315",
        description: "Bipolar transistor where conduction is predominantly via high-mobility electrons. Emitter arrow points OUTWARDS.",
        symbolType: "npn_bjt",
        terminalNames: ["Base (B)", "Collector (C)", "Emitter (E)"],
        keyFormula: "IC = β · IB, IE = IB + IC, β = α / (1 - α)",
        specs: "BC547 / BC548 (General Purpose NPN, hfe ~ 110-800)"
      },
      {
        name: "PNP Transistor",
        standard: "IEEE Std 315",
        description: "Bipolar transistor where current conduction is mediated by holes. Emitter arrow points INWARDS toward the base.",
        symbolType: "pnp_bjt",
        terminalNames: ["Base (B)", "Collector (C)", "Emitter (E)"],
        keyFormula: "IE = IB + IC, VEB ≈ 0.7V in active mode",
        specs: "BC557 / BC558 (Complementary General Purpose PNP)"
      }
    ],
    circuits: [
      {
        id: "bjt_characteristics",
        title: "NPN Transistor Input & Output Characteristics, Operating Regions & DC Load Line",
        subtitle: "Common Emitter (CE) family of curves, Cut-off, Active, and Saturation regions, Q-point and Early effect.",
        description: "Comprehensive experimental and theoretical characteristic curves of an NPN bipolar junction transistor in Common Emitter configuration. The input characteristic illustrates the forward-biased base-emitter diode curve with 0.7V cut-in knee voltage. The output characteristics illustrate collector current IC versus VCE for discrete base currents IB, displaying the saturation region (VCE < 0.2V), linear active region (constant current IC = β·IB), cutoff region (IB = 0), and DC load line intersection establishing the Quiescent Q-point.",
        circuitType: "Transistor Characteristic Curves & Biasing Test Bench",
        components: [
          "NPN Transistor (BC547 / 2N2222)",
          "Dual Regulated DC Power Supplies (VBB: 0 - 5V, VCC: 0 - 30V)",
          "Base Current Limiting Resistor (RB = 100 kΩ)",
          "Collector Load Resistor (RC = 1 kΩ)",
          "Precision Base Microammeter (0 - 100 μA)",
          "Precision Collector Milliammeter (0 - 50 mA)",
          "High-Impedance Digital Voltmeters for VBE and VCE"
        ],
        keyOperation: [
          "CE Input Characteristic: Plots IB vs VBE for fixed collector-emitter voltage VCE. Below the cut-in knee voltage (Vγ ≈ 0.7V for Silicon), IB is practically zero. Once VBE > 0.7V, IB rises exponentially. Increasing VCE widens the CB depletion layer, reducing effective base width Wb (Early effect / Base-width modulation) and causing a minor rightward shift in the curve.",
          "CE Output Characteristics: Plots IC vs VCE for step increments of base current IB (10 μA, 20 μA, 30 μA, 40 μA).",
          "Active Region (VCE > 0.7V): EB junction is forward-biased and CB junction is reverse-biased. IC is determined almost entirely by IB: IC = β · IB. Curves exhibit a slight positive slope due to Base-Width Modulation (Early Effect). Extrapolating the linear slopes backward intersects the negative VCE axis at the Early Voltage (-VA ≈ -50V to -100V).",
          "Saturation Region (VCE < 0.2V): Both EB and CB junctions are forward-biased. IC is limited by the external load resistor RC: IC(sat) ≈ VCC / RC, independent of further increases in IB. The saturation voltage is VCE(sat) ≈ 0.2V for Silicon.",
          "Cutoff Region (IB = 0): Both EB and CB junctions are reverse-biased. IC drops to the tiny reverse leakage current ICEO = (1 + β) · ICBO (a few nanoamperes), acting as an open switch.",
          "DC Load Line & Operating Point (Q-Point): Defined by VCE = VCC - IC · RC. The intersection between this straight line and the selected base current curve IB determines the quiescent operating point Q(VCEQ, ICQ). For maximum undistorted symmetrical AC swing, Q is positioned near the center of the active load line (VCEQ ≈ VCC / 2)."
        ],
        inputOutputRelation: "IC = β · IB + (1 + β) · ICBO · VCE(sat) ≈ 0.2V · DC Load Line: VCE = VCC - IC · RC",
        formula: "hfe = β = ΔIC/ΔIB · hie = ΔVBE/ΔIB ≈ 26mV/IB · Early Voltage VA = IC / (ΔIC/ΔVCE) - VCE",
        cuExamTip: "CU Frequent Exam Question: Sketch the CE input and output characteristics of an NPN transistor. Mark Cut-off, Active, and Saturation regions. Explain why the output curves have a slight positive slope (Early effect)."
      },
      {
        id: "bjt_ce_amplifier",
        title: "Single-Stage Common Emitter (CE) Voltage Divider Amplifier",
        subtitle: "The most widely utilized BJT amplifier topology providing both high voltage and current gain.",
        description: "Resistors R1 and R2 form a potential divider fixing the base voltage V_B independently of temperature and β variations. Resistor RE provides negative DC feedback to stabilize the operating point against thermal runaway. Bypass capacitor CE shorts AC signals to ground to prevent loss of AC voltage gain.",
        circuitType: "Analog Voltage Amplifier",
        components: ["NPN Transistor (BC547)", "Biasing Resistors R1, R2, RC, RE", "Coupling Capacitors Cin, Cout", "Emitter Bypass Capacitor CE"],
        keyOperation: [
          "DC Biasing: V_B = Vcc · [R2 / (R1 + R2)]. Emitter voltage VE = VB - VBE ≈ VB - 0.7V. Emitter current IE ≈ IC = VE / RE.",
          "Q-Point Selection: Chosen near the middle of the active DC load line (VCE = Vcc/2) to permit maximum undistorted peak-to-peak AC output voltage swing.",
          "AC Amplification: Small input voltage vin modulates base-emitter voltage vbe, causing amplified variations in collector current ic = gm · vbe = β · ib.",
          "Phase Reversal: Output voltage across collector resistor RC is 180° out of phase with input voltage (positive swing at base pulls collector voltage down)."
        ],
        inputOutputRelation: "Vout(t) = - Av · Vin(t) = - [ (RC || RL) / re' ] · Vin(t)",
        formula: "Voltage Gain Av ≈ - (RC || RL) / re' (where re' = 26mV / IE) · Stability Factor S ≈ 1 + (RB/RE)",
        cuExamTip: "CU Exam Gold: Always mention why CE configuration is preferred for audio amplification (moderate input Rin, moderate Rout, highest power gain, 180° phase inversion)."
      },
      {
        id: "bjt_block_diagram",
        title: "BJT Physical Structure: NPN vs PNP Block Diagrams & Charge Transport",
        subtitle: "Heavily doped Emitter (n⁺/p⁺), ultra-thin lightly doped Base (p/n), and large collector dissipation area.",
        description: "Physical block representation of NPN and PNP bipolar junction transistors illustrating the three asymmetrical metallurgical layers, relative dopant densities, depletion layers at E-B and C-B junctions, and electron/hole transport streams in active mode.",
        circuitType: "Semiconductor Physics Block Diagram",
        components: [
          "Emitter Region (Heavily Doped: n⁺ in NPN, p⁺ in PNP)",
          "Base Region (Extremely Thin ~1 μm, Lightly Doped: p in NPN, n in PNP)",
          "Collector Region (Moderately Doped, Physically Largest: n in NPN, p in PNP)",
          "E-B Forward-Biased Space-Charge Depletion Layer",
          "C-B Reverse-Biased Space-Charge Depletion Layer"
        ],
        keyOperation: [
          "Doping Asymmetry: Emitter is heavily doped to maximize carrier injection efficiency γ = InE / (InE + IpE) > 0.99. Base is lightly doped and ultra-thin (Wb << Ln) to ensure >98% of injected carriers diffuse across without recombining.",
          "Collector Geometry: Collector is physically the largest region because it must absorb thermal power PD = VCE · IC dissipated when carriers fall down the reverse-biased collector junction cliff.",
          "NPN Electron Flow: Electrons injected from n⁺ emitter traverse the thin p-base and are collected by n-collector. Conventional current enters collector and base, and exits emitter: IE = IB + IC.",
          "PNP Hole Flow: Holes injected from p⁺ emitter traverse thin n-base and enter p-collector. Current enters emitter and exits base and collector: IE = IB + IC."
        ],
        inputOutputRelation: "IE = IB + IC · InC = β* · InE · IC = α · IE + ICBO",
        formula: "Current Continuity: IE = IB + IC · Base Transport β* = InC / InE · Injection Efficiency γ = InE / IE",
        cuExamTip: "CU Favorite: Draw the physical block diagram of NPN and PNP transistors. Explain why the base must be made extremely thin and lightly doped."
      },
      {
        id: "bjt_configurations",
        title: "BJT Three Configurations: Common Emitter (CE), Common Base (CB) & Common Collector (CC)",
        subtitle: "Comparison of input/output terminals, impedance levels, gain parameters, and phase shift.",
        description: "Comparative schematic and analytical overview of the three standard BJT circuit topologies: Common Emitter (CE), Common Base (CB), and Common Collector (CC or Emitter Follower), summarizing their distinct engineering applications in audio, radio-frequency, and impedance-matching stages.",
        circuitType: "Transistor Circuit Topologies",
        components: [
          "Common Emitter (CE) Stage (Input: Base, Output: Collector, Emitter AC Ground)",
          "Common Base (CB) Stage (Input: Emitter, Output: Collector, Base AC Ground)",
          "Common Collector (CC) Stage (Input: Base, Output: Emitter, Collector AC Ground)"
        ],
        keyOperation: [
          "Common Emitter (CE): Moderate Rin (~1-2 kΩ), moderate Rout (~50 kΩ), high voltage gain Av (100-500), high current gain β (50-300), highest power gain Ap, and 180° phase inversion. The standard choice for general-purpose voltage and audio amplification.",
          "Common Base (CB): Very low Rin (~20-50 Ω), very high Rout (~1 MΩ), current gain slightly less than unity (α ≈ 0.98 < 1), high voltage gain Av, and zero phase shift (0°). Ideal for high-frequency VHF/RF amplification without Miller feedback capacitance.",
          "Common Collector (CC / Emitter Follower): Very high Rin (~100-500 kΩ), very low Rout (~10-50 Ω), current gain (1 + β), voltage gain Av ≈ 0.98 < 1 (unity follower), and zero phase shift (0°). Ideal as an impedance-matching buffer between high-impedance sensors and low-impedance loads.",
          "Selection Rule: Use CE for maximum voltage/power amplification; use CC for buffer/driver isolation; use CB for high-frequency RF matching."
        ],
        inputOutputRelation: "CE: Av >> 1, Ai >> 1, 180° · CB: Av >> 1, Ai < 1, 0° · CC: Av ≈ 1, Ai >> 1, 0°",
        formula: "CE Gain: Av ≈ -RC/re' · CB Gain: Av ≈ RC/re' · CC Gain: Av = RE/(re' + RE) ≈ 1",
        cuExamTip: "CU Frequent Exam Question: Compare CE, CB, and CC configurations on the basis of input impedance, output impedance, voltage gain, current gain, and phase shift."
      },
      {
        id: "bjt_switch_circuit",
        title: "Transistor as an Electronic Switch: Circuit & Cutoff / Saturation States",
        subtitle: "Digital binary switching between high-impedance OFF state (cutoff) and low-impedance ON state (saturation).",
        description: "An NPN transistor configured as a solid-state digital switch controlling a collector load resistor or relay. When the input voltage is LOW (Vin < 0.5V), the transistor is in cutoff, drawing near-zero current. When the input is driven HIGH (Vin = 5V) with sufficient base current IB ≥ IC(sat)/β, the transistor enters saturation, pulling Vout down to VCE(sat) ≈ 0.2V.",
        circuitType: "Digital Electronic Switch",
        components: [
          "NPN Switching Transistor (2N2222 / BC547)",
          "Base Resistor (RB = 10 kΩ)",
          "Collector Load Resistor (RC = 1 kΩ / Relay Coil)",
          "Digital Input Signal (Vin: 0V / 5V)",
          "DC Supply Rail (VCC = 5V / 12V)"
        ],
        keyOperation: [
          "Cutoff State (Switch OFF): Vin = 0V → VBE < 0.5V → IB = 0. Both E-B and C-B junctions are reverse-biased. Collector current is limited to minute leakage ICEO ≈ 0. Output voltage sits at rail: Vout = VCE = VCC.",
          "Saturation State (Switch ON): Vin = 5V → IB = (Vin - 0.7V) / RB. Base current is driven past the threshold IB(sat) = IC(sat) / βforced. Both E-B and C-B junctions are forward-biased. Collector voltage collapses to VCE(sat) ≈ 0.2V.",
          "Load Current: In saturation, load current is set strictly by the collector circuit: IC(sat) = (VCC - VCE(sat)) / RC ≈ VCC / RC.",
          "Condition for Hard Saturation: To guarantee overdrive against β variations: IB ≥ (1.5 to 2) · IC(sat) / βmin.",
          "Power Dissipation: Extremely low in both static states: In OFF state: P = VCC · ICEO ≈ 0. In ON state: P = VCE(sat) · IC(sat) ≈ 0.2V · IC (very small). Power is dissipated predominantly during dynamic switching transitions."
        ],
        inputOutputRelation: "Vin = LOW → Vout = VCC (Switch OPEN) · Vin = HIGH → Vout = VCE(sat) ≈ 0.2V (Switch CLOSED)",
        formula: "IB(sat) = (VCC - VCE(sat)) / (β · RC) · Overdrive Factor: ODF = IB / IB(sat) ≥ 1.5 · VCE(sat) ≈ 0.2V",
        cuExamTip: "CU Frequent Exam Question: Explain the working of a BJT as an electronic switch. Derive the condition for saturation and explain why power dissipation is minimal in cutoff and saturation."
      }
    ],
    theoreticalSections: [
      {
        id: "bjt_structure_band_diagram",
        title: "NPN and PNP Transistors: Structure, Block Diagram, Biasing & Energy Bands",
        summary: "A Bipolar Junction Transistor (BJT) is a three-terminal semiconductor device consisting of two back-to-back P-N junctions formed in a single crystalline substrate. Conduction is mediated simultaneously by both charge carriers—majority electrons and minority holes in NPN (and vice versa in PNP). The physical geometries and metallurgical doping levels of the three regions are heavily asymmetrical: Emitter is heavily doped to inject carriers, Base is extraordinarily thin and lightly doped to minimize carrier recombination, and Collector is moderately doped with a large surface area to safely dissipate thermal power.",
        keyPoints: [
          "NPN and PNP Physical Block Diagrams: The transistor consists of three distinct crystalline zones: Emitter (E), Base (B), and Collector (C). In NPN, an ultra-thin p-type base is sandwiched between two n-type regions (n⁺-p-n). In PNP, a thin n-type base is sandwiched between two p-type regions (p⁺-n-p).",
          "Three Heavily Asymmetrical Regions: (1) Emitter (E): Heavily doped (n⁺ in NPN, p⁺ in PNP) to ensure high carrier injection efficiency; intermediate physical dimensions. (2) Base (B): Extremely thin (typically 0.5 to a few micrometers, width Wb << diffusion length Ln) and very lightly doped (p in NPN, n in PNP) to ensure >98% of injected carriers diffuse across without recombining. (3) Collector (C): Moderately doped to allow higher reverse breakdown voltage, but physically the largest region to safely dissipate heat generated by reverse collection (P = VCE · IC).",
          "Equilibrium Energy Band Diagram: In an unbiased isolated transistor, Fermi energy level EF is strictly horizontal throughout all three regions. Energy bands (conduction band Ec and valence band Ev) bend at both the E-B and C-B metallurgical junctions, forming two built-in potential barrier hills opposing carrier diffusion.",
          "Energy Band Diagram in Forward-Active Mode: When the Emitter-Base junction is forward-biased (VBE > 0 for NPN) and Collector-Base junction is reverse-biased (VCB > 0): (1) Forward bias lowers the conduction band barrier at the E-B junction, allowing a large stream of electrons to diffuse into the base. (2) Reverse bias at the C-B junction creates a steep downward electrostatic potential cliff that violently accelerates electrons across the space-charge layer into the collector.",
          "NPN vs PNP Comparison: In NPN, majority conduction is carried by free electrons (mobility μn ≈ 1400 cm²/V·s). In PNP, conduction is carried by holes (mobility μp ≈ 450 cm²/V·s). Due to 3× higher electron mobility, NPN transistors offer lower internal resistance, higher speed, and superior frequency response."
        ],
        circuitRef: "bjt_block_diagram"
      },
      {
        id: "bjt_current_components_action",
        title: "Current Components, Transistor Action & Mathematical Derivation of α and β",
        summary: "Transistor action describes the physical process whereby a low-voltage forward-biased E-B junction controls high current flowing through a high-voltage reverse-biased C-B junction. The total emitter current IE splits into collector current IC and tiny base current IB. The Common Base current gain α and Common Emitter current gain β are mathematically interrelated through fundamental charge conservation.",
        keyPoints: [
          "Five Distinct Current Components: (1) InE (Injected Electron Current): Massive majority electron stream injected from n⁺ emitter across the forward-biased EB barrier into the p-base. (2) IpE (Back-Injected Hole Current): A small, unwanted hole current diffusing from p-base into n⁺ emitter (minimized by making base doping much lighter than emitter doping: γ = InE / (InE + IpE) ≈ 0.995). (3) IrB (Base Recombination Current): A minute fraction (~1-2%) of injected electrons that recombine with holes in the thin p-base. (4) InC (Collected Electron Current): The remaining ~98-99% of injected electrons that diffuse across base width Wb and enter the collector (InC = β* · InE). (5) ICBO (Collector-Base Reverse Saturation Leakage): Minute thermally generated minority carrier drift current crossing the reverse-biased CB junction when emitter is open (IE = 0).",
          "Definition of Alpha (α): Common Base DC current amplification factor, defined as the ratio of collector current to emitter current in active mode: α = (IC - ICBO) / IE ≈ IC / IE. Because some injected carriers are lost to base recombination, α is always slightly less than unity (typically 0.95 to 0.998).",
          "Definition of Beta (β or hfe): Common Emitter DC current amplification factor, defined as the ratio of collector current to base current: β = (IC - ICEO) / IB ≈ IC / IB. Typical values range from 50 to 300 (or up to 800 in high-gain transistors like BC547C).",
          "Step-by-Step Derivation of Relation between α and β: Applying Kirchhoff's Current Law to the transistor body: IE = IB + IC. Collector current is governed by: IC = α · IE + ICBO.",
          "Substitute IE = IB + IC into the collector equation: IC = α(IB + IC) + ICBO → IC = α IB + α IC + ICBO.",
          "Rearrange to isolate IC: IC - α IC = α IB + ICBO → IC(1 - α) = α IB + ICBO.",
          "Divide both sides by (1 - α): IC = [α / (1 - α)] · IB + [1 / (1 - α)] · ICBO.",
          "Comparing this directly with the standard Common Emitter equation IC = β · IB + ICEO: β = α / (1 - α), and ICEO = (1 + β) · ICBO.",
          "Conversely, to express α in terms of β: Starting with β = α / (1 - α) → β(1 - α) = α → β - β·α = α → β = α(1 + β) → α = β / (1 + β).",
          "Numerical Example: If α = 0.99: β = 0.99 / (1 - 0.99) = 0.99 / 0.01 = 99. If β = 100: α = 100 / (100 + 1) = 100 / 101 ≈ 0.9901."
        ]
      },
      {
        id: "bjt_ce_cb_cc_configurations",
        title: "CE, CB, and CC Configurations: Comparative Matrix & Circuit Analysis",
        summary: "Depending on which of the three terminals is shared as a common AC reference between input and output, the BJT can be connected in three distinct topologies: Common Emitter (CE), Common Base (CB), and Common Collector (CC or Emitter Follower). Each configuration exhibits markedly different input impedance, output impedance, current gain, voltage gain, and phase relationships.",
        keyPoints: [
          "Common Emitter (CE) Configuration: Input applied to Base, output taken from Collector, with Emitter grounded. Characterized by moderate input impedance (Rin ≈ 1 kΩ - 2 kΩ), moderate output impedance (Rout ≈ 40 kΩ - 50 kΩ), high current gain (Ai = β ≈ 50 - 300), high voltage gain (Av ≈ 100 - 500), highest power gain (Ap = Ai · Av ≈ 10,000 - 100,000), and a 180° phase reversal between input and output. CE is the standard configuration universally used in audio, RF, and general-purpose voltage amplifiers.",
          "Common Base (CB) Configuration: Input applied to Emitter, output taken from Collector, with Base grounded. Characterized by very low input impedance (Rin ≈ 20 Ω - 50 Ω), very high output impedance (Rout ≈ 1 MΩ), current gain slightly below unity (Ai = α ≈ 0.98 < 1), high voltage gain (Av ≈ 100 - 500), moderate power gain, and zero phase shift (0° in-phase). Ideal for high-frequency VHF/UHF amplifiers (no Miller effect feedback capacitance) and impedance matching from low-Z coaxial lines to high-Z stages.",
          "Common Collector (CC / Emitter Follower): Input applied to Base, output taken from Emitter across RE, with Collector at AC ground. Characterized by very high input impedance (Rin ≈ 100 kΩ - 500 kΩ), very low output impedance (Rout ≈ 10 Ω - 50 Ω), high current gain (Ai = 1 + β ≈ 100 - 400), voltage gain slightly less than unity (Av ≈ 0.98 - 0.99 < 1), and zero phase shift (0°). Because output voltage 'follows' base input voltage faithfully with unity gain while driving heavy low-impedance loads, CC is universally employed as an impedance-matching buffer, pre-amp input stage, and power amplifier output driver.",
          "Summary Engineering Decision Rule: Choose CE when maximum power gain or voltage amplification is needed; choose CC when driving a low-impedance speaker/cable from a high-impedance source without signal attenuation; choose CB when operating at radio frequencies above 100 MHz where inter-electrode capacitance must be bypassed."
        ],
        circuitRef: "bjt_configurations"
      },
      {
        id: "bjt_switch_theory",
        title: "Transistor as an Electronic Switch: Circuit Operation, Cutoff & Saturation Modes",
        summary: "In digital and switching applications, the BJT operates as a two-state electronic switch: OFF (Cutoff mode, open switch) and ON (Saturation mode, closed switch), dissipating negligible power in both static states.",
        keyPoints: [
          "Cutoff Mode (Switch OPEN / OFF): When base input voltage Vin ≤ 0V (or < 0.5V), base current IB = 0. Both E-B and C-B junctions are reverse-biased. Collector current drops to tiny reverse leakage ICEO ≈ 0. The transistor acts as an open mechanical switch; zero voltage drops across RC and the output terminal sits at full rail voltage: Vout = VCE ≈ VCC.",
          "Saturation Mode (Switch CLOSED / ON): When input base voltage Vin is sufficiently high such that base current exceeds the minimum saturation threshold IB(sat) = IC(sat) / βforced = (VCC - VCE(sat)) / (βforced · RC), both E-B and C-B junctions become forward-biased. The transistor acts as a closed switch; collector voltage collapses to the saturation value VCE(sat) ≈ 0.2V (0.1V for Germanium), and full load current IC = (VCC - 0.2V) / RC flows.",
          "Switching Speed Dynamics: Transition between cutoff and saturation is governed by four time intervals: Delay time td, Rise time tr, Storage time ts (critical interval required to sweep away excess minority carriers stored in base during saturation before diode can turn off), and Fall time tf. Total turn-on time is ton = td + tr and turn-off time is toff = ts + tf."
        ],
        circuitRef: "bjt_switch_circuit"
      },
      {
        id: "bjt_amplifier_theory",
        title: "Transistor as a Linear AC Amplifier: Common Emitter Circuit Operation, Gain & Phase Reversal",
        summary: "In analog linear applications, the BJT is biased strictly within the active region, translating small input base-emitter voltage variations into amplified collector current and output voltage swings across RC with 180° phase inversion.",
        keyPoints: [
          "Linear Active Mode Biasing: The base-emitter junction is forward-biased (VBE ≈ 0.7V) with a low dynamic resistance re' = VT / IE ≈ 26 mV / IE (typically 10-25 Ω), while the collector-base junction is reverse-biased with high output dynamic resistance (>100 kΩ).",
          "AC Amplification Mechanism: An input AC voltage vin modulates base-emitter voltage vbe, causing proportional collector current variations ic = gm · vbe = β · ib. Passing ic through collector resistor RC translates current variations into large voltage swings vo = - ic · RC = - (RC / re') · vin, achieving significant voltage gain Av = vo / vin = - RC / re'.",
          "Phase Reversal (180°): In CE configuration, a positive swing at the base increases collector current ic, causing a larger IR drop across RC, which pulls the collector voltage downward. Thus output is 180° out of phase with input."
        ],
        circuitRef: "bjt_ce_amplifier"
      },
      {
        id: "bjt_input_output_characteristics",
        title: "Input and Output Characteristics of NPN Transistor in CB and CE Modes",
        summary: "The graphical relationships between terminal currents and voltages under varied DC operating conditions completely define the electrical behavior of the transistor. Common Base and Common Emitter characteristics display unique physics: Base-Width Modulation (Early Effect), knee cut-in voltages, and distinct operational regions (Cutoff, Active, Saturation, and Breakdown).",
        keyPoints: [
          "CE Input Characteristic Curve: Plots base current IB versus base-emitter voltage VBE for fixed values of collector-emitter voltage VCE. Curves resemble a forward-biased diode: IB is negligible below cut-in voltage (Vγ ≈ 0.7V for Silicon, 0.3V for Germanium), above which IB increases steeply. As VCE is increased from 1V to 10V, the reverse bias across the collector junction widens the depletion layer, narrowing the effective base width Wb (Early Effect). This reduces base recombination, causing the input curve to shift slightly to the right. Dynamic input resistance: hie = rie = (ΔVBE / ΔIB)|VCE = const ≈ 1 kΩ - 2 kΩ.",
          "CE Output Characteristic Curves: Plots collector current IC versus collector-emitter voltage VCE for discrete constant steps of base current IB (e.g., 0, 10 μA, 20 μA, 30 μA, 40 μA). The family of curves clearly delineates four distinct operational zones: (1) Active Region: VCE > 0.7V, where curves are nearly horizontal with a slight upward tilt due to Early effect; IC is governed by IC = β · IB. (2) Saturation Region: VCE < 0.2V, where curves turn sharply downward toward the origin as both junctions enter forward bias; IC drops to zero when VCE = 0. (3) Cutoff Region: Region below IB = 0, where IC = ICEO is minuscule and both junctions are reverse biased. (4) Breakdown Region: At high VCE > BVCEO, avalanche carrier multiplication causes current to spike vertically, risking device destruction.",
          "Early Effect & Early Voltage (VA): In the active region, increasing VCE expands the CB space-charge depletion layer into the lightly doped base. The effective metallurgical base width Wb shrinks. A narrower base reduces recombination, increasing the base transport factor β* and causing IC to increase slightly with VCE. If the linear active slopes of the output curves are extrapolated backwards into the negative voltage quadrant, they all intersect the negative VCE axis at a single focal point: the Early Voltage -VA (typically -50V to -100V). Dynamic output resistance is ro = (VA + VCE) / IC ≈ 1 / hoe.",
          "CB Characteristics Comparison: CB input curves plot IE vs VEB for constant VCB; dynamic input resistance is extremely low (rib ≈ 20 Ω). CB output curves plot IC vs VCB for constant IE; the active region is perfectly horizontal (IC = α · IE) and extends into the negative voltage region (VCB < 0) before saturation occurs, demonstrating why CB is an exceptionally stable constant-current source."
        ],
        circuitRef: "bjt_characteristics"
      },
      {
        id: "bjt_biasing_qpoint_stability",
        title: "Need for Biasing, Bias Stability, Q-Point & Thermal Runaway",
        summary: "Transistor biasing is the process of setting predetermined quiescent DC voltages and currents (the Q-point) such that applied AC signals can be amplified linearly without entering cutoff or saturation. Without proper DC stabilization, temperature changes and manufacturing parameter variations cause the Q-point to drift wildly along the DC load line, leading to severe waveform clipping and potential catastrophic Thermal Runaway.",
        keyPoints: [
          "DC Load Line & Quiescent (Q) Point: Applying Kirchhoff's Voltage Law to the collector circuit: VCC = IC · RC + VCE + IE · RE. Since IE ≈ IC, the DC load line equation is: VCE = VCC - IC · (RC + RE). This straight line connects the Cutoff point (VCE = VCC, IC = 0) and Saturation point (VCE = 0, IC = VCC / (RC + RE)). The intersection of the load line with the operating base current curve IBQ sets the Quiescent point Q(VCEQ, ICQ). For maximum symmetrical peak-to-peak AC output voltage swing without clipping, Q is designed at the midpoint: VCEQ ≈ VCC / 2.",
          "Three Causes of Q-Point Instability: (1) Reverse Saturation Leakage (ICBO): ICBO doubles for every 10°C temperature rise, causing a large increase in IC via (1+β) · ICBO. (2) Base-Emitter Voltage Drop (VBE): VBE decreases by approximately 2.5 mV/°C temperature increase, causing base current IB to rise. (3) Transistor Current Gain (β): β increases with temperature due to increased carrier lifetime in the base. Furthermore, commercial transistors of the same type (e.g. BC547) have a 3:1 manufacturing spread in β (110 to 800).",
          "Thermal Runaway Phenomenon: A destructive regenerative positive thermal feedback loop: An increase in ambient temperature or internal dissipation raises junction temperature Tj → causes ICBO to surge → increases collector current IC → multiplies collector power dissipation PD = VCE · IC → further heats the collector junction. If heat dissipation cannot keep pace (∂PD/∂Tj > 1/θ), Tj spirals uncontrollably until the crystalline semiconductor lattice melts. Condition to prevent thermal runaway: VCE < VCC / 2 (or RE chosen sufficiently large).",
          "Stability Factor S and Biasing Topology Analysis: Stability factor S = ∂IC / ∂ICBO measures the sensitivity of IC to changes in leakage current. Lower S is superior (ideal minimum S = 1). (1) Fixed Bias Circuit: S = 1 + β. S can exceed 200; highly unstable and practically unusable in quality circuits. (2) Collector-to-Base Feedback Bias: S = (1 + β) / [1 + β · RC / (RB + RC)]. Collector voltage drop provides negative feedback that partially stabilizes the Q-point. (3) Voltage Divider Bias (Self-Bias): S = (1 + β) · [1 + RB/RE] / [1 + β + RB/RE] ≈ 1 + (RB / RE). By choosing R1 and R2 such that Thevenin resistance RB = R1 || R2 << (1 + β)RE, stability factor S approaches 1 to 3! Collector current becomes IC ≈ (VB - 0.7V) / RE, totally independent of both temperature and transistor β variations."
        ]
      },
      {
        id: "bjt_h_parameter_model",
        title: "Small Signal h-Parameter Model of CE Transistor & Amplifier Analysis",
        summary: "At audio and low radio frequencies, the complex non-linear behavior of a BJT operating around its linear Q-point is modeled using a linear two-port hybrid equivalent circuit. The hybrid (h) parameters combine impedance, admittance, and dimensionless ratios, making them extremely easy to measure experimentally in the laboratory compared to other two-port parameter sets.",
        keyPoints: [
          "Two-Port Hybrid Equations: Treating the Common Emitter transistor as a two-port network with input port (Base-Emitter) and output port (Collector-Emitter): vbe = hie · ib + hre · vce, and ic = hfe · ib + hoe · vce.",
          "Physical Definitions & Units of the 4 CE h-Parameters: (1) hie = (vbe / ib)|vce=0: Short-circuit input impedance in Ohms (Ω), representing the dynamic resistance of the forward-biased EB junction (typically 1 kΩ - 4 kΩ). (2) hre = (vbe / vce)|ib=0: Open-circuit reverse voltage feedback ratio (dimensionless), measuring internal feedback from collector to base via Early effect (very small: 10⁻⁴ to 10⁻⁵, virtually negligible in practice). (3) hfe = (ic / ib)|vce=0: Short-circuit forward current gain (dimensionless), equivalent to AC current amplification βac (typically 50 - 300). (4) hoe = (ic / vce)|ib=0: Open-circuit output admittance in Siemens (S or mho), representing the slope of the active output curves due to Early effect (typically 10 - 50 μS, or output resistance ro = 1/hoe ≈ 20 kΩ - 100 kΩ).",
          "Simplified Low-Frequency CE Model: Because hre is negligible (hre · vce ≈ 0) and hoe is very small (1/hoe >> RC || RL), the simplified model retains only two components: an input resistance hie in the base loop, and a controlled ideal current source hfe · ib in the collector loop. Equations simplify to: vbe = hie · ib, and ic = hfe · ib.",
          "Amplifier Performance Equations Derived from h-Model: When connected to load resistor RL and AC source vs with source resistance Rs: (1) Current Gain: Ai = iL / ib = - hfe / (1 + hoe · RL) ≈ - hfe. (2) Input Resistance: Rin = hie - [hfe · hre · RL / (1 + hoe · RL)] ≈ hie. (3) Voltage Gain: Av = vo / vi = - hfe · RL' / hie (where RL' = RC || RL), showing that voltage gain is directly proportional to load resistance and inversely proportional to hie. The negative sign confirms the 180° phase inversion. (4) Output Resistance: Rout = 1 / [hoe - (hfe · hre / (hie + Rs))] ≈ 1 / hoe."
        ]
      }
    ],
    formulas: [
      {
        name: "Current Gain Relations",
        formula: "β = α / (1 - α)  and  α = β / (1 + β)",
        explanation: "Relationship between Common Emitter gain β (hfe) and Common Base gain α (hfb).",
        unit: "Dimensionless"
      },
      {
        name: "BJT Total Collector Current",
        formula: "I_C = β · I_B + (1 + β) · I_CBO",
        explanation: "Collector current including minority carrier leakage current ICBO and ICEO = (1+β)ICBO.",
        unit: "Amperes (A)"
      },
      {
        name: "DC Load Line Equation",
        formula: "V_CE = V_CC - I_C · (R_C + R_E)",
        explanation: "Straight line on IC vs VCE output curves between cutoff (Vcc, 0) and saturation (0, Vcc/(RC+RE)).",
        unit: "Volts (V)"
      },
      {
        name: "Self-Bias Stability Factor",
        formula: "S ≈ 1 + (R_B / R_E)  where R_B = R_1 || R_2",
        explanation: "Stability factor for potential divider bias. Choosing small RB and large RE drives S toward ideal unity.",
        unit: "Dimensionless"
      },
      {
        name: "Small-Signal Emitter Resistance",
        formula: "r_e' = V_T / I_E = 26 mV / I_E(mA)",
        explanation: "AC dynamic resistance of forward-biased base-emitter junction at room temperature (300K).",
        unit: "Ohms (Ω)"
      },
      {
        name: "Simplified CE Voltage Gain (h-Model)",
        formula: "A_v = - (h_fe · R_L') / h_ie  (where R_L' = R_C || R_L)",
        explanation: "Voltage amplification factor with negative sign indicating 180° phase inversion.",
        unit: "Dimensionless (or V/V)"
      }
    ],
    examQuestions: [
      {
        id: "q_bjt_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "BJT Current Gains α & β",
        question: "Define the common-base current gain α and common-emitter current gain β of a BJT. Derive the mathematical relation: β = α / (1 - α).",
        answerHint: "Definitions: α = IC / IE (fraction of emitter carriers reaching collector, typical 0.95 - 0.995). β = IC / IB (base-to-collector current amplification factor, typical 50 - 500). Derivation: Emitter current IE = IB + IC. Divide both sides by IC: IE/IC = IB/IC + 1. Since IC/IE = α and IC/IB = β: 1/α = 1/β + 1 → 1/β = 1/α - 1 = (1 - α)/α. Taking reciprocal gives: β = α / (1 - α)."
      },
      {
        id: "q_bjt_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Thermal Runaway",
        question: "What is 'Thermal Runaway' in a BJT? Explain briefly how an emitter resistor RE stabilizes against it.",
        answerHint: "Thermal runaway is a destructive regenerative cycle in which a rise in ambient/junction temperature causes reverse leakage current ICBO to double every 10°C, increasing total collector current IC = β·IB + (1+β)·ICBO. Higher IC increases collector junction power dissipation (Pc ≈ VCE·IC), heating the transistor further until permanent thermal destruction. Stabilizing role of RE: If IC rises, the voltage drop across emitter resistor VE = IE·RE ≈ IC·RE increases. Since base voltage VB is fixed by bias dividers, base-emitter forward voltage drops: VBE = VB - VE = VB - IC·RE. A lower VBE sharply reduces base current IB, suppressing the rise in IC and restoring stability."
      },
      {
        id: "q_bjt_3",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "CE Configuration Advantages",
        question: "Why is the Common Emitter (CE) configuration most widely utilized for voltage, current, and power amplification compared to CB and CC configurations? Summarize their characteristics.",
        answerHint: "Engineering Reasons: (1) Provides both significant voltage gain (Av > 100) and high current gain (Ai ≈ β ≈ 100), yielding the highest overall power gain (Ap = Av · Ai); (2) Moderate input resistance Rin (~1 kΩ to 2 kΩ) and moderate output resistance Rout (~40 kΩ to 50 kΩ) facilitate easy multi-stage cascading without excessive inter-stage impedance mismatch loading; (3) CB provides current gain < 1 and very low input impedance (not suitable as standard voltage amplifier); CC (Emitter Follower) provides voltage gain < 1 (useful primarily as a buffer). CE phase shift is 180°."
      },
      {
        id: "q_bjt_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "DC Load Line & Q-Point",
        question: "Explain the concept of the DC Load Line and Quiescent (Q) operating point for a CE amplifier. Why is the Q-point ideally located at the center of the active region?",
        answerHint: "DC Load Line: Governed by output loop KVL: VCE = Vcc - IC·(RC + RE). It is a straight line drawn on the IC versus VCE transistor output characteristic curves connecting two boundary points: (1) Cutoff point: IC = 0, VCE = Vcc; (2) Saturation point: VCE = 0, IC(sat) = Vcc / (RC + RE). Q-Point: The intersection of the DC load line with the transistor output curve corresponding to the DC base bias current IBQ. Central Location: Placing Q at the exact center (VCEQ ≈ Vcc/2) allows symmetrical maximum peak-to-peak AC output voltage swing without clipping the upper peak into saturation or the lower peak into cutoff."
      },
      {
        id: "q_bjt_5",
        year: "CU 2023",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "Voltage Divider Bias Analysis",
        question: "A silicon NPN transistor (VBE = 0.7 V, β = 100) is biased in a CE amplifier circuit with Vcc = 15 V, R1 = 47 kΩ, R2 = 10 kΩ, RC = 2.2 kΩ, and RE = 1.0 kΩ. (a) Calculate Thevenin voltage Vth and Thevenin resistance Rth of the base bias network; (b) Determine quiescent collector current ICQ and collector-to-emitter voltage VCEQ; (c) Calculate dynamic emitter resistance re' and small-signal AC voltage gain Av assuming RE is fully bypassed by capacitor CE.",
        answerHint: "(a) Thevenin Analysis: Vth = Vcc · [R2 / (R1 + R2)] = 15 · [10 / (47 + 10)] = 15 · (10 / 57) = 2.632 V. Rth = R1 || R2 = (47 × 10) / (47 + 10) = 470 / 57 = 8.246 kΩ. (b) DC Operating Point: Base current IB = (Vth - VBE) / [Rth + (1 + β)·RE] = (2.632 - 0.7) / [8.246k + 101 × 1k] = 1.932 V / 109.246 kΩ = 0.01768 mA (17.68 μA). Collector current ICQ = β · IB = 100 × 0.01768 mA = 1.768 mA. Emitter current IEQ = 1.01 × 1.768 mA = 1.786 mA. Collector-Emitter Voltage: VCEQ = Vcc - ICQ·RC - IEQ·RE = 15 - (1.768m × 2.2k) - (1.786m × 1.0k) = 15 - 3.890 - 1.786 = 9.324 V. Since VCEQ (9.32 V) > VCE(sat) (0.2 V), transistor operates strictly in the active linear region. (c) AC Gain: re' = 26 mV / IEQ = 26 mV / 1.786 mA = 14.56 Ω. AC Voltage Gain: Av = - RC / re' = - 2200 Ω / 14.56 Ω = -151.1 (180° inverted)."
      }
    ],
    recommendedBooks: [
      "Microelectronic Circuits - Adel S. Sedra & Kenneth C. Smith (Oxford)",
      "Electronic Devices and Circuit Theory - Boylestad & Nashelsky",
      "Analysis and Design of Analog Integrated Circuits - Gray, Meyer, Hurst, Lewis"
    ]
  },

  // 4. Field Effect Transistor (FET)
  {
    id: "field_effect_transistor",
    slug: "field-effect-transistor",
    title: "Field Effect Transistor",
    shortTitle: "Field Effect Transistor",
    semester: "sem2",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Field Effect Transistor",
    officialSyllabus: "MOSFET Structure, Depletion and Enhancement Modes, Complimentary MOS (CMOS).",
    overview: "Covers MOSFET structure, depletion and enhancement modes, and complimentary MOS (CMOS) configurations.",
    learningObjectives: [
      "Contrast unipolar voltage-controlled FETs with bipolar current-controlled BJTs.",
      "Understand N-channel JFET structure, reverse-biased gate-channel depletion layer, and channel narrowing.",
      "Interpret JFET Drain characteristics (Ohmic region, Saturation/Pinch-off region, Breakdown) and Transfer characteristics.",
      "Apply Shockley's equation: ID = IDSS · (1 - VGS / VP)².",
      "Examine MOSFET structures (SiO2 dielectric layer, NMOS, PMOS, CMOS) and threshold voltage Vth.",
      "Design Common Source (CS) JFET self-bias circuits and calculate voltage gain Av = - gm · (RD || rd)."
    ],
    symbols: [
      {
        name: "N-Channel Enhancement MOSFET",
        standard: "IEEE Std 315",
        description: "Normally-OFF insulated gate FET forming an inversion channel only when gate voltage exceeds threshold VGS > Vth. Substrate arrow points INWARD.",
        symbolType: "n_mosfet",
        terminalNames: ["Gate (G)", "Drain (D)", "Source (S)", "Bulk/Body (B)"],
        keyFormula: "ID = k · (VGS - Vth)² in saturation mode",
        specs: "2N7000 / BS170 (Small Signal N-Channel E-MOSFET), IRF540 (Power MOSFET)"
      },
      {
        name: "P-Channel Enhancement MOSFET",
        standard: "IEEE Std 315",
        description: "Normally-OFF insulated gate FET where current is conducted by holes when VGS < Vth,p (negative gate). Substrate arrow points OUTWARD.",
        symbolType: "p_mosfet",
        terminalNames: ["Gate (G)", "Source (S)", "Drain (D)", "Bulk/Body (B)"],
        keyFormula: "ID = kp · (VGS - Vth,p)² in saturation mode",
        specs: "BS250 / TP2104 (Small Signal P-Channel E-MOSFET), IRF9540 (Power PMOS)"
      }
    ],
    circuits: [
      {
        id: "mosfet_basic_construction",
        title: "MOSFET Physical Construction: Cross-Sectional Structure & Inversion Layer",
        subtitle: "Metal/Poly gate, insulating SiO₂ layer (tox ~ 5-20 nm), N⁺ source/drain wells, and P-substrate.",
        description: "Physical cross-sectional architecture of an N-channel Enhancement MOSFET showing the capacitive field-effect mechanism. The gate electrode is physically insulated from the underlying Silicon body by a microscopic Silicon Dioxide (SiO₂) dielectric layer, producing an ultra-high input resistance Rin > 10¹² Ω and near-zero gate leakage current IG ≈ 0.",
        circuitType: "Insulated-Gate Semiconductor Structure",
        components: [
          "P-Type Silicon Substrate Body (Bulk, B)",
          "Source (N⁺ Heavily Doped Diffusion Well)",
          "Drain (N⁺ Heavily Doped Diffusion Well)",
          "Silicon Dioxide (SiO₂) Insulating Dielectric Layer (tox ~ 5-20 nm)",
          "Gate Electrode (Polysilicon / Metal Contact)",
          "Induced N-Channel Inversion Layer"
        ],
        keyOperation: [
          "Gate Dielectric Isolation: Thin native oxide SiO₂ creates a microscopic parallel-plate capacitor between Gate and Substrate. Static input resistance exceeds 10¹² to 10¹⁴ Ω.",
          "Electric Field & Inversion Layer: When a positive voltage VGS is applied to the gate, the vertical electric field repels majority holes away from the Si-SiO₂ interface, exposing immobile negative acceptor ions to form a depletion region.",
          "Threshold Voltage (Vth): When VGS surpasses the threshold voltage Vth (typically +1V to +2.5V), minority electrons from the substrate and N⁺ wells are drawn to the interface, inverting the p-surface into an n-type conductive channel connecting Source to Drain.",
          "Unipolar Conduction: Conduction is mediated exclusively by majority electrons drifting through the induced n-channel without minority carrier storage delay.",
          "Terminal Connections: Source and Drain are symmetrical N⁺ wells; Source is typically tied to the p-substrate (VBS = 0) to eliminate body effect."
        ],
        inputOutputRelation: "VGS < Vth → Channel OFF (ID = 0) · VGS > Vth → Inversion Layer Conducts ID",
        formula: "Oxide Capacitance: Cox = εox / tox ≈ 3.9 · ε0 / tox · Inversion Threshold: VGS ≥ Vth",
        cuExamTip: "CU Frequent Exam Question: Draw the basic physical cross-section of an N-channel enhancement MOSFET. Explain how the inversion layer is formed and define the threshold voltage."
      },
      {
        id: "mosfet_p_and_n_channel",
        title: "N-Channel vs P-Channel MOSFETs: Doping, Carrier Transport & IEEE Symbols",
        subtitle: "NMOS (High-Mobility Electron Conduction) vs PMOS (Hole Conduction, Pull-Up Complementary Partner).",
        description: "Comparative architecture and IEEE schematic symbols for N-channel and P-channel MOSFETs. NMOS utilizes high-mobility electrons in a p-substrate, while PMOS utilizes holes in an n-substrate (or N-well). The two types complement each other in CMOS integrated circuits.",
        circuitType: "Complementary Transistor Comparison",
        components: [
          "N-Channel E-MOSFET (NMOS: P-Substrate, N⁺ Wells, Inward Arrow)",
          "P-Channel E-MOSFET (PMOS: N-Substrate, P⁺ Wells, Outward Arrow / Bubble)"
        ],
        keyOperation: [
          "Carrier Mobility Difference: Electron mobility in Silicon (μn ≈ 1400 cm²/V·s) is roughly 2.5 to 3 times greater than hole mobility (μp ≈ 450 cm²/V·s). Hence, for identical dimensions, NMOS delivers 2.5× higher current drive and lower on-resistance RDS(on) than PMOS.",
          "Polarity Conventions: NMOS: Positive gate-to-source voltage (VGS > Vth,n > 0) turns the device ON. PMOS: Negative gate-to-source voltage (VGS < Vth,p < 0) turns the device ON.",
          "Substrate Arrows in IEEE Symbols: NMOS symbol has an inward substrate arrow (pointing from p-substrate toward n-channel). PMOS symbol has an outward substrate arrow (or an inversion circle at the gate).",
          "Complementary IC Pairing: PMOS serves as the high-side pull-up switch to VDD, and NMOS serves as the low-side pull-down switch to GND."
        ],
        inputOutputRelation: "NMOS: VGS > +Vth → ON · PMOS: VGS < -|Vth| → ON",
        formula: "Mobility Ratio: μn / μp ≈ 2.5 - 3.0 · Channel Transconductance: kn / kp ≈ μn / μp",
        cuExamTip: "CU Syllabus Question: Differentiate between N-channel and P-channel MOSFETs on the basis of doping profile, majority carriers, threshold voltage sign, and circuit symbols."
      },
      {
        id: "mosfet_enhancement_depletion",
        title: "Enhancement Mode vs Depletion Mode MOSFETs: Operating Physics & Transfer Curves",
        subtitle: "Normally-OFF (Enhancement, Broken Channel) vs Normally-ON (Depletion, Built-In Channel).",
        description: "Operating characteristics and transfer curves distinguishing Enhancement-Mode (normally OFF at VGS=0) and Depletion-Mode (normally ON at VGS=0) MOSFETs, explaining their mathematical equations and graphical transfer characteristics.",
        circuitType: "MOSFET Operating Modes",
        components: [
          "Enhancement MOSFET (No Built-In Channel, Dashed Channel Symbol)",
          "Depletion MOSFET (Diffused Physical Channel, Solid Channel Symbol)"
        ],
        keyOperation: [
          "Enhancement Mode (E-MOSFET): Fabricated without a physical channel. At zero gate bias (VGS = 0V), drain current is zero (normally OFF). Conduction occurs ONLY when |VGS| exceeds threshold |Vth| to induce an inversion channel.",
          "E-MOSFET Current Equation: In saturation (VDS ≥ VGS - Vth): ID = k · (VGS - Vth)², where conduction parameter k = (1/2) · μ · Cox · (W/L).",
          "Depletion Mode (D-MOSFET): Fabricated with a permanent, physically diffused conducting channel between Source and Drain. At zero gate bias (VGS = 0V), it conducts maximum saturation current IDSS (normally ON).",
          "D-MOSFET Dual-Mode Operation: (1) Depletion Mode: Applying negative VGS repels electrons, narrowing the channel and reducing ID (governed by Shockley's equation: ID = IDSS · (1 - VGS/VP)²). (2) Enhancement Mode: Applying positive VGS attracts additional electrons, enhancing channel conductivity beyond IDSS (ID > IDSS).",
          "Schematic Symbol Distinction: E-MOSFET uses a broken/dashed line representing the absent physical channel; D-MOSFET uses a solid continuous bar."
        ],
        inputOutputRelation: "E-MOSFET: ID = k(VGS - Vth)² (for VGS > Vth) · D-MOSFET: ID = IDSS(1 - VGS/VP)² (dual mode)",
        formula: "E-MOSFET: ID = k · (VGS - Vth)² · D-MOSFET: ID = IDSS · (1 - VGS/VP)²",
        cuExamTip: "CU Frequent Exam Question: Compare Enhancement mode and Depletion mode MOSFETs. Sketch their transfer characteristics and circuit symbols, explaining why D-MOSFET can operate in dual modes."
      },
      {
        id: "cmos_inverter_circuit",
        title: "Complementary MOS (CMOS): Inverter Circuit Schematic & Static Operation",
        subtitle: "PMOS Pull-Up + NMOS Pull-Down, Rail-to-Rail Output Swing, and Zero Static Power Dissipation.",
        description: "The fundamental building block of all modern digital logic and VLSI microprocessors: a complementary pair consisting of one PMOS pull-up transistor and one NMOS pull-down transistor driven by a common digital input. Achieves true rail-to-rail voltage swings (0V to VDD) and dissipates zero static power.",
        circuitType: "Complementary Digital Logic Inverter",
        components: [
          "PMOS Pull-Up Transistor (QP: Source to +VDD, Drain to VOUT)",
          "NMOS Pull-Down Transistor (QN: Drain to VOUT, Source to GND)",
          "Common Tied Digital Input (VIN)",
          "Common Digital Output (VOUT)",
          "DC Power Rail (+VDD: +3.3V / +5V)"
        ],
        keyOperation: [
          "Input LOW (VIN = 0V): NMOS QN gate-source voltage is VGS,N = 0V < Vth,N → QN is OFF (open circuit). PMOS QP gate-source voltage is VGS,P = 0 - VDD = -VDD < Vth,P → QP is ON (closed circuit). Output VOUT is pulled up to full rail: VOUT = VDD (Logic 1).",
          "Input HIGH (VIN = VDD): NMOS QN gate-source voltage is VGS,N = VDD > Vth,N → QN is ON (closed circuit). PMOS QP gate-source voltage is VGS,P = VDD - VDD = 0V → QP is OFF (open circuit). Output VOUT is pulled down to ground: VOUT = 0V (Logic 0).",
          "Zero Static Power Dissipation: In both steady states (0 or 1), exactly one transistor is always completely turned OFF in series. No direct DC path exists between VDD and GND, resulting in negligible static leakage power Pstatic = Ileakage · VDD ≈ 0 nW.",
          "Dynamic Power Dissipation: Power is consumed ONLY during logic transitions (charging and discharging the load capacitance CL): Pdynamic = CL · VDD² · f.",
          "Rail-to-Rail Output Swing: Delivers unattenuated full logic levels from 0V to VDD, guaranteeing exceptionally wide noise margins (NMH and NML ≈ 0.45 · VDD)."
        ],
        inputOutputRelation: "VIN = 0V (LOW) → VOUT = VDD (HIGH) · VIN = VDD (HIGH) → VOUT = 0V (LOW)",
        formula: "P_static = I_leakage · VDD ≈ 0  ·  P_dynamic = C_L · VDD² · f  ·  Noise Margin NM ≈ 0.45 · VDD",
        cuExamTip: "CU Favorite Exam Question: Draw the circuit diagram of a CMOS inverter and explain its working with a truth table. Why does a CMOS circuit consume virtually zero static power?"
      }
    ],
    theoreticalSections: [
      {
        id: "mosfet_basic_construction_theory",
        title: "MOSFET Basic Construction: Substrate, Gate Oxide (SiO2), Terminals & Inversion Layer",
        summary: "The Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) is a four-terminal unipolar voltage-controlled device where conduction between Source and Drain is modulated by an electric field across a thin insulating dielectric layer (SiO2).",
        keyPoints: [
          "Physical Structure & Materials: Constructed on a lightly doped silicon substrate (p-type for NMOS, n-type for PMOS). Two heavily doped regions with opposite polarity (N⁺ wells for NMOS) are diffused into the substrate to form Source and Drain contacts.",
          "Silicon Dioxide (SiO₂) Gate Dielectric: A microscopically thin layer of native SiO₂ (dielectric thickness tox ~ 2 to 20 nm) is thermally grown over the channel region. The gate electrode (conductive polysilicon or metal) is deposited directly on top of the oxide.",
          "Ultra-High Input Impedance: Because the gate is physically isolated from the semiconductor substrate by the oxide barrier, the DC gate resistance is exceptionally high (Rin > 10¹² to 10¹⁴ Ω), drawing near-zero DC input current (IG < 1 pA).",
          "Inversion Layer & Threshold Voltage (Vth): When gate voltage VGS exceeds the threshold voltage Vth, the transverse electric field repels majority holes from the substrate surface and attracts minority electrons, creating a thin, highly conductive n-type inversion layer connecting Source and Drain.",
          "Channel Length Modulation & Pinch-Off: At small drain-to-source voltage VDS, the channel behaves as an ohmic resistor. As VDS increases to (VGS - Vth), the voltage difference across the oxide at the drain end drops to Vth, pinching off the channel. For VDS > VGS - Vth, drain current saturates at a constant value independent of further VDS increases."
        ],
        circuitRef: "mosfet_basic_construction"
      },
      {
        id: "mosfet_p_and_n_channel_theory",
        title: "P-Channel and N-Channel MOSFETs: Doping Profiles, Carrier Mobilities & Symbols",
        summary: "MOSFETs are categorized into N-channel (NMOS) and P-channel (PMOS) according to channel carrier polarity, each with distinctive threshold voltages, transconductance parameters, and circuit symbols.",
        keyPoints: [
          "N-Channel MOSFET (NMOS): Built on a p-type substrate with heavily doped N⁺ source and drain diffusions. Current conduction is carried exclusively by free electrons in an induced n-inversion layer. Requires positive gate voltage: VGS > Vth,n > 0.",
          "P-Channel MOSFET (PMOS): Built on an n-type substrate (or N-well) with heavily doped P⁺ source and drain diffusions. Current conduction is carried exclusively by positive holes in an induced p-inversion layer. Requires negative gate voltage: VGS < Vth,p < 0.",
          "Carrier Mobility Advantage: Free electron mobility in silicon (μn ≈ 1400 cm²/V·s) is roughly 2.5 to 3 times higher than hole mobility (μp ≈ 450 cm²/V·s). Consequently, an NMOS transistor has roughly one-third the on-resistance and 3× higher switching speed compared to a PMOS transistor of identical physical dimensions.",
          "Sizing in Digital Design: In CMOS IC design, PMOS transistors are designed with 2 to 2.5 times larger channel width (Wp ≈ 2.5 · Wn) to equalize pull-up and pull-down switching propagation delays.",
          "IEEE Schematic Symbols: NMOS features an inward-pointing substrate arrow (indicating p-substrate to n-channel). PMOS features an outward-pointing substrate arrow (or an inverting circle at the gate terminal)."
        ],
        circuitRef: "mosfet_p_and_n_channel"
      },
      {
        id: "mosfet_enhancement_depletion_theory",
        title: "Enhancement Mode and Depletion Mode MOSFETs: Normally-OFF vs Normally-ON & Transfer Curves",
        summary: "MOSFETs operate in two distinct modes depending on whether a conductive channel is physically present at zero gate bias: Enhancement mode (normally OFF) and Depletion mode (normally ON with dual-mode operation).",
        keyPoints: [
          "Enhancement MOSFET (E-MOSFET): Fabricated without a physical channel between source and drain. At zero gate voltage (VGS = 0V), the device is completely non-conducting (normally OFF, ID = 0). A gate voltage greater than threshold (|VGS| > |Vth|) is mandatory to induce an inversion channel.",
          "E-MOSFET Transfer Characteristics: Curve starts at Vth on the horizontal VGS axis and increases parabolically according to ID = k · (VGS - Vth)². Symbol uses a 3-segment dashed channel line to represent the normally-open channel.",
          "Depletion MOSFET (D-MOSFET): Fabricated with a thin physical channel pre-diffused beneath the gate oxide during semiconductor wafer processing. At zero gate voltage (VGS = 0V), it conducts significant drain current ID = IDSS (normally ON).",
          "Dual-Mode Operation of D-MOSFET: (1) Depletion Mode: Applying negative gate voltage (VGS < 0) repels channel electrons, depleting the channel and reducing drain current below IDSS until pinch-off VP is reached. (2) Enhancement Mode: Applying positive gate voltage (VGS > 0) attracts additional electrons into the channel, enhancing conductivity so that ID > IDSS.",
          "Industrial Applications: E-MOSFETs dominate digital VLSI circuits, computer processors, and power switching due to safe normally-OFF operation. D-MOSFETs are employed in high-frequency RF amplifiers and constant-current sources."
        ],
        circuitRef: "mosfet_enhancement_depletion"
      },
      {
        id: "cmos_inverter_theory",
        title: "Complementary MOS (CMOS): Inverter Circuit Schematic, Operation & Static Power Dissipation",
        summary: "Complementary MOS (CMOS) technology pairs p-channel and n-channel MOSFETs on the same silicon die. The CMOS inverter is the fundamental logic building block, providing high noise margins, rail-to-rail swings, and zero static power dissipation.",
        keyPoints: [
          "Complementary Topology: Consists of a PMOS transistor (pull-up network) connected between +VDD and the output node, and an NMOS transistor (pull-down network) connected between the output node and ground. Both gates are tied together to form the common input VIN.",
          "Logic State Analysis: (1) When VIN = 0V (Logic 0): NMOS is OFF (VGS,N = 0 < Vth,N) while PMOS is ON (VGS,P = -VDD < Vth,P). The PMOS pulls VOUT up to +VDD (Logic 1). (2) When VIN = VDD (Logic 1): NMOS is ON (VGS,N = VDD > Vth,N) while PMOS is OFF (VGS,P = 0). The NMOS pulls VOUT down to GND (Logic 0).",
          "Zero Static Power Dissipation: Because one of the two transistors in series is strictly OFF during both steady logic states (0 or 1), no direct DC conduction path exists between VDD and ground. The static current is restricted to minute sub-threshold leakage (<1 nA), meaning static power Pstatic ≈ 0.",
          "Dynamic Power Dissipation: Electrical energy is consumed exclusively during logic switching transitions when charging and discharging load capacitance CL: Pdynamic = CL · VDD² · f. As clock frequency f rises, dynamic power increases linearly.",
          "Noise Margins & Switching Threshold: Due to the high gain in the transition region, the switching threshold voltage VM is centered near VDD / 2, conferring high noise immunity (noise margins NMH and NML are typically ~45% of VDD)."
        ],
        circuitRef: "cmos_inverter_circuit"
      }
    ],
    formulas: [
      {
        name: "E-MOSFET Saturation Current",
        formula: "I_D = k · (V_GS - V_th)² = ½ · μ_n · C_ox · (W/L) · (V_GS - V_th)²",
        explanation: "Drain current in Enhancement MOSFET when VGS > Vth and VDS ≥ VGS - Vth.",
        unit: "Amperes (A) or Milliamperes (mA)"
      },
      {
        name: "MOSFET Triode / Linear Current",
        formula: "I_D = μ_n · C_ox · (W/L) · [ (V_GS - V_th) · V_DS - ½ · V_DS² ]",
        explanation: "Current in Ohmic/Triode region where channel behaves as voltage-variable resistance (VDS < VGS - Vth).",
        unit: "Amperes (A)"
      },
      {
        name: "Gate Oxide Capacitance per Unit Area",
        formula: "C_ox = ε_ox / t_ox = (3.9 · ε₀) / t_ox",
        explanation: "Specific capacitance of the thin SiO2 dielectric gate insulation layer.",
        unit: "Farads / cm² (F/cm²)"
      },
      {
        name: "D-MOSFET Drain Current (Shockley)",
        formula: "I_D = I_DSS · (1 - V_GS / V_P)²",
        explanation: "Governs Depletion MOSFET drain current in both depletion and enhancement modes.",
        unit: "Amperes (A)"
      },
      {
        name: "CMOS Static Power Dissipation",
        formula: "P_static = I_leakage · V_DD ≈ 0",
        explanation: "Static power is negligible because one complementary transistor is always strictly OFF.",
        unit: "Watts (W, typically nW)"
      },
      {
        name: "CMOS Dynamic Power Dissipation",
        formula: "P_dynamic = C_L · V_DD² · f",
        explanation: "Power consumed during switching transitions charging and discharging output load capacitance CL at clock frequency f.",
        unit: "Watts (W or mW)"
      },
      {
        name: "Amplification Factor (μ)",
        formula: "μ = g_m · r_d",
        explanation: "Relationship linking transconductance gm, drain resistance rd, and amplification factor μ.",
        unit: "Dimensionless"
      }
    ],
    examQuestions: [
      {
        id: "q_fet_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Unipolar vs Bipolar",
        question: "Why is a Field Effect Transistor (FET) called a 'unipolar' device while a BJT is called 'bipolar'?",
        answerHint: "A FET is unipolar because electrical current conduction is carried exclusively by one single type of charge carrier (majority electrons in n-channel or majority holes in p-channel). In contrast, a BJT is bipolar because operation simultaneously depends on the injection and movement of both majority and minority charge carriers (electrons and holes)."
      },
      {
        id: "q_fet_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Shockley's Equation & Pinch-Off",
        question: "State Shockley's equation for a JFET and define the pinch-off voltage (Vp).",
        answerHint: "Shockley's Equation: ID = IDSS · [1 - (VGS / VP)]², valid in the saturation region when VDS ≥ VGS - VP. Here IDSS is saturation drain current at VGS = 0, and VP is pinch-off voltage. Pinch-Off Voltage (VP): The negative gate-to-source voltage at which the two depletion layers expand and touch across the conductive channel, reducing effective channel width to zero and causing drain current to level off at a constant saturated value."
      },
      {
        id: "q_fet_3",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "BJT vs FET Comparison",
        question: "Compare BJT and FET on the basis of: (a) Input Impedance, (b) Temperature Stability, (c) Control Mechanism, and (d) Noise Level.",
        answerHint: "(a) Input Impedance: BJT has low-to-moderate input impedance (~1 kΩ - 5 kΩ) because base-emitter junction is forward biased; FET has extremely high input impedance (JFET: 10⁸ Ω; MOSFET: 10¹² - 10¹⁴ Ω) due to reverse-biased or SiO2-insulated gate. (b) Temperature Stability: BJT suffers from thermal runaway (positive temp coefficient for IC); FET has negative temperature coefficient at high current, making it inherently thermally stable without runaway. (c) Control Mechanism: BJT is a current-controlled device (IC = β·IB); FET is a voltage-controlled device (ID controlled by electric field of VGS). (d) Noise Level: FET generates much lower electrical noise than BJT because of absence of junction carrier recombination."
      },
      {
        id: "q_fet_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "JFET Characteristics",
        question: "Sketch the drain characteristics (ID vs VDS) and transfer characteristics (ID vs VGS) of an N-channel JFET. Clearly label the Ohmic region, Pinch-Off locus, Saturation region, and Breakdown region.",
        answerHint: "Drain Characteristics (ID vs VDS): (1) Ohmic Region (small VDS): channel acts as a linear voltage-variable resistor; (2) Pinch-Off Locus: locus of points where VDS = VGS - VP; (3) Saturation / Active Region (VDS > VGS - VP): drain current is independent of VDS and stays constant at ID; (4) Breakdown Region: avalanche multiplication causes rapid surge in current. Transfer Characteristics (ID vs VGS): Follows parabolic curve ID = IDSS·(1 - VGS/VP)², showing maximum current IDSS at VGS = 0 and zero current at VGS = VP."
      },
      {
        id: "q_fet_5",
        year: "CU 2023",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "JFET Calculations & Transconductance",
        question: "An n-channel JFET has maximum saturation current IDSS = 12 mA and pinch-off voltage VP = -4.0 V. (a) Calculate the drain current ID for gate-source voltages VGS = 0 V, -1.0 V, -2.0 V, -3.0 V, and -4.0 V; (b) Determine the transconductance at zero bias (gm0); (c) Calculate the transconductance gm at VGS = -1.5 V.",
        answerHint: "(a) Using Shockley's equation ID = IDSS · [1 - (VGS / VP)]²: (1) VGS = 0 V: ID = 12 · [1 - 0]² = 12.0 mA; (2) VGS = -1.0 V: ID = 12 · [1 - (-1.0)/(-4.0)]² = 12 · (0.75)² = 12 × 0.5625 = 6.75 mA; (3) VGS = -2.0 V: ID = 12 · [1 - (-2.0)/(-4.0)]² = 12 · (0.5)² = 3.0 mA; (4) VGS = -3.0 V: ID = 12 · [1 - (-3.0)/(-4.0)]² = 12 · (0.25)² = 0.75 mA; (5) VGS = -4.0 V: ID = 12 · [1 - (-4.0)/(-4.0)]² = 0 mA. (b) Transconductance at VGS = 0: gm0 = 2 · IDSS / |VP| = (2 × 12 mA) / 4.0 V = 24 mA / 4 V = 6.0 mS (or 6000 μmhos). (c) Transconductance at VGS = -1.5 V: gm = gm0 · [1 - (VGS / VP)] = 6.0 mS · [1 - (-1.5)/(-4.0)] = 6.0 · [1 - 0.375] = 6.0 × 0.625 = 3.75 mS."
      }
    ],
    recommendedBooks: [
      "Electronic Devices and Circuit Theory - Boylestad & Nashelsky",
      "Microelectronic Circuits - Sedra & Smith",
      "Semiconductor Physics and Devices - Donald A. Neamen"
    ]
  },

  // 5. Operational Amplifiers and Its Applications
  {
    id: "operational_amplifiers_applications",
    slug: "operational-amplifiers-applications",
    title: "Operational Amplifiers and Its Applications",
    shortTitle: "Op-Amps & Applications",
    semester: "sem2",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Operational Amplifiers and Its Applications",
    officialSyllabus: "Op-Amp and its Characteristics (Ideal and practical), Open and Closed Loop Configuration, Concept of virtual ground, Inverting, Non-Inverting, Summing and Difference Amplifiers.",
    overview: "Covers Op-Amp and its characteristics (ideal and practical), open and closed loop configuration, concept of virtual ground, inverting, non-inverting, summing, and difference amplifiers.",
    learningObjectives: [
      "Identify the 8 golden characteristics of an Ideal Op-Amp (infinite AOL, infinite Zin, zero Zout, infinite CMRR, infinite Bandwidth, zero Offset).",
      "Understand the Virtual Ground / Virtual Short concept and its mathematical origin (AOL → ∞).",
      "Derive closed-loop voltage gain expressions for Inverting (Av = -Rf/R1) and Non-Inverting (Av = 1 + Rf/R1) amplifiers.",
      "Analyze analog mathematical computation circuits: Weighted Summer, Subtractor / Instrumentation, Ideal and Practical Integrator, Differentiator.",
      "Examine non-linear open-loop circuits: Zero-crossing comparator and Schmitt trigger with hysteresis loop (UTP, LTP)."
    ],
    symbols: [
      {
        name: "Operational Amplifier (Op-Amp)",
        standard: "IEEE Std 315",
        description: "High-gain direct-coupled differential amplifier with two high-impedance inputs and a single ground-referenced output.",
        symbolType: "opamp",
        terminalNames: ["Inverting Input (-)", "Non-Inverting Input (+)", "Output (Vout)", "Positive Supply (+Vcc)", "Negative Supply (-Vee)"],
        keyFormula: "Vout = AOL · (V+ - V-), with negative feedback: V+ ≈ V-",
        specs: "LM741 (General Purpose BJT), LM358 (Dual Supply), TL082 (JFET Input)"
      }
    ],
    circuits: [
      {
        id: "opamp_inverting",
        title: "Op-Amp Inverting Amplifier & Summing Circuit",
        subtitle: "Negative feedback closed-loop amplifier with virtual ground at the inverting terminal.",
        description: "Because the open-loop gain AOL of an ideal Op-Amp is infinite, the differential input voltage Vd = (V+ - V-) = Vout / AOL = 0. Since the non-inverting terminal is tied to 0V ground (V+ = 0), the inverting terminal sits at virtual ground (V- = 0V). No current enters the input terminal (Zin = ∞), so input current I1 flows entirely through feedback resistor Rf.",
        circuitType: "Negative Feedback Linear Op-Amp Circuit",
        components: ["IC 741 Op-Amp", "Input Resistor R1", "Feedback Resistor Rf", "Dual DC Power Supply (±15V)"],
        keyOperation: [
          "Virtual Ground: V- node is constrained to 0V by negative feedback without physical connection to ground.",
          "Current Balancing: By KCL at inverting node: I_in + I_f = 0 → (Vin - 0)/R1 + (Vout - 0)/Rf = 0.",
          "Gain Derivation: Vout / Vin = - Rf / R1. The negative sign denotes 180° phase inversion.",
          "Input Impedance: Input impedance of the inverting amplifier is equal to R1 (Zin = R1)."
        ],
        inputOutputRelation: "Vout = - (Rf / R1) · Vin",
        formula: "Voltage Gain Av = - Rf / R1 · Bandwidth with feedback BW_CL = Unity-Gain Bandwidth / |Av|",
        cuExamTip: "CU Essential: Explain why virtual ground does not mean physical ground (no physical connection exists; it is held at 0V by feedback action)."
      },
      {
        id: "opamp_non_inverting",
        title: "Non-Inverting Operational Amplifier Circuit with Variable Gain",
        subtitle: "Zero phase shift amplifier with input applied to (+) terminal and negative feedback network.",
        description: "An operational amplifier configured in non-inverting mode where input voltage Vin is applied directly to the high-impedance (+) non-inverting terminal. Feedback resistor Rf and grounded resistor R1 establish negative feedback to the (-) inverting terminal. By the virtual short concept (V+ = V- = Vin), output voltage is strictly in-phase with input and amplified by Av = 1 + (Rf / R1) ≥ 1.",
        circuitType: "Negative Feedback Linear Amplifier",
        components: [
          "Operational Amplifier IC 741",
          "Input Signal Source (Vin applied to pin 3 non-inverting input)",
          "Feedback Resistor (Rf = 10 kΩ)",
          "Ground Resistor (R1 = 1 kΩ to pin 2 inverting input)",
          "Dual DC Power Supply (±15V Rails)"
        ],
        keyOperation: [
          "Virtual Short Principle: Infinite open-loop gain AOL → ∞ forces differential input voltage Vd = (V+ - V-) = 0, so inverting terminal voltage tracks input: V- = V+ = Vin.",
          "Input Terminal Current: Op-Amp input resistance is near-infinite (Zin,diff > 2 MΩ for 741, > 10¹² Ω for FET-input), drawing zero input current (I+ = I- = 0).",
          "Voltage Divider Feedback: Voltage at inverting node is V- = Vout · [R1 / (R1 + Rf)]. Equating V- = Vin yields: Vin = Vout · [R1 / (R1 + Rf)].",
          "Closed-Loop Voltage Gain: Av = Vout / Vin = 1 + (Rf / R1). Gain is always strictly ≥ 1 and completely independent of Op-Amp open-loop gain parameters.",
          "Phase Relationship: Output waveform is strictly in-phase (0° phase shift) with input waveform.",
          "Ultra-High Input Impedance: Closed-loop input impedance is Zin,CL = Zin · (1 + AOL · β) ≈ hundreds of Megaohms, eliminating source loading."
        ],
        inputOutputRelation: "Vout(t) = (1 + Rf / R1) · Vin(t)",
        formula: "Voltage Gain Av = 1 + (Rf / R1)  ·  Closed-Loop Zin = Zin,open · (1 + AOL · β)  ·  Phase Shift: 0°",
        cuExamTip: "CU Favorite Exam Question: Draw the circuit diagram of a non-inverting Op-Amp amplifier. Using the virtual short concept, derive the expression for closed-loop voltage gain Av = 1 + (Rf / R1)."
      },
      {
        id: "opamp_summing",
        title: "Inverting Summing Amplifier (Analog Adder) Circuit",
        subtitle: "Weighted analog summation of multiple input signals at the virtual ground node.",
        description: "An operational amplifier circuit performing linear analog mathematical addition. Multiple input voltages (V1, V2, V3) are applied through individual input resistors (R1, R2, R3) to the common inverting terminal node S. Because the non-inverting terminal is grounded, node S is held at virtual ground (VS = 0V). The currents sum algebraically at node S without inter-channel crosstalk, producing an inverted weighted sum across feedback resistor Rf.",
        circuitType: "Analog Computing Summing Circuit",
        components: [
          "Operational Amplifier IC 741",
          "3 Input Resistors (R1 = 10 kΩ, R2 = 10 kΩ, R3 = 10 kΩ)",
          "Feedback Resistor (Rf = 10 kΩ)",
          "3 Independent DC/AC Signal Generators (V1, V2, V3)",
          "Dual DC Power Supply (±15V Rails)"
        ],
        keyOperation: [
          "Virtual Ground Summing Node: Non-inverting terminal is tied to 0V ground (V+ = 0). Feedback constrains inverting node S to virtual ground: VS = 0V.",
          "Input Branch Currents: By Ohm's law, each input current is determined solely by its own source: I1 = V1 / R1, I2 = V2 / R2, I3 = V3 / R3. No interaction or crosstalk occurs between inputs because node S sits at 0V.",
          "Kirchhoff's Current Law at Node S: Since Op-Amp input draws no current (I_in = 0), all input currents must flow through feedback resistor Rf: I1 + I2 + I3 + If = 0 → (V1/R1) + (V2/R2) + (V3/R3) + (Vout/Rf) = 0.",
          "General Summing Formula: Vout = - Rf · [ (V1 / R1) + (V2 / R2) + (V3 / R3) ].",
          "Inverting Adder (R1 = R2 = R3 = Rf = R): Vout = - (V1 + V2 + V3).",
          "Analog Averaging Amplifier (R1 = R2 = R3 = R, Rf = R/3): Vout = - (V1 + V2 + V3) / 3."
        ],
        inputOutputRelation: "Vout = - Rf · [ (V1 / R1) + (V2 / R2) + (V3 / R3) ]",
        formula: "General: Vout = - ∑ (Rf / Rk) · Vk  ·  Equal Resistors: Vout = - (Rf / R) · ∑ Vk  ·  Adder: Vout = - ∑ Vk",
        cuExamTip: "CU Frequent Exam Question: Derive the output voltage equation of a 3-input inverting summing amplifier using Kirchhoff's Current Law. State the resistor condition under which it acts as an analog averager."
      },
      {
        id: "opamp_voltage_follower",
        title: "Op-Amp Voltage Follower (Unity Gain Buffer)",
        subtitle: "100% negative feedback with Av = 1, infinite input impedance, and zero output impedance.",
        description: "A specialized non-inverting operational amplifier circuit with 100% negative feedback achieved by tying the output directly back to the inverting input with a zero-ohm short circuit (Rf = 0, R1 = ∞). The output voltage exactly equals and tracks the input voltage (Vout = Vin, Av = 1). Used universally as an impedance-matching buffer to connect high-impedance sensors to low-impedance circuits without signal degradation.",
        circuitType: "Impedance Isolation Buffer",
        components: [
          "Operational Amplifier IC 741 / TL082",
          "Zero-Ohm Feedback Wire Loop (connecting output pin 6 to inverting input pin 2)",
          "Input Signal applied directly to non-inverting pin 3",
          "Dual DC Power Supply (±15V Rails)"
        ],
        keyOperation: [
          "Unity Voltage Gain: From non-inverting gain Av = 1 + (Rf / R1), substituting Rf = 0 Ω and R1 = ∞ yields: Av = 1 + 0 = 1.000. Hence, Vout = Vin.",
          "Virtual Short Tracking: Virtual short action maintains V- = V+ = Vin. Output is connected directly to V-, forcing Vout = Vin instantaneously.",
          "Infinite Input Resistance: Closed-loop input resistance is extremely high (Zin > 10¹² Ω for JFET/CMOS input Op-Amps). Draws virtually zero current from the signal source.",
          "Near-Zero Output Resistance: Negative feedback divides internal output resistance by loop gain: Zout = Ro / (1 + AOL) < 0.01 Ω. Can source/sink substantial current into low-impedance cables without voltage drop.",
          "Zero Phase Shift: Output waveform is an exact, unattenuated, in-phase replica of the input waveform (0° phase shift).",
          "Bandwidth: Operates at the maximum possible closed-loop bandwidth equal to the Unity-Gain Bandwidth (UGB) of the Op-Amp (typically 1 MHz for 741, 4 MHz for TL082)."
        ],
        inputOutputRelation: "Vout(t) = Vin(t)  (Av = 1.000, Phase Shift = 0°)",
        formula: "Voltage Gain Av = 1  ·  Zin → ∞ (> 10¹² Ω)  ·  Zout → 0 (< 0.01 Ω)  ·  Bandwidth = fT (Unity-Gain BW)",
        cuExamTip: "CU Frequent Exam Question: What is a Voltage Follower? Draw its circuit diagram, derive its voltage gain, and state two essential engineering reasons why it is utilized as an isolation buffer."
      }
    ],
    theoreticalSections: [
      {
        id: "ideal_opamp_characteristics",
        title: "Ideal vs Practical IC 741 Characteristics & Golden Rules",
        summary: "An Op-Amp is a versatile integrated circuit designed originally for analog mathematical operations (addition, subtraction, integration, differentiation).",
        keyPoints: [
          "Open Loop Gain AOL: Ideal = ∞; Practical 741 ≈ 2 × 10⁵ (106 dB).",
          "Input Impedance Zin: Ideal = ∞; Practical 741 ≈ 2 MΩ (FET-input Op-Amps reach 10¹² Ω).",
          "Output Impedance Zout: Ideal = 0; Practical 741 ≈ 75 Ω.",
          "Common Mode Rejection Ratio (CMRR): Ideal = ∞; Practical 741 ≈ 90 dB (rejects common-mode noise).",
          "Slew Rate: Maximum rate of change of output voltage (Ideal = ∞; Practical 741 = 0.5 V/μs).",
          "Virtual Ground & Virtual Short: Originates from AOL → ∞: Vd = V+ - V- = Vout / AOL = 0. Negative feedback forces V- = V+ without physical connection."
        ],
        circuitRef: "opamp_inverting"
      },
      {
        id: "opamp_non_inverting_section",
        title: "Non-Inverting Amplifier: Circuit Diagram, Virtual Short Derivation & Voltage Gain",
        summary: "The non-inverting amplifier applies input voltage directly to the (+) terminal while feeding a fraction of output voltage back to the (-) terminal, producing amplified in-phase output with Av ≥ 1.",
        keyPoints: [
          "Circuit Topology: Input Vin is fed to (+) terminal; feedback resistor Rf connects from output to (-) terminal, and resistor R1 connects from (-) terminal to ground.",
          "Virtual Short Analysis: Since AOL → ∞ and feedback is negative, differential input voltage is zero: Vd = V+ - V- = 0 → V- = V+ = Vin.",
          "Current Equation: Input terminal draws zero current (I_in = 0). The current through R1 is I1 = (V- - 0) / R1 = Vin / R1. By KCL, this exact current must flow through Rf: If = I1.",
          "Output Voltage Derivation: Vout = V- + If · Rf = Vin + (Vin / R1) · Rf = Vin · (1 + Rf / R1).",
          "Closed-Loop Gain: Av = Vout / Vin = 1 + (Rf / R1). Gain is always positive and strictly ≥ 1. Phase shift is 0° (in-phase).",
          "Input Impedance: Extremely high (typically hundreds of MΩ to GΩ) because source connects directly into the non-inverting gate terminal."
        ],
        circuitRef: "opamp_non_inverting"
      },
      {
        id: "opamp_summing_section",
        title: "Inverting Summing Amplifier: Circuit Diagram, KCL Derivation & Weighted Addition",
        summary: "The summing amplifier sums multiple independent input voltages with predetermined gain weightings at the inverting virtual ground node.",
        keyPoints: [
          "Circuit Topology: Inputs V1, V2, V3 are connected through resistors R1, R2, R3 to the inverting input node S. Non-inverting input is grounded (V+ = 0V). Feedback resistor Rf connects output to node S.",
          "Virtual Ground Summing Junction: Since V+ = 0V, negative feedback maintains node S at virtual ground (VS = 0V). Currents from individual input branches do not interfere with each other.",
          "Kirchhoff's Current Law at Node S: I1 + I2 + I3 + If = 0 → (V1 / R1) + (V2 / R2) + (V3 / R3) + (Vout / Rf) = 0.",
          "Output Voltage Expression: Vout = - Rf · [ (V1 / R1) + (V2 / R2) + (V3 / R3) ]. Each input contributes proportionally to the gain ratio (Rf / Rk).",
          "Special Case - Pure Inverting Adder: When R1 = R2 = R3 = Rf = R, output is the direct inverted sum: Vout = - (V1 + V2 + V3).",
          "Special Case - Averaging Amplifier: When R1 = R2 = R3 = R and Rf = R / n (where n is number of inputs), output is the inverted mathematical average: Vout = - (V1 + V2 + V3) / 3."
        ],
        circuitRef: "opamp_summing"
      },
      {
        id: "opamp_voltage_follower_section",
        title: "Voltage Follower (Buffer): Circuit Diagram, Unity Gain & Impedance Isolation",
        summary: "The voltage follower is a non-inverting amplifier with 100% negative feedback (Rf = 0, R1 = ∞) providing unity voltage gain (Av = 1), near-infinite input impedance, and near-zero output impedance.",
        keyPoints: [
          "Circuit Topology: Input Vin is connected to non-inverting terminal (+). Output Vout is connected directly back to inverting terminal (-) with a zero-ohm wire link.",
          "Unity Gain Proof: In the non-inverting gain equation Av = 1 + (Rf / R1), setting Rf = 0 and R1 = ∞ yields: Av = 1 + 0 = 1.000. Hence, Vout = Vin.",
          "Impedance Transformation (Buffer Action): Provides ultra-high input impedance Zin > 10¹² Ω and near-zero output impedance Zout < 0.01 Ω.",
          "Elimination of Loading Effect: When a high-impedance transducer or potential divider is connected directly to a heavy load, voltage drops dramatically. Placing a voltage follower between source and load completely eliminates loading effects.",
          "Maximum Bandwidth: Operates at the full unity-gain bandwidth (UGB) of the Op-Amp with zero phase shift."
        ],
        circuitRef: "opamp_voltage_follower"
      },
      {
        id: "opamp_applications",
        title: "Additional Linear & Non-Linear Op-Amp Applications",
        summary: "Depending on feedback components, Op-Amps perform diverse mathematical, filtering, and switching operations.",
        keyPoints: [
          "Integrator: Resistor R at input, Capacitor C in feedback: Vout(t) = - 1/(RC) ∫ Vin(t) dt. (A practical integrator places a shunt resistor Rf across C to prevent DC saturation).",
          "Differentiator: Capacitor C at input, Resistor R in feedback: Vout(t) = - RC · (dVin/dt).",
          "Schmitt Trigger: Positive feedback comparator creating an upper threshold voltage (UTP) and lower threshold voltage (LTP) to eliminate noise jitter."
        ]
      }
    ],
    formulas: [
      {
        name: "Inverting Amplifier Gain",
        formula: "V_out = - (R_f / R_1) · V_in",
        explanation: "Closed loop voltage gain of inverting configuration.",
        unit: "Volts (V)"
      },
      {
        name: "Non-Inverting Amplifier Gain",
        formula: "V_out = (1 + R_f / R_1) · V_in",
        explanation: "Closed loop gain of non-inverting amplifier (gain is always ≥ 1).",
        unit: "Volts (V)"
      },
      {
        name: "Voltage Follower Gain & Output",
        formula: "V_out = V_in  and  A_v = 1.000",
        explanation: "Unity gain buffer output with 100% negative feedback (Rf = 0, R1 = ∞).",
        unit: "Volts (V)"
      },
      {
        name: "Summing Amplifier Output",
        formula: "V_out = - [ (R_f/R_1)·V₁ + (R_f/R_2)·V₂ + (R_f/R_3)·V₃ ]",
        explanation: "Weighted analog summation of multiple input DC or AC voltages.",
        unit: "Volts (V)"
      },
      {
        name: "Analog Averager Output",
        formula: "V_out = - (V₁ + V₂ + ... + V_n) / n  (when R_f = R / n)",
        explanation: "Inverted average of n inputs when each input resistor is R and feedback resistor is R/n.",
        unit: "Volts (V)"
      },
      {
        name: "Ideal Op-Amp Integrator",
        formula: "V_out(t) = - (1 / (R · C)) · ∫₀ᵗ V_in(τ) dτ + V_initial",
        explanation: "Output voltage is proportional to the mathematical integral of the input signal.",
        unit: "Volts (V)"
      },
      {
        name: "Common Mode Rejection Ratio",
        formula: "CMRR = 20 · log₁₀(|A_d / A_c|)",
        explanation: "Ratio of differential gain Ad to common-mode gain Ac expressing noise rejection ability.",
        unit: "Decibels (dB)"
      }
    ],
    examQuestions: [
      {
        id: "q_op_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Ideal Op-Amp Characteristics",
        question: "State four golden characteristics of an Ideal Operational Amplifier (Op-Amp).",
        answerHint: "Four ideal parameters: (1) Infinite Open-Loop Voltage Gain (AOL = ∞); (2) Infinite Input Impedance (Zin = ∞, drawing zero input current); (3) Zero Output Impedance (Zout = 0 Ω, behaving as ideal voltage source); (4) Infinite Common Mode Rejection Ratio (CMRR = ∞, rejecting all common-mode noise)."
      },
      {
        id: "q_op_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Virtual Ground Concept",
        question: "Explain the concept of 'Virtual Ground' in an inverting operational amplifier. Why is it termed 'virtual'?",
        answerHint: "Because the open loop gain AOL is virtually infinite, the differential input voltage Vd = (V+ - V-) = Vout / AOL ≈ 0. Since the non-inverting terminal (+) is physically grounded (V+ = 0 V), the inverting terminal (-) is held at 0 V potential: V- = 0 V. It is called 'virtual' because no physical wire connects the inverting terminal to ground; it is maintained at ground potential strictly by the action of negative feedback."
      },
      {
        id: "q_op_3",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Inverting vs Non-Inverting Derivation",
        question: "Derive the closed-loop voltage gain expression for: (a) An Inverting Op-Amp amplifier, and (b) A Non-Inverting Op-Amp amplifier, using the virtual ground / virtual short concept.",
        answerHint: "(a) Inverting: Non-inverting input is grounded (V+ = 0). By virtual ground, V- = 0. By KCL at inverting node: (Vin - 0)/R1 + (Vout - 0)/Rf = 0 → Vin/R1 = - Vout/Rf → Av = Vout / Vin = - Rf / R1. (b) Non-Inverting: Vin is applied to non-inverting input (V+ = Vin). By virtual short, V- = Vin. The feedback resistors form a voltage divider: V- = Vout · [R1 / (R1 + Rf)]. Equating V- to Vin gives: Vin = Vout · [R1 / (R1 + Rf)] → Av = Vout / Vin = 1 + (Rf / R1)."
      },
      {
        id: "q_op_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Voltage Follower / Buffer",
        question: "Draw the circuit diagram of an Op-Amp Voltage Follower (Unity-Gain Buffer). Show that its voltage gain is unity (Av = 1) and state two vital applications.",
        answerHint: "Circuit: Output terminal is connected directly back to the inverting input (-) with zero resistance (Rf = 0, R1 = ∞), and input signal Vin is applied to non-inverting input (+). Voltage Gain: By non-inverting gain formula Av = 1 + (Rf / R1) = 1 + 0 = 1, so Vout = Vin. Applications: (1) High-to-low impedance buffer: converts extremely high sensor source impedance to low driving impedance without signal voltage loss; (2) Prevents loading effect between successive analog circuit stages."
      },
      {
        id: "q_op_5",
        year: "CU 2023",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "Op-Amp Summing Amplifier Design",
        question: "Design an inverting summing amplifier using an IC 741 Op-Amp to produce the output: Vo = - (2 V1 + 3 V2 + 5 V3). (a) Draw the schematic circuit diagram; (b) If the feedback resistor is chosen as Rf = 30 kΩ, determine the exact values of input resistors R1, R2, and R3; (c) If V1 = 1.0 V, V2 = -0.5 V, and V3 = 0.8 V, calculate the resulting output voltage Vo.",
        answerHint: "(a) Schematic: Connect inputs V1, V2, V3 through resistors R1, R2, R3 to the inverting input (-). Connect Rf from output to inverting input. Ground the non-inverting input (+). (b) Governing equation of inverting summer: Vo = - [ (Rf/R1)·V1 + (Rf/R2)·V2 + (Rf/R3)·V3 ]. Comparing coefficients: (1) Rf/R1 = 2 → R1 = Rf / 2 = 30 kΩ / 2 = 15 kΩ; (2) Rf/R2 = 3 → R2 = Rf / 3 = 30 kΩ / 3 = 10 kΩ; (3) Rf/R3 = 5 → R3 = Rf / 5 = 30 kΩ / 5 = 6 kΩ. (c) Output Calculation: Vo = - [ 2 × (1.0) + 3 × (-0.5) + 5 × (0.8) ] = - [ 2.0 - 1.5 + 4.0 ] = - [ 4.5 V ] = -4.5 V. (Check: within ±15V DC rail supplies, linear operation confirmed)."
      }
    ],
    recommendedBooks: [
      "Op-Amps and Linear Integrated Circuits - Ramakant A. Gayakwad (Prentice Hall)",
      "Design with Operational Amplifiers and Analog Integrated Circuits - Sergio Franco",
      "Linear Integrated Circuits - D. Roy Choudhury & Shail B. Jain"
    ]
  },

  // 6. Digital Logic Circuits
  {
    id: "digital_logic_circuits",
    slug: "digital-logic-circuits",
    title: "Digital Logic Circuits",
    shortTitle: "Digital Logic",
    semester: "sem3",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Digital Logic Circuits",
    officialSyllabus: "Number Systems (Binary, Decimal, Hexadecimal), Addition and Subtraction (using 1’s and 2’s complement method) of Binary Numbers, Basic Postulates and Fundamental Theorems of Boolean Algebra, De Morgan’s Theorems, Logic Symbol and Truth Tables of Basic Logic Gates (AND, OR, NOT), Derived Logic Gates (NAND, NOR, XOR and XNOR), Universal Property of NOR and NAND gates, Karnaugh Map Simplification (up to 4 Variables), Half-Adder and Full-Adder Circuits, Multiplexer, de-Multiplexer, SR, JK, D and T Flip Flops (Truth Table Only).",
    overview: "Covers number systems (binary, decimal, hexadecimal), addition and subtraction (using 1's and 2's complement method) of binary numbers, basic postulates and fundamental theorems of Boolean algebra, De Morgan's theorems, logic symbols and truth tables of basic logic gates (AND, OR, NOT), derived logic gates (NAND, NOR, XOR, XNOR), universal property of NOR and NAND gates, Karnaugh map simplification (up to 4 variables), half-adder and full-adder circuits, multiplexer, de-multiplexer, and SR, JK, D, T flip-flops (truth table only).",
    learningObjectives: [
      "Master binary, octal, hexadecimal representations, and 1's & 2's complement signed arithmetic.",
      "Prove De Morgan's Laws: (A + B)' = A' · B' and (A · B)' = A' + B'.",
      "Implement fundamental Boolean expressions exclusively using Universal NAND and NOR gates.",
      "Synthesize Combinational Circuits: Half Adder, Full Adder (using 2 Half Adders + OR gate), and 4:1 Multiplexer.",
      "Analyze Sequential Circuits: Simple SR, JK, D, and T Flip-Flops (circuit schematics with gates, operation, and truth tables)."
    ],
    symbols: [
      {
        name: "AND Gate (Logical Conjunction)",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Fundamental basic logic gate yielding output HIGH (1) if and only if both input A and input B are HIGH (1). Corresponds to series switches in electrical relays.",
        symbolType: "and_gate",
        terminalNames: ["Input A", "Input B", "Output Y = A · B"],
        keyFormula: "Y = A · B  (Truth Table: 0·0=0, 0·1=0, 1·0=0, 1·1=1)",
        specs: "7408 Quad 2-Input AND Gate IC (TTL), 74HC08 (CMOS)"
      },
      {
        name: "OR Gate (Logical Disjunction)",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Fundamental basic logic gate yielding output HIGH (1) if either input A or input B (or both) are HIGH (1). Output is LOW (0) strictly when both inputs are 0. Corresponds to parallel switches.",
        symbolType: "or_gate",
        terminalNames: ["Input A", "Input B", "Output Y = A + B"],
        keyFormula: "Y = A + B  (Truth Table: 0+0=0, 0+1=1, 1+0=1, 1+1=1)",
        specs: "7432 Quad 2-Input OR Gate IC (TTL), 74HC32 (CMOS)"
      },
      {
        name: "NOT Gate (Logic Inverter)",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Single-input unary logic gate producing inverted logical complement of the applied input. When input is 0, output is 1; when input is 1, output is 0.",
        symbolType: "not_gate",
        terminalNames: ["Input A", "Output Y = A' (Ā)"],
        keyFormula: "Y = A'  (Truth Table: 0 → 1, 1 → 0  ·  Double Inversion: (A')' = A)",
        specs: "7404 Hex Inverter IC (TTL), 74HC04 (CMOS)"
      },
      {
        name: "Universal NAND Gate",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Universal logic gate producing output LOW (0) strictly when all its inputs are HIGH (1). Any Boolean circuit can be synthesized using NAND gates alone.",
        symbolType: "nand_gate",
        terminalNames: ["Input A", "Input B", "Output Y = (A · B)'"],
        keyFormula: "Y = (A · B)' = A' + B' (De Morgan)",
        specs: "7400 Quad 2-Input NAND IC (TTL), 74HC00 (CMOS)"
      },
      {
        name: "Universal NOR Gate",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Universal logic gate producing output HIGH (1) strictly when all its inputs are LOW (0). Any Boolean circuit can be synthesized using NOR gates alone.",
        symbolType: "nor_gate",
        terminalNames: ["Input A", "Input B", "Output Y = (A + B)'"],
        keyFormula: "Y = (A + B)' = A' · B' (De Morgan)",
        specs: "7402 Quad 2-Input NOR IC (TTL), 74HC02 (CMOS)"
      },
      {
        name: "XOR Gate (Exclusive-OR)",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Inequality detector producing output HIGH (1) when inputs are different (odd parity). Essential building block of binary adders and subtractors.",
        symbolType: "xor_gate",
        terminalNames: ["Input A", "Input B", "Output Y = A ⊕ B"],
        keyFormula: "Y = A ⊕ B = A'B + AB'  (Modulo-2 Sum)",
        specs: "7486 Quad 2-Input XOR IC (TTL), 74HC86 (CMOS)"
      },
      {
        name: "XNOR Gate (Exclusive-NOR / Equivalence)",
        standard: "IEEE Std 91 / ANSI Y32.14",
        description: "Equality detector producing output HIGH (1) when inputs are identical (even parity). Complement of XOR gate.",
        symbolType: "xnor_gate",
        terminalNames: ["Input A", "Input B", "Output Y = (A ⊕ B)'"],
        keyFormula: "Y = (A ⊕ B)' = AB + A'B'  (Equivalence Function)",
        specs: "74266 Quad 2-Input XNOR IC (TTL), 74HC7266"
      },
      {
        name: "4:1 Multiplexer (Data Selector)",
        standard: "IEEE Std 91",
        description: "Digital switch routing one of 4 data inputs (I0, I1, I2, I3) to a single output line Y under the control of 2 binary select lines (S1, S0).",
        symbolType: "multiplexer_sym",
        terminalNames: ["Inputs I0-I3", "Select Lines S1, S0", "Output Y"],
        keyFormula: "Y = S1'S0'I0 + S1'S0 I1 + S1 S0'I2 + S1 S0 I3",
        specs: "74153 Dual 4:1 MUX IC, 74151 8:1 MUX"
      },
      {
        name: "1:4 De-Multiplexer (Data Distributor)",
        standard: "IEEE Std 91",
        description: "Distributes a single input data stream Din to one of 4 output lines (Y0-Y3) based on 2-bit binary select addresses (S1, S0).",
        symbolType: "demultiplexer_sym",
        terminalNames: ["Data Input Din", "Select Lines S1, S0", "Outputs Y0-Y3"],
        keyFormula: "Yk = Din · mk(S1, S0)  (2-to-4 Line Decoder)",
        specs: "74139 Dual 1:4 Decoder / DeMUX IC, 74138 1:8 DeMUX"
      },
      {
        name: "Clocked SR Flip-Flop",
        standard: "IEEE Std 91",
        description: "Bistable memory multivibrator with Set (S) and Reset (R) inputs gated by a clock pulse. State S=R=1 is forbidden/invalid.",
        symbolType: "flip_flop_sr",
        terminalNames: ["Set (S)", "Reset (R)", "Clock (CLK)", "Outputs Q, Q'"],
        keyFormula: "Q(t+1) = S + R' · Q  (Constraint: S · R = 0)",
        specs: "NAND / NOR Latch with Clock Steering Gates"
      },
      {
        name: "Simple JK Flip-Flop",
        standard: "IEEE Std 91",
        description: "Universal bistable flip-flop eliminating the SR invalid state. When J=K=1, output toggles. Constructed using two 3-input NAND steering gates with cross-coupled feedback.",
        symbolType: "flip_flop_jk",
        terminalNames: ["Data J", "Data K", "Clock (CLK)", "Outputs Q, Q'"],
        keyFormula: "Q(t+1) = J · Q' + K' · Q  (Toggle mode: J=K=1 → Q(t+1) = Q')",
        specs: "7473 / 7476 Dual JK Flip-Flop with Clock & Clear"
      },
      {
        name: "D Flip-Flop (Data / Delay)",
        standard: "IEEE Std 91",
        description: "Single-data-input clocked bistable element that stores the logic level of D on the active clock transition. Core building block of shift registers and RAM.",
        symbolType: "flip_flop_d",
        terminalNames: ["Data (D)", "Clock (CLK)", "Outputs Q, Q'"],
        keyFormula: "Q(t+1) = D  (Next state equals input D at clock edge)",
        specs: "7474 Dual D-Type Positive-Edge-Triggered Flip-Flop"
      },
      {
        name: "T Flip-Flop (Toggle Flip-Flop)",
        standard: "IEEE Std 91",
        description: "Single-input bistable device constructed by connecting J and K inputs together (J=K=T). When T=1, output state toggles on every active clock edge.",
        symbolType: "flip_flop_t",
        terminalNames: ["Toggle (T)", "Clock (CLK)", "Outputs Q, Q'"],
        keyFormula: "Q(t+1) = T ⊕ Q = T · Q' + T' · Q  (Binary Frequency Divider)",
        specs: "Asynchronous Ripple Counters, Frequency Dividers (f_out = f_in / 2)"
      }
    ],
    circuits: [
      {
        id: "number_systems_conversion",
        title: "Number Systems & Binary Arithmetic (1's & 2's Complement)",
        subtitle: "Positional radix comparison, binary/decimal/hex conversion algorithms, and signed complement subtraction.",
        description: "Digital systems represent numerical and alphanumeric data using positional binary codes. This reference diagram contrasts Binary (radix 2), Decimal (radix 10), and Hexadecimal (radix 16), outlining exact conversion procedures: decimal-to-binary successive division by 2, binary-to-hex 4-bit nibble partitioning, and 1's/2's complement binary subtraction without borrow logic.",
        circuitType: "Data Representation & Binary Arithmetic",
        components: ["Radix Base Weights (2^n, 10^n, 16^n)", "4-bit Nibbles", "1's Complement Inverter", "2's Complement Add-1 Stage", "Carry Propagation Chain"],
        keyOperation: [
          "Binary-to-Decimal: Positional polynomial expansion: N = Σ [ b_i · 2^i ]. For (110101.11)₂ = 32 + 16 + 0 + 4 + 0 + 1 + 0.5 + 0.25 = 53.75₁₀.",
          "Hexadecimal Nibble Grouping: Every hex digit corresponds to exactly four binary bits (e.g. (35.C)₁₆ = 0011 0101 . 1100₂).",
          "Binary Addition: 0+0=0, 0+1=1, 1+0=1, 1+1=0 (Carry 1), 1+1+1=1 (Carry 1).",
          "1's Complement Subtraction (A - B): Invert bits of B and add to A. If an end carry appears, add it to LSB (end-around carry); result is positive. If no carry, take 1's complement of sum and prefix negative sign.",
          "2's Complement Subtraction (A - B): Add (1's comp of B + 1) to A. If end carry occurs, discard it (result positive). If no end carry, 2's complement the sum and append minus sign."
        ],
        inputOutputRelation: "(110101.11)₂ = (53.75)₁₀ = (35.C)₁₆  |  A - B = A + [2's Complement of B]",
        formula: "2's Complement = (1's Complement) + 1 · Range for n-bit signed 2's complement: -2^(n-1) to +(2^(n-1) - 1)",
        cuExamTip: "CU Exam Guaranteed: Convert (110101.11)₂ to decimal and subtract (13)₁₀ from (22)₁₀ using 2's complement method."
      },
      {
        id: "logic_gates_truth_tables",
        title: "Complete Logic Gates Matrix: Symbols, Expressions & Truth Tables",
        subtitle: "Full comparative reference for Basic (AND, OR, NOT) and Derived (NAND, NOR, XOR, XNOR) logic gates.",
        description: "Standard IEEE Std 91 schematic symbols, Boolean algebraic equations, and exhaustive truth tables for all 7 primary digital logic gates. Highlights the universal property of NAND and NOR gates and modulo-2 arithmetic of XOR.",
        circuitType: "Combinational Logic Foundations",
        components: ["AND Gate (7408)", "OR Gate (7432)", "NOT Inverter (7404)", "NAND Gate (7400)", "NOR Gate (7402)", "XOR Gate (7486)", "XNOR Gate (74266)"],
        keyOperation: [
          "AND Gate: Y = A · B. HIGH output requires all inputs to be simultaneously 1.",
          "OR Gate: Y = A + B. HIGH output whenever any input is 1.",
          "NOT Gate: Y = A'. Inverts input logic state; (A')' = A.",
          "NAND Gate (Universal): Y = (A · B)' = A' + B'. LOW output strictly when all inputs are 1.",
          "NOR Gate (Universal): Y = (A + B)' = A' · B'. HIGH output strictly when all inputs are 0.",
          "XOR Gate (Odd Parity): Y = A ⊕ B = A'B + AB'. HIGH when inputs are distinct.",
          "XNOR Gate (Equivalence): Y = (A ⊕ B)' = AB + A'B'. HIGH when inputs are identical."
        ],
        inputOutputRelation: "De Morgan: (A · B)' = A' + B'  |  (A + B)' = A' · B'",
        formula: "Boolean Absorption: A + AB = A · Consensus: AB + A'C + BC = AB + A'C",
        cuExamTip: "CU Exam Favorite: Show how an OR gate and an AND gate can be realized using only 2-input NAND gates."
      },
      {
        id: "digital_half_adder",
        title: "Half Adder Combinational Circuit Schematic & Truth Table",
        subtitle: "Single-bit 2-input arithmetic circuit generating Sum (S) and Carry (C) outputs.",
        description: "The Half Adder adds two single-bit binary inputs A and B without carry-in from lower stages. It utilizes an XOR gate to generate the modulo-2 Sum (S = A ⊕ B) and an AND gate to generate the Carry output (C = A · B).",
        circuitType: "Combinational Arithmetic Logic",
        components: ["1 XOR Gate (7486)", "1 AND Gate (7408)", "Inputs: A, B", "Outputs: Sum (S), Carry (C)"],
        keyOperation: [
          "Sum Generation: XOR gate evaluates inequality: S = A'B + AB' = A ⊕ B (1 when inputs are different).",
          "Carry Generation: AND gate generates carry when both A and B are 1: C = A · B.",
          "Limitation: Cannot accommodate incoming carry (Cin) from prior stages, requiring Full Adders for multi-bit addition."
        ],
        inputOutputRelation: "Sum S = A ⊕ B  |  Carry C = A · B",
        formula: "Half Adder Sum = A ⊕ B · Half Adder Carry = A · B · Propagation Delay: max(t_XOR, t_AND)",
        cuExamTip: "CU Question: Draw the circuit diagram of a Half Adder, write its truth table, and derive the Boolean expressions."
      },
      {
        id: "digital_half_subtractor",
        title: "Half Subtractor Circuit Schematic & Truth Table",
        subtitle: "Single-bit subtraction generating Difference (D) and Borrow (Bout) outputs.",
        description: "The Half Subtractor performs arithmetic subtraction of two single-bit numbers (A - B), producing Difference D and Borrow Bout. Minuend A is inverted and ANDed with Subtrahend B to determine if a borrow from the next higher stage is required.",
        circuitType: "Combinational Arithmetic Logic",
        components: ["1 XOR Gate (7486)", "1 NOT Inverter (7404)", "1 AND Gate (7408)", "Inputs: Minuend A, Subtrahend B", "Outputs: Difference (D), Borrow (Bout)"],
        keyOperation: [
          "Difference Generation: D = A'B + AB' = A ⊕ B (identical expression to Half Adder Sum).",
          "Borrow Generation: Bout = A' · B (HIGH only when A = 0 and B = 1, since 0 - 1 requires a borrow of 2 in binary)."
        ],
        inputOutputRelation: "Difference D = A ⊕ B  |  Borrow Bout = A' · B",
        formula: "Difference D = A ⊕ B · Borrow Bout = A' · B",
        cuExamTip: "CU Exam Direct: Draw the logic circuit and truth table of a Half Subtractor. How does it differ from a Half Adder?"
      },
      {
        id: "digital_full_adder",
        title: "Full Adder Logic Circuit (2 Half Adders + 1 OR Gate) & Truth Table",
        subtitle: "3-Input, 2-Output combinational arithmetic building block synthesized using 2 Half Adders (HA1: XOR1+AND1, HA2: XOR2+AND2) and 1 OR gate.",
        description: "A Full Adder computes the binary arithmetic sum of three single-bit inputs: Augend bit A, Addend bit B, and Carry-in bit Cin from a lower-order stage. It produces two outputs: Sum S and Carry-out Cout.",
        circuitType: "Combinational Arithmetic Logic",
        components: ["2 XOR Gates (7486)", "2 AND Gates (7408)", "1 OR Gate (7432)", "Inputs: A, B, Cin", "Outputs: Sum (S), Carry (Cout)"],
        keyOperation: [
          "First Half Adder: Adds A and B to generate intermediate sum S1 = A ⊕ B and intermediate carry C1 = A · B.",
          "Second Half Adder: Adds intermediate sum S1 with carry-in Cin to generate final Sum S = (A ⊕ B) ⊕ Cin.",
          "Carry Output: Cout is HIGH if either the first AND gate generates a carry OR the second AND gate generates a carry: Cout = A · B + Cin · (A ⊕ B).",
          "Truth Table: 2³ = 8 possible input combinations; handles carry propagation in multi-bit Ripple Carry Adders (e.g. 7483 4-bit adder)."
        ],
        inputOutputRelation: "Sum S = A ⊕ B ⊕ Cin  |  Carry Cout = A·B + Cin·(A ⊕ B)",
        formula: "Propagation Delay t_pd = 2 · t_XOR for Sum; t_XOR + t_AND + t_OR for Carry",
        cuExamTip: "CU Exam Regular: Implement a Full Adder using two Half Adders and one OR gate with complete truth table and boolean expressions."
      },
      {
        id: "digital_multiplexer",
        title: "4-to-1 Multiplexer (Data Selector) Gate Logic & Truth Table",
        subtitle: "Digital switch routing one of 4 inputs to a single output line via 2 binary select lines.",
        description: "A 4:1 Multiplexer selects one of 4 data inputs (I0, I1, I2, I3) and routes it to the single output line Y according to the 2-bit select code (S1, S0). Implemented using two NOT inverters, four 3-input AND gates, and one 4-input OR gate.",
        circuitType: "Combinational Routing Logic",
        components: ["2 NOT Inverters (7404)", "4 3-input AND Gates", "1 4-input OR Gate (7432)", "Inputs: I0-I3", "Select Lines: S1, S0", "Output: Y"],
        keyOperation: [
          "Address S1 S0 = 00: Selects input I0 → Y = I0.",
          "Address S1 S0 = 01: Selects input I1 → Y = I1.",
          "Address S1 S0 = 10: Selects input I2 → Y = I2.",
          "Address S1 S0 = 11: Selects input I3 → Y = I3.",
          "Universal Function Generator: Any Boolean logic function of 3 variables can be implemented directly on a 4:1 MUX without logic gates."
        ],
        inputOutputRelation: "Y = S1' · S0' · I0 + S1' · S0 · I1 + S1 · S0' · I2 + S1 · S0 · I3",
        formula: "Number of Select Lines: 2^n = N inputs (n = log2(N)) · For 4:1 MUX, n = 2",
        cuExamTip: "CU Exam Standard Question: Realize the Boolean logic function F(A, B, C) = Σm(1, 2, 4, 5, 7) using a 4-to-1 Multiplexer."
      },
      {
        id: "digital_demultiplexer",
        title: "1-to-4 De-Multiplexer (4-to-1 Data Distributor / 2:4 Decoder) Schematic & Table",
        subtitle: "Transfers single incoming data stream to one of 4 output channels selected by 2 address lines.",
        description: "A 1:4 De-Multiplexer distributes single data line Din to one of four output channels (Y0, Y1, Y2, Y3) determined by address lines S1 and S0. When Din is held at logic 1, it functions as a 2-to-4 line Binary Decoder.",
        circuitType: "Combinational Routing Logic",
        components: ["2 NOT Inverters (7404)", "4 3-input AND Gates", "Input: Din", "Select: S1, S0", "Outputs: Y0, Y1, Y2, Y3"],
        keyOperation: [
          "Address S1 S0 = 00: Y0 = Din, all other outputs = 0.",
          "Address S1 S0 = 01: Y1 = Din, all other outputs = 0.",
          "Address S1 S0 = 10: Y2 = Din, all other outputs = 0.",
          "Address S1 S0 = 11: Y3 = Din, all other outputs = 0.",
          "Decoder Equivalence: With Din = 1 (Enable active), outputs represent active-HIGH minterms Yk = mk."
        ],
        inputOutputRelation: "Y0 = Din · S1' · S0'  |  Y1 = Din · S1' · S0  |  Y2 = Din · S1 · S0'  |  Y3 = Din · S1 · S0",
        formula: "Outputs: 2^n for n select lines · Reversible with MUX in serial-to-parallel data telemetry.",
        cuExamTip: "CU Question: Explain the working of a 1:4 De-Multiplexer with logic diagram and truth table. How does it act as a 2:4 decoder?"
      },
      {
        id: "digital_sr_flipflop",
        title: "Simple SR Flip-Flop Circuit with Gates & Truth Table",
        subtitle: "Bistable multivibrator storage latch implemented with NAND gates and clock steering.",
        description: "The Simple Clocked SR Flip-Flop uses two steering NAND gates feeding a cross-coupled NAND latch. While CLK = 0, inputs S and R are blocked and the previous output state is retained. When CLK = 1, S=1 sets Q=1, R=1 resets Q=0, and S=R=1 is forbidden/invalid.",
        circuitType: "Sequential Storage Logic",
        components: ["4 2-input NAND Gates (7400)", "Inputs: S, R, CLK", "Outputs: Q, Q'"],
        keyOperation: [
          "Hold Mode (S=0, R=0): Output unchanged: Q(t+1) = Q(t).",
          "Reset Mode (S=0, R=1): Forces Q = 0 and Q' = 1.",
          "Set Mode (S=1, R=0): Forces Q = 1 and Q' = 0.",
          "Invalid / Forbidden State (S=1, R=1): Both NAND latch outputs attempt to go HIGH simultaneously (Q = Q' = 1), causing race/ambiguity when clock drops."
        ],
        inputOutputRelation: "Q(t+1) = S + R' · Q  (Valid strictly when S · R = 0)",
        formula: "Characteristic Equation: Q(t+1) = S + R' · Q  |  Indeterminate when S = R = 1",
        cuExamTip: "CU Exam Essential: Why is S=1, R=1 called an indeterminate/invalid state in an SR flip-flop? Draw the logic circuit with gates and write the truth table."
      },
      {
        id: "digital_jk_flipflop",
        title: "Simple JK Flip-Flop Circuit with Gates & Truth Table",
        subtitle: "Universal flip-flop using two 3-input NAND steering gates with cross-coupled feedback to eliminate invalid states.",
        description: "The Simple JK Flip-Flop overcomes the indeterminate condition of the SR latch by feeding outputs Q and Q' back to the input steering NAND gates. When J=1 and K=1, the circuit inverts its previous state on every clock pulse: Q(t+1) = Q'(t) (Toggle Mode).",
        circuitType: "Sequential Storage Logic",
        components: ["Two 3-input NAND Gates (Steering)", "Two 2-input NAND Gates (Cross-coupled Latch)", "Feedback paths Q'→J gate, Q→K gate", "Inputs: J, K, CLK", "Outputs: Q, Q'"],
        keyOperation: [
          "Hold Mode (J=0, K=0): Output remains unchanged: Q(t+1) = Q(t).",
          "Reset Mode (J=0, K=1): Forces Q = 0 and Q' = 1.",
          "Set Mode (J=1, K=0): Forces Q = 1 and Q' = 0.",
          "Toggle Mode (J=1, K=1): Output inverts: Q(t+1) = Q'(t). Completely eliminates the SR invalid state."
        ],
        inputOutputRelation: "Q(t+1) = J · Q' + K' · Q  |  When J = K = 1: Q(t+1) = Q'",
        formula: "JK Characteristic Equation: Q(t+1) = J · Q' + K' · Q",
        cuExamTip: "CU Exam Guaranteed: Draw the logic circuit diagram of a Simple JK Flip-Flop with NAND gates and explain its operation with truth table."
      },
      {
        id: "digital_d_flipflop",
        title: "Simple D Flip-Flop Circuit with Gates & Truth Table",
        subtitle: "Single data-input storage element constructed with NAND gates and an inverter.",
        description: "The Simple D (Data / Delay) Flip-Flop ensures inputs to the internal SR latch are always complementary (S = D, R = D') via an inverter. On the clock transition, output Q faithfully adopts the logic level of input D: Q(t+1) = D.",
        circuitType: "Sequential Storage Logic",
        components: ["4 NAND Gates", "1 Inverter (NOT Gate)", "Inputs: D, CLK", "Outputs: Q, Q'"],
        keyOperation: [
          "Reset State (D=0): When CLK=1, sets internal R=1 and S=0, forcing Q(t+1) = 0.",
          "Set State (D=1): When CLK=1, sets internal S=1 and R=0, forcing Q(t+1) = 1.",
          "Data Storage: Prevents ambiguous states; stores exactly 1 binary bit on each clock transition."
        ],
        inputOutputRelation: "Q(t+1) = D",
        formula: "D Flip-Flop Characteristic Equation: Q(t+1) = D",
        cuExamTip: "CU Exam Question: Draw the logic circuit of a D Flip-Flop using NAND gates and an inverter. Write its truth table."
      },
      {
        id: "digital_t_flipflop",
        title: "Simple T Flip-Flop Circuit with Gates & Truth Table",
        subtitle: "Single toggle-input flip-flop constructed by tying J and K inputs together with clock steering.",
        description: "The Simple T (Toggle) Flip-Flop has a single control input T tied to both J and K of a JK flip-flop (J = K = T). When T = 0, the output remains unchanged (Hold); when T = 1, the output toggles on each active clock pulse (Q(t+1) = Q'(t)). It acts as a binary divide-by-2 frequency divider.",
        circuitType: "Sequential Storage Logic",
        components: ["Two 3-input NAND Gates", "Two 2-input NAND Gates", "Inputs: T, CLK", "Outputs: Q, Q'"],
        keyOperation: [
          "Hold Mode (T=0): Output maintains current state: Q(t+1) = Q(t).",
          "Toggle Mode (T=1): Output inverts on active clock: Q(t+1) = Q'(t).",
          "Frequency Division: Operates as a divide-by-2 frequency divider (f_out = f_clk / 2) in binary counters."
        ],
        inputOutputRelation: "Q(t+1) = T ⊕ Q = T · Q' + T' · Q",
        formula: "T Flip-Flop Characteristic Equation: Q(t+1) = T ⊕ Q  |  Frequency Division: f_out = f_clk / 2",
        cuExamTip: "CU Exam Question: Construct a Simple T Flip-Flop using a JK Flip-Flop. Write its truth table and explain its frequency division property."
      }
    ],
    theoreticalSections: [
      {
        id: "number_systems",
        title: "Number Systems: Binary, Decimal, Hexadecimal & Conversions",
        summary: "Comprehensive mathematical foundations of radix-2, radix-10, and radix-16 number systems with fractional place value conversions.",
        keyPoints: [
          "Radix / Base Concept: Any positional number system is defined by its base (r). The value of a number is given by polynomial expansion: N = Σ [ d_i · r^i ] (integer powers i ≥ 0, fractional powers i < 0).",
          "Binary (Base 2): Uses symbols {0, 1}. Weights are powers of 2 (..., 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, ...).",
          "Decimal (Base 10): Uses symbols {0, 1, 2, ..., 9}. Weights are powers of 10.",
          "Hexadecimal (Base 16): Uses symbols {0-9, A=10, B=11, C=12, D=13, E=14, F=15}. Each hexadecimal digit maps directly onto an exact 4-bit binary nibble (e.g. F₁₆ = 1111₂, A₁₆ = 1010₂).",
          "Binary to Decimal Conversion: Multiply each bit by 2^i and sum. Example: (110101.11)₂ = (1×2⁵) + (1×2⁴) + (0×2³) + (1×2²) + (0×2¹) + (1×2⁰) + (1×2⁻¹) + (1×2⁻²) = 32 + 16 + 0 + 4 + 0 + 1 + 0.5 + 0.25 = (53.75)₁₀.",
          "Decimal to Binary Conversion: Successive division by 2 for the integer portion (read remainders from bottom to top: MSB to LSB); successive multiplication by 2 for fractional portion (read integer carries from top to bottom).",
          "Binary to Hexadecimal Conversion: Group bits in clusters of 4 starting from the radix point (pad with zeros if needed). Example: (0011 0101 . 1100)₂ = (35.C)₁₆.",
          "Hexadecimal to Decimal Conversion: Multiply each hex digit by 16^i. Example: (35.C)₁₆ = 3×16¹ + 5×16⁰ + 12×16⁻¹ = 48 + 5 + 0.75 = (53.75)₁₀."
        ],
        circuitRef: "number_systems_conversion"
      },
      {
        id: "binary_arithmetic",
        title: "Binary Addition & Subtraction (1's & 2's Complement Methods)",
        summary: "Arithmetic algorithms for unsigned and signed binary numbers, eliminating subtractor circuitry via 1's and 2's complement adders.",
        keyPoints: [
          "Binary Addition Rules: 0 + 0 = 0 (Carry 0); 0 + 1 = 1 (Carry 0); 1 + 0 = 1 (Carry 0); 1 + 1 = 0 (Carry 1); 1 + 1 + 1 = 1 (Carry 1).",
          "1's Complement Representation: The 1's complement of a binary number is obtained by bitwise negation (flipping all 0s to 1s and 1s to 0s).",
          "1's Complement Subtraction (A - B): Step 1: Find 1's complement of subtrahend B. Step 2: Add it to minuend A. Step 3: If an end-around carry is produced, add 1 to the least significant bit (LSB); the result is positive and in normal binary. Step 4: If no end carry is generated, the result is negative; take 1's complement of the sum and attach a minus sign (-).",
          "2's Complement Definition: 2's Complement = (1's Complement) + 1. It provides a unique representation for zero (unlike 1's complement which has +0 and -0) and simplifies ALU arithmetic hardware.",
          "2's Complement Subtraction (A - B): Step 1: Compute 2's complement of subtrahend B. Step 2: Add it to minuend A. Step 3: If an end-carry is generated, DISCARD the end carry; the result is positive and in true binary form. Step 4: If no end-carry is generated, the result is negative; take the 2's complement of the resulting sum and attach a negative sign (-).",
          "Worked Example: Subtract 6₁₀ (0110₂) from 13₁₀ (1101₂): 1's complement of 0110 is 1001. 2's complement is 1001 + 1 = 1010₂. Sum = 1101 + 1010 = 1 0111₂. Discarding the carry '1' yields 0111₂ = +7₁₀ (correct!)."
        ],
        circuitRef: "number_systems_conversion"
      },
      {
        id: "basic_logic_gates",
        title: "Basic Logic Gates: AND, OR, NOT Symbols, Expressions & Truth Tables",
        summary: "Primary binary switching operators forming the foundational Boolean logic basis.",
        keyPoints: [
          "AND Gate (Conjunction): Symbol is a flat back with rounded front. Output Boolean equation: Y = A · B. Truth table: (0,0)→0, (0,1)→0, (1,0)→0, (1,1)→1. Output is HIGH only when ALL inputs are 1. Equivalent to switches in series.",
          "OR Gate (Disjunction): Symbol has a curved back and pointed shield front. Output equation: Y = A + B. Truth table: (0,0)→0, (0,1)→1, (1,0)→1, (1,1)→1. Output is HIGH if AT LEAST ONE input is 1. Equivalent to switches in parallel.",
          "NOT Gate (Inverter): Triangular symbol with an inversion bubble at output. Output equation: Y = A' (Ā). Truth table: 0→1, 1→0. Inverts input polarity. Inversion laws: A · A' = 0, A + A' = 1, (A')' = A.",
          "Boolean Postulates: Commutative laws (A+B = B+A, AB = BA), Associative laws (A+(B+C) = (A+B)+C), Distributive laws (A(B+C) = AB + AC, A + BC = (A+B)(A+C))."
        ],
        circuitRef: "logic_gates_truth_tables"
      },
      {
        id: "derived_universal_gates",
        title: "Derived & Universal Gates: NAND, NOR, XOR, XNOR & De Morgan's Laws",
        summary: "Universal synthesis properties of NAND and NOR gates, De Morgan duality, and XOR arithmetic capabilities.",
        keyPoints: [
          "NAND Gate (Universal): Y = (A · B)'. Truth table: (0,0)→1, (0,1)→1, (1,0)→1, (1,1)→0. Universal property: NOT = (A·A)'; AND = ((A·B)')'; OR = (A'·B')' = ((A·A)' · (B·B)')'.",
          "NOR Gate (Universal): Y = (A + B)'. Truth table: (0,0)→1, (0,1)→0, (1,0)→0, (1,1)→0. Universal property: NOT = (A+A)'; OR = ((A+B)')'; AND = (A'+B')' = ((A+A)' + (B+B)')'.",
          "De Morgan's Theorems: First Theorem: (A + B)' = A' · B' (complement of a sum equals product of complements). Second Theorem: (A · B)' = A' + B' (complement of a product equals sum of complements).",
          "XOR Gate (Exclusive-OR): Y = A ⊕ B = A'B + AB'. Truth table: (0,0)→0, (0,1)→1, (1,0)→1, (1,1)→0. Acts as modulo-2 addition and odd parity detector.",
          "XNOR Gate (Exclusive-NOR / Equivalence): Y = (A ⊕ B)' = AB + A'B'. Truth table: (0,0)→1, (0,1)→0, (1,0)→0, (1,1)→1. Acts as digital comparator / even parity detector."
        ],
        circuitRef: "logic_gates_truth_tables"
      },
      {
        id: "adders_subtractors",
        title: "Combinational Arithmetic: Half Adder, Full Adder & Half Subtractor",
        summary: "Hardware logic gate synthesis for multi-bit binary addition and subtraction.",
        keyPoints: [
          "Half Adder: Adds two single-bit inputs A and B. Sum S = A ⊕ B; Carry C = A · B. Truth table: (0,0)→(0,0), (0,1)→(1,0), (1,0)→(1,0), (1,1)→(0,1). Cannot accept incoming carry.",
          "Full Adder Architecture: Adds three bits (Augend A, Addend B, Carry-in Cin). Expressions: Sum S = A ⊕ B ⊕ Cin; Carry-out Cout = AB + Cin·(A ⊕ B) = AB + BCin + ACin. Full adder is synthesized using 2 Half Adders and 1 OR gate.",
          "Full Adder Truth Table: 8 states (000 to 111). S = 1 for minterms m(1, 2, 4, 7); Cout = 1 for minterms m(3, 5, 6, 7).",
          "Half Subtractor: Computes (A - B) for single bits. Difference D = A'B + AB' = A ⊕ B; Borrow Bout = A' · B. Difference expression is identical to Half Adder Sum, while Borrow requires inverting Minuend A.",
          "Full Subtractor: Computes (A - B - Bin). Difference D = A ⊕ B ⊕ Bin; Borrow-out Bout = A'B + Bin·(A ⊕ B)'."
        ],
        circuitRef: "digital_half_adder"
      },
      {
        id: "multiplexers_demultiplexers",
        title: "Data Routing: Multiplexers (MUX) & De-Multiplexers (DeMUX)",
        summary: "Digital data routing switches, select line decoding, and arbitrary Boolean function synthesis.",
        keyPoints: [
          "4:1 Multiplexer (Data Selector): Connects 4 data input lines (I0, I1, I2, I3) to 1 output line Y under the control of 2 select lines (S1, S0). Output equation: Y = S1'S0'I0 + S1'S0 I1 + S1 S0'I2 + S1 S0 I3.",
          "Function Generator: Any 3-variable logic function F(A, B, C) can be implemented on a 4:1 MUX by connecting variables A and B to select lines (S1=A, S0=B) and connecting data inputs I0-I3 to 0, 1, C, or C'.",
          "1:4 De-Multiplexer (Data Distributor): Routes single data input Din to one of four output channels (Y0, Y1, Y2, Y3) determined by select lines S1 and S0. Equations: Y0 = Din·S1'S0', Y1 = Din·S1'S0, Y2 = Din·S1 S0', Y3 = Din·S1 S0.",
          "Decoder Relationship: A 1:4 DeMUX with Din held continuously HIGH (Din = 1) functions identically to an active-HIGH 2-to-4 line binary decoder with enable."
        ],
        circuitRef: "digital_multiplexer"
      },
      {
        id: "flip_flops_sequential",
        title: "Sequential Logic: Simple SR, JK, D, and T Flip-Flops & Truth Tables",
        summary: "Clock-synchronized bistable multivibrators, gate schematics, characteristic equations, and truth tables.",
        keyPoints: [
          "Simple SR Flip-Flop: Set-Reset bistable multivibrator built with 2 steering NAND gates and 2 cross-coupled latch NAND gates. Characteristic equation: Q(t+1) = S + R'·Q (valid strictly for S·R = 0). Truth table: S=0,R=0 → Hold; S=0,R=1 → Reset (0); S=1,R=0 → Set (1); S=1,R=1 → Indeterminate / Invalid.",
          "Simple JK Flip-Flop: Eliminates the invalid state of the SR flip-flop by adding feedback connections from Q' to the J gate and Q to the K gate with two 3-input NAND steering gates. Characteristic equation: Q(t+1) = J·Q' + K'·Q. Truth table: J=0,K=0 → Hold; J=0,K=1 → Reset (0); J=1,K=0 → Set (1); J=1,K=1 → Toggle Q'(t).",
          "Simple D Flip-Flop (Data / Delay): Guarantees complementary inputs (S = D, R = D') to avoid the indeterminate state by utilizing an inverter (NOT gate). Characteristic equation: Q(t+1) = D. Truth table: D=0 → Reset (0); D=1 → Set (1). Directly stores 1 binary bit on each clock transition.",
          "Simple T Flip-Flop (Toggle): Constructed from a JK flip-flop by connecting inputs J and K together to a single terminal T (J = K = T). Characteristic equation: Q(t+1) = T ⊕ Q = T·Q' + T'·Q. Truth table: T=0 → Hold Q(t); T=1 → Toggle Q'(t). Acts as a divide-by-2 frequency divider (f_out = f_clk / 2) for binary counters."
        ],
        circuitRef: "digital_jk_flipflop"
      }
    ],
    formulas: [
      {
        name: "De Morgan's Laws",
        formula: "(A + B)' = A' · B'  and  (A · B)' = A' + B'",
        explanation: "Duality transformations linking NOR/NAND and inverted inputs.",
        unit: "Boolean Identity"
      },
      {
        name: "Half Adder Sum & Carry",
        formula: "Sum S = A ⊕ B  ·  Carry C = A · B",
        explanation: "Output expressions for single-bit 2-input binary adder without input carry.",
        unit: "Binary (0 or 1)"
      },
      {
        name: "Full Adder Sum Expression",
        formula: "S = A ⊕ B ⊕ C_in",
        explanation: "Sum output of full adder utilizing 3-variable XOR parity function.",
        unit: "Binary (0 or 1)"
      },
      {
        name: "Full Adder Carry Expression",
        formula: "C_out = A · B + C_in · (A ⊕ B) = A · B + B · C_in + A · C_in",
        explanation: "Majority logic carry generation function.",
        unit: "Binary (0 or 1)"
      },
      {
        name: "Half Subtractor Difference & Borrow",
        formula: "Diff D = A ⊕ B  ·  Borrow B_out = A' · B",
        explanation: "Output expressions for single-bit binary subtraction (A - B).",
        unit: "Binary (0 or 1)"
      },
      {
        name: "4-to-1 Multiplexer Equation",
        formula: "Y = S1' · S0' · I0 + S1' · S0 · I1 + S1 · S0' · I2 + S1 · S0 · I3",
        explanation: "Data routing equation controlled by 2-bit select code (S1, S0).",
        unit: "Binary Logic State"
      },
      {
        name: "SR Flip-Flop Characteristic Equation",
        formula: "Q(t+1) = S + R' · Q  (Condition: S · R = 0)",
        explanation: "Next state expression for Set-Reset flip-flop.",
        unit: "Binary State"
      },
      {
        name: "JK Flip-Flop Characteristic Equation",
        formula: "Q(t+1) = J · Q' + K' · Q",
        explanation: "Next state output as a function of inputs J, K and current state Q.",
        unit: "Binary State"
      },
      {
        name: "D Flip-Flop Characteristic Equation",
        formula: "Q(t+1) = D",
        explanation: "Data transfer equation where output updates to input D on active clock transition.",
        unit: "Binary State"
      },
      {
        name: "T Flip-Flop Characteristic Equation",
        formula: "Q(t+1) = T ⊕ Q = T · Q' + T' · Q",
        explanation: "Toggle equation yielding frequency halving (f_out = f_clk / 2) when T = 1.",
        unit: "Binary State"
      }
    ],
    examQuestions: [
      {
        id: "q_dig_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Number Conversions & De Morgan",
        question: "State De Morgan's first and second theorems mathematically and convert (110101.11)₂ to its decimal equivalent.",
        answerHint: "De Morgan's Theorems: (1) First Theorem: (A + B)' = A' · B' (the complement of a sum is equal to the product of individual complements); (2) Second Theorem: (A · B)' = A' + B' (the complement of a product is equal to the sum of individual complements). Binary to Decimal Conversion: (110101.11)₂ = (1×2⁵) + (1×2⁴) + (0×2³) + (1×2²) + (0×2¹) + (1×2⁰) + (1×2⁻¹) + (1×2⁻²) = 32 + 16 + 0 + 4 + 0 + 1 + 0.5 + 0.25 = (53.75)₁₀."
      },
      {
        id: "q_dig_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Universal Gates",
        question: "Why are NAND and NOR gates called Universal Gates? Draw the realization of a NOT gate using a single 2-input NAND gate.",
        answerHint: "They are termed Universal Gates because any basic logic function (AND, OR, NOT) and any combinational or sequential Boolean logic circuit can be implemented exclusively using only NAND gates or only NOR gates without needing any other gate type. NOT Gate realization: Tie both inputs of a 2-input NAND gate together: Y = (A · A)' = A'."
      },
      {
        id: "q_dig_3",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Basic Gates from NAND",
        question: "Realize the basic logic gates: (a) AND gate, and (b) OR gate, using only 2-input NAND gates. Draw their logic gate diagrams and write down their intermediate Boolean expressions.",
        answerHint: "(a) AND Gate using NAND: Connect inputs A and B to a first NAND gate to produce (A·B)'. Connect this output to both inputs of a second NAND gate acting as an inverter: Y = ((A·B)')' = A·B. (Requires 2 NAND gates). (b) OR Gate using NAND: Invert input A using a NAND gate to get A'. Invert input B using a second NAND gate to get B'. Feed A' and B' into a third NAND gate: Y = (A' · B')' = (A')' + (B')' = A + B by De Morgan's Law. (Requires 3 NAND gates)."
      },
      {
        id: "q_dig_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "Full Adder using Half Adders",
        question: "Design a 1-bit Full Adder circuit using two Half Adders and one OR gate. Write its complete truth table and logic expressions for Sum and Carry-out.",
        answerHint: "Truth Table: Inputs A, B, Cin; Outputs Sum (S) and Carry-out (Cout). Expressions: S = A ⊕ B ⊕ Cin, Cout = A·B + Cin·(A ⊕ B). Architecture: Half Adder 1 takes inputs A and B, producing sum S1 = A ⊕ B and carry C1 = A·B. Half Adder 2 takes S1 and carry-in Cin as inputs, generating final Sum S = S1 ⊕ Cin = A ⊕ B ⊕ Cin, and partial carry C2 = S1 · Cin = (A ⊕ B) · Cin. The OR gate combines the two carries: Cout = C1 + C2 = A·B + (A ⊕ B)·Cin."
      },
      {
        id: "q_dig_5",
        year: "CU 2023",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "JK Flip-Flop Circuit & Multiplexers",
        question: "(a) Draw the complete logic circuit diagram of a Simple JK Flip-Flop using NAND gates and explain its operation with its truth table. (b) Implement the Boolean logic function F(A, B, C) = Σm(1, 2, 4, 5, 7) using a 4-to-1 Multiplexer (MUX).",
        answerHint: "(a) Simple JK Flip-Flop: Built with two 3-input NAND steering gates and a cross-coupled NAND latch. Inputs are J, K, and CLK, with feedback from Q' to the J gate and Q to the K gate. When CLK = 1: J=0, K=0 preserves previous state (Hold Q); J=0, K=1 forces Q = 0 (Reset); J=1, K=0 forces Q = 1 (Set); J=1, K=1 causes the output to invert (Toggle Q'(t)), completely eliminating the invalid/indeterminate condition of the SR latch. (b) 4:1 MUX Realization: Variables A and B are connected to select inputs S1 and S0. Input mapping for C: (1) For AB = 00 (minterms 0, 1): F = 1 when C = 1 → I0 = C; (2) For AB = 01 (minterms 2, 3): F = 1 when C = 0 → I1 = C'; (3) For AB = 10 (minterms 4, 5): F = 1 for both C=0 and C=1 → I2 = 1 (Vcc); (4) For AB = 11 (minterms 6, 7): F = 1 when C = 1 → I3 = C. Inputs to 4:1 MUX: I0 = C, I1 = C', I2 = 1, I3 = C, Select inputs: S1 = A, S0 = B."
      }
    ],
    recommendedBooks: [
      "Digital Design - M. Morris Mano & Michael D. Ciletti (Pearson)",
      "Digital Principles and Applications - Albert Paul Malvino & Donald P. Leach",
      "Modern Digital Electronics - R.P. Jain (McGraw Hill)"
    ]
  },

  // 7. Electronic Communication
  {
    id: "electronic_communication",
    slug: "electronic-communication",
    title: "Electronic Communication",
    shortTitle: "Electronic Communication",
    semester: "sem3",
    semesterLabel: "IDC Electronics",
    paperCode: "ELTD",
    cuPaperName: "Electronic Communication",
    officialSyllabus: "Introduction to Communication, Need for Modulation, Concept of AM and FM (Qualitative Discussions, No Derivations).",
    overview: "Covers introduction to communication, need for modulation, and concept of AM and FM (qualitative discussions, no derivations).",
    learningObjectives: [
      "Identify the essential elements of any communication link: Information Source, Transducer, Transmitter, Channel, Noise, Receiver, and Destination.",
      "Justify the Need for Modulation: Practical antenna physical height (λ/4), prevention of message mixing (multiplexing), and power radiation efficiency.",
      "Derive the time-domain and frequency-domain spectrum of standard Amplitude Modulation (AM).",
      "Calculate AM modulation index m, carrier power, sideband power, total transmitted power Pt = Pc · (1 + m²/2), and transmission efficiency.",
      "Analyze the Superheterodyne Receiver architecture: RF tuning, Mixer/Local Oscillator, Intermediate Frequency (IF = 455 kHz), IF selectivity, Automatic Gain Control (AGC), and Image Frequency rejection."
    ],
    symbols: [
      {
        name: "Antenna / Aerial",
        standard: "IEEE Std 315",
        description: "Transducer transforming guided high-frequency RF electrical currents into radiating free-space electromagnetic waves (and vice-versa).",
        symbolType: "am_comm",
        terminalNames: ["RF Feedpoint", "Ground Plane Reference"],
        keyFormula: "Physical Height h ≥ λ / 4 = c / (4 · f)",
        specs: "Quarter-wave monopole, Dipole, Ferrite rod AM antenna"
      }
    ],
    circuits: [
      {
        id: "superhet_receiver",
        title: "Superheterodyne AM Receiver Architecture",
        subtitle: "Heterodyne frequency conversion system translating incoming variable RF to a fixed Intermediate Frequency (IF = 455 kHz).",
        description: "Invented by Edwin Armstrong, the Superheterodyne receiver solves the poor selectivity and instability of Tuned Radio Frequency (TRF) receivers. Regardless of which broadcast station frequency (535 kHz to 1605 kHz) is selected, the local oscillator tracks it at fLO = fs + IF, mixing them down to a fixed Intermediate Frequency (IF = 455 kHz) where high-gain, highly selective tuned IF amplifiers filter adjacent station interference.",
        circuitType: "RF Superheterodyne Communication System",
        components: ["Receiving Antenna", "RF Amplifier", "Mixer Stage", "Local Oscillator (fLO = fs + 455 kHz)", "Tuned IF Amplifiers (455 kHz)", "Diode Envelope Detector", "Automatic Gain Control (AGC) Loop", "AF Audio Power Amplifier", "Loudspeaker"],
        keyOperation: [
          "RF Tuning: Selects desired carrier frequency fs and provides low-noise pre-amplification while rejecting image frequencies.",
          "Mixer & Heterodyning: Multiplies RF signal fs with Local Oscillator fLO. Generates sum and difference products; the bandpass filter selects the difference |fLO - fs| = IF = 455 kHz.",
          "IF Amplification: High Q tuned stages provide ~80% of total receiver gain and razor-sharp adjacent channel selectivity at a constant frequency.",
          "Envelope Detection: A diode detector rectifies the 455 kHz IF signal, and an RC filter removes the RF ripple to reconstruct the original baseband audio message m(t).",
          "AGC Feedback: Rectified DC voltage proportional to carrier strength feeds back to earlier IF/RF amplifier stages to keep audio volume steady regardless of fading."
        ],
        inputOutputRelation: "f_IF = f_LO - f_s = 455 kHz  |  Image Frequency f_si = f_s + 2 · f_IF",
        formula: "Total Power Pt = Pc · [1 + m² / 2] · Image Rejection Ratio IMR = √(1 + Q² · ρ²)",
        cuExamTip: "Guaranteed CU Exam Question: Draw the block diagram of an AM Superheterodyne Receiver and explain the function of each block. Explain what is meant by 'Image Frequency'."
      },
      {
        id: "fm_concept",
        title: "Frequency Modulation (FM) Principle & Modulation Spectrum",
        subtitle: "Angle modulation where instantaneous carrier frequency varies in direct proportion to modulating baseband amplitude.",
        description: "In Frequency Modulation (FM), invented by Edwin Armstrong to conquer atmospheric and industrial static noise, the amplitude of the high-frequency RF carrier remains strictly constant, while its instantaneous frequency varies above and below the center carrier frequency fc in direct proportion to the instantaneous amplitude of the message signal m(t). Because atmospheric and electronic noise predominantly manifests as amplitude spikes, an FM receiver's amplitude limiter clips off all noise before demodulation, providing superior high-fidelity audio (SNR > 60 dB).",
        circuitType: "Angle Modulation Communication System",
        components: ["Audio Modulating Source m(t)", "Varactor Diode Reactance Modulator / Voltage-Controlled Oscillator (VCO)", "RF Power Amplifier", "FM Transmit Antenna", "FM Tuner & Limiter Stage", "Frequency Discriminator / Phase-Locked Loop (PLL) Demodulator"],
        keyOperation: [
          "Carrier Modulation: The carrier frequency swings between (fc - Δf) and (fc + Δf). When the audio signal reaches positive peak +Vm, carrier frequency is highest (fc + Δf). When audio reaches negative peak -Vm, carrier frequency is lowest (fc - Δf). At zero crossings, carrier sits exactly at resting frequency fc.",
          "Constant Amplitude Envelope: Unlike AM, the envelope amplitude of an FM signal is completely uniform (A(t) = Ac = constant). Transmitted power is constant regardless of modulation depth: Pt = Ac² / (2·R).",
          "Noise Immunity & Capture Effect: Amplitude noise spikes are eliminated simply by passing the received FM signal through a hard amplitude limiter. FM also displays the 'Capture Effect' where the receiver completely locks onto the stronger of two co-channel signals and suppresses the weaker one.",
          "Carson's Bandwidth Rule: FM sidebands theoretically extend to infinity according to Bessel functions Jn(β). By Carson's rule, 98% of the power is contained within bandwidth BW = 2 · (Δf + fm) = 2 · fm · (1 + β). For standard commercial broadcast FM (Δf = 75 kHz, fm = 15 kHz): BW = 2 · (75 + 15) = 180 kHz (allocated 200 kHz channel spacing)."
        ],
        inputOutputRelation: "f_inst(t) = f_c + k_f · m(t) · Peak Frequency Deviation Δf = k_f · A_m",
        formula: "Modulation Index β = Δf / f_m · Carson's Bandwidth BW_FM = 2 · (Δf + f_m) = 2 · f_m · (1 + β)",
        cuExamTip: "CU Exam Direct Syllabus Question: Explain the concept of Frequency Modulation (FM) qualitatively. State two advantages of FM over AM and calculate bandwidth using Carson's rule."
      }
    ],
    theoreticalSections: [
      {
        id: "need_for_modulation",
        title: "Why is Modulation Essential?",
        summary: "Baseband audio signals (20 Hz - 20 kHz) cannot be radiated directly through space without modulation.",
        keyPoints: [
          "Practical Antenna Length: Efficient radiation requires an antenna height h ≈ λ/4 = c / (4f). For a 15 kHz audio wave: h = 3×10⁸ / (4 × 15×10³) = 5,000 meters (impossible). For a 1 MHz RF carrier: h = 3×10⁸ / (4 × 10⁶) = 75 meters (practical).",
          "Multiplexing: Without modulation, all radio stations broadcasting in the same audio band would collide and interfere simultaneously.",
          "Narrowbanding: Ratio of highest to lowest audio frequency is 20000/20 = 1000:1 (impossible to tune). Modulated at 1 MHz, bandwidth is 1.02 MHz / 0.98 MHz ≈ 1.04:1 (easy to tune with single LC circuit)."
        ],
        circuitRef: "superhet_receiver"
      },
      {
        id: "am_principles",
        title: "Amplitude Modulation (AM) Mathematics & Power",
        summary: "In AM, the amplitude of a high-frequency sinusoidal carrier wave is varied linearly in accordance with the instantaneous amplitude of the modulating message signal.",
        keyPoints: [
          "Modulated Wave Equation: s(t) = Ac [1 + ma · cos(2π fm t)] · cos(2π fc t).",
          "Frequency Spectrum: Contains three discrete frequencies: Carrier (fc), Upper Sideband USB (fc + fm), and Lower Sideband LSB (fc - fm).",
          "Bandwidth: Total transmission bandwidth BW = 2 · fm.",
          "Total Power: Pt = Pc + P_USB + P_LSB = Pc [1 + ma² / 2]. At 100% modulation (ma = 1), sidebands contain only 33.3% of total power while 66.7% is wasted in the unmodulated carrier."
        ]
      },
      {
        id: "fm_principles",
        title: "Concept of Frequency Modulation (FM)",
        summary: "Qualitative foundation of FM: instantaneous carrier frequency variation, frequency deviation Δf, modulation index β, noise immunity, and comparison with AM.",
        keyPoints: [
          "Definition & Mechanism: In Frequency Modulation, the amplitude of the carrier wave remains strictly constant (Ac), while its instantaneous frequency fi(t) is shifted in proportion to the modulating signal voltage: fi(t) = fc + kf · m(t). When m(t) > 0, carrier cycles compress (frequency increases); when m(t) < 0, cycles expand (frequency decreases).",
          "Frequency Deviation (Δf): The maximum excursion of the carrier frequency above or below the center resting frequency fc. Δf = kf · Am, depending purely on the amplitude of the modulating signal, NOT its frequency.",
          "FM Modulation Index (β): The ratio of maximum frequency deviation to modulating audio frequency: β = Δf / fm. Unlike AM where m ≤ 1, in FM the modulation index β can be much greater than 1 (e.g., β = 75 kHz / 15 kHz = 5 in commercial broadcast FM).",
          "Carson's Rule for Bandwidth: While FM mathematically generates an infinite number of Bessel sideband pairs (fc ± n·fm), Carson proved that 98% of power is retained within: BW = 2 · (Δf + fm) = 2 · fm · (1 + β). For broadcast FM: BW = 2 · (75 + 15) = 180 kHz.",
          "Advantages of FM over AM: (1) Superior Noise Rejection: Electrical static and thunderstorm noise alter signal amplitude; an FM receiver uses an amplitude limiter to eliminate amplitude variations completely before detection. (2) Constant Transmitted Power: Transmitted power does not depend on modulation depth, allowing highly efficient Class C RF power amplifiers without distortion. (3) Superior Audio Fidelity: Broadcast FM supports full 50 Hz - 15 kHz audio bandwidth vs 5 kHz for AM. (4) Capture Effect: When two stations share a frequency, the receiver captures the stronger station and completely suppresses the weaker one without cross-talk.",
          "Disadvantages of FM: Requires vastly wider spectrum bandwidth (200 kHz per channel vs 10 kHz for AM), more complex transmitter and receiver circuitry, and operates in VHF/UHF line-of-sight propagation (88 - 108 MHz) with limited terrestrial range compared to AM ionospheric skywaves."
        ],
        circuitRef: "fm_concept"
      }
    ],
    formulas: [
      {
        name: "AM Wave Equation",
        formula: "s(t) = A_c · [1 + m · cos(2π f_m t)] · cos(2π f_c t)",
        explanation: "Instantaneous voltage of standard Amplitude Modulated wave.",
        unit: "Volts (V)"
      },
      {
        name: "AM Modulation Index",
        formula: "m = (V_max - V_min) / (V_max + V_min) = A_m / A_c",
        explanation: "Degree of modulation; must satisfy m ≤ 1 to prevent overmodulation distortion.",
        unit: "Dimensionless"
      },
      {
        name: "AM Total Power",
        formula: "P_t = P_c · [1 + m² / 2]",
        explanation: "Total transmitted RF power where Pc is unmodulated carrier power.",
        unit: "Watts (W)"
      },
      {
        name: "Superheterodyne Image Frequency",
        formula: "f_image = f_s + 2 · f_IF",
        explanation: "Unwanted station frequency that can mix with local oscillator fLO to produce the same intermediate frequency IF.",
        unit: "Hertz (Hz or kHz)"
      },
      {
        name: "Carson's Rule for FM Bandwidth",
        formula: "BW_FM = 2 · (Δf + f_m) = 2 · f_m · (1 + β)",
        explanation: "Transmission bandwidth for Frequency Modulation where Δf is peak frequency deviation.",
        unit: "Hertz (Hz)"
      }
    ],
    examQuestions: [
      {
        id: "q_comm_1",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Need for Modulation",
        question: "State two principal reasons why high-frequency carrier modulation is essential for transmitting audio signals over long distances.",
        answerHint: "Two essential reasons: (1) Practical Antenna Length: Electromagnetic waves require antenna height h ≥ λ/4 = c/(4·f). For a 15 kHz audio wave, h = 3×10⁸ / (4 × 15×10³) = 5,000 meters (impossible). Modulating onto a 1 MHz RF carrier reduces required antenna length to h = 3×10⁸ / (4 × 10⁶) = 75 meters (easily constructible); (2) Prevention of Signal Mixing (Multiplexing): If multiple radio stations transmit baseband audio directly in the same 20 Hz - 20 kHz spectrum, all signals would hopelessly overlap. Modulation translates each station to its own unique RF band."
      },
      {
        id: "q_comm_2",
        year: "CU 2024",
        group: "Group A (Short - 1/2 Marks)",
        marks: 2,
        topicTag: "Modulation Index & Power",
        question: "An AM broadcast transmitter radiates 10.0 kW of unmodulated carrier power. Calculate the total power radiated when modulated to a depth of 60% (m = 0.6). What is the total power in the sidebands?",
        answerHint: "Total AM Power: Pt = Pc · [ 1 + (m² / 2) ] = 10 kW · [ 1 + (0.36 / 2) ] = 10 kW · [ 1 + 0.18 ] = 11.8 kW. Total Sideband Power: Psb = Pt - Pc = 11.8 kW - 10.0 kW = 1.8 kW (Each individual sideband USB and LSB carries Psb/2 = 0.9 kW)."
      },
      {
        id: "q_comm_3",
        year: "CU 2023",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "AM Power Equation & Efficiency",
        question: "Derive the mathematical expression for total power Pt in an Amplitude Modulated (AM) wave in terms of unmodulated carrier power Pc and modulation index m. Hence calculate the maximum transmission efficiency.",
        answerHint: "Derivation: Standard AM wave equation: v(t) = Ac sin(ωc t) + (m·Ac / 2) cos((ωc - ωm)t) - (m·Ac / 2) cos((ωc + ωm)t). Carrier power: Pc = (Ac / √2)² / R = Ac² / (2R). Upper sideband power: Pusb = (m·Ac / (2√2))² / R = m²·Ac² / (8R) = (m² / 4) · Pc. Lower sideband power: Plsb = (m² / 4) · Pc. Total sideband power: Psb = Pusb + Plsb = (m² / 2) · Pc. Total Power: Pt = Pc + Psb = Pc · [ 1 + (m² / 2) ]. Transmission Efficiency: η = Psb / Pt = (m² / 2) / [ 1 + (m² / 2) ] = m² / (2 + m²). For maximum distortionless modulation (m = 1): η_max = 1² / (2 + 1²) = 1/3 = 33.33% (meaning two-thirds of power is wasted in unmodulated carrier)."
      },
      {
        id: "q_comm_4",
        year: "CU 2024",
        group: "Group B (Broad - 4/5 Marks)",
        marks: 4,
        topicTag: "AM Diode Envelope Detector",
        question: "Explain the working of an AM Diode Envelope Detector with a neat circuit diagram. State the condition to prevent diagonal peak clipping.",
        answerHint: "Circuit & Operation: Comprises a semiconductor diode D in series with an RC low-pass filter (load resistor R and bypass capacitor C). The diode conducts only during the positive peaks of the incoming RF modulated wave, charging capacitor C to the peak RF envelope voltage. During the negative half-cycles, the diode is reverse-biased, and C slowly discharges through R. If time constant RC is chosen properly (1/fc << RC << 1/fm), the high-frequency carrier is filtered out to ground, leaving the original audio modulating envelope across R. Anti-Clipping Condition: To prevent diagonal clipping where the RC discharge is slower than the fastest rate of change of the modulating envelope: (1 / RC) ≥ [ ωm · m / √(1 - m²) ]."
      },
      {
        id: "q_comm_5",
        year: "CU 2023",
        group: "Group B (Broad / Analytical / Numerical - 10 Marks)",
        marks: 10,
        topicTag: "Superheterodyne Receiver Analysis",
        question: "(a) Draw the complete block diagram of a Superheterodyne AM Receiver and state the primary function of each block. (b) A superheterodyne AM receiver with an Intermediate Frequency (IF) of 455 kHz is tuned to a broadcast station at 1000 kHz: (i) Calculate the local oscillator frequency fLO; (ii) Determine the image station frequency f_image; (iii) Explain how image frequency interference is rejected.",
        answerHint: "(a) Block Diagram & Functions: (1) Antenna: intercepts incoming RF electromagnetic waves; (2) RF Amplifier: provides initial low-noise amplification and image frequency pre-selection; (3) Local Oscillator (LO): generates tunable high-frequency sinusoidal signal fLO = fs + fIF; (4) Mixer: multiplies incoming RF signal with LO, generating difference frequency equal to fixed Intermediate Frequency (IF = 455 kHz); (5) IF Amplifier: narrow-band tuned amplifier providing majority of receiver gain and adjacent channel selectivity; (6) AM Detector: demodulates IF signal to recover baseband audio; (7) Audio Amplifier & Speaker: amplifies audio to drive speaker. (b) Calculations: (i) Local Oscillator Frequency: fLO = fs + fIF = 1000 kHz + 455 kHz = 1455 kHz. (ii) Image Frequency: f_image = fs + 2 · fIF = 1000 kHz + 2 × (455 kHz) = 1000 + 910 = 1910 kHz. (iii) Image Frequency Rejection: Once the image station signal enters the mixer, it also produces an output at |fLO - f_image| = |1455 - 1910| = 455 kHz, which passes directly through the IF filter and causes severe whistling/interference. Therefore, image frequency must be eliminated prior to the mixer by sharp tuned RF pre-selector filter circuits having high selectivity (Q-factor) at the antenna stage."
      }
    ],
    recommendedBooks: [
      "Modern Digital and Analog Communication Systems - B.P. Lathi & Zhi Ding (Oxford)",
      "Electronic Communication Systems - George Kennedy & Bernard Davis",
      "Principles of Communication Systems - Herbert Taub & Donald Schilling"
    ]
  }
];
