export type SemesterId = 'sem1' | 'sem2' | 'sem3' | 'all';

export interface ExamModality {
  semester: string;
  courseCode: string;
  courseTitle: string;
  totalCredits: number;
  theoryCredits: number;
  tutorialCredits: number;
  practicalCredits: number;
  totalMarks: number;
  theoryMarks: number;
  tutorialMarks: number;
  practicalMarks: number;
  internalAssessmentMarks: number;
  attendanceMarks: number;
  examDuration: string;
  syllabusCoverage?: string;
  questionPattern: {
    groupA: string;
    groupB: string;
  };
}

export interface CircuitSymbol {
  name: string;
  standard: string;
  description: string;
  symbolType: string;
  terminalNames: string[];
  keyFormula?: string;
  specs?: string;
}

export interface SchematicCircuit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  circuitType: string;
  components: string[];
  keyOperation: string[];
  inputOutputRelation: string;
  formula: string;
  cuExamTip?: string;
}

export interface UniversityQuestion {
  id: string;
  qNumber?: number;
  year?: string;
  group: string;
  marks?: number;
  question: string;
  answerHint: string;
  topicTag?: string;
}

export interface CUQuestionPaper {
  id: string;
  semester: SemesterId;
  semesterLabel: string;
  courseCode: string;
  courseTitle: string;
  examYear: string;
  fullMarks: number;
  tutorialMarks: number;
  timeDuration: string;
  instructions: string[];
  groupA: {
    description: string;
    marksEach: number;
    questions: UniversityQuestion[];
  };
  groupB: {
    description: string;
    marksEach: number;
    questions: UniversityQuestion[];
  };
}

export interface CourseModule {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  semester: SemesterId;
  semesterLabel: string;
  paperCode: string;
  cuPaperName: string;
  officialSyllabus: string;
  overview: string;
  learningObjectives: string[];
  symbols: CircuitSymbol[];
  circuits: SchematicCircuit[];
  theoreticalSections: {
    id: string;
    title: string;
    summary: string;
    keyPoints: string[];
    circuitRef?: string;
  }[];
  formulas: {
    name: string;
    formula: string;
    explanation: string;
    unit?: string;
  }[];
  examQuestions: UniversityQuestion[];
  recommendedBooks: string[];
}
