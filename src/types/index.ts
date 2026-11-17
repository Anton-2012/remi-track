export type Rir = "FAIL" | "RIR1" | "RIR2" | "RIR3";
export type Technique  = "PERFECT" | "IMPROVABLE" | "BAD";
export type MuscleGroup = "CHEST" | "BACK" | "SHOULDERS" | 
                            "BICEPS" | "TRICEPS" | "QUADS" 
                            | "HAMSTRINGS" | "GLUTES" | "CALVES" | "ABS";

export interface Serie {

    id: string;
    sessionId: string;
    exerciseId: string;
    position: number;
    weightKg: number;
    reps: number;
    rir: Rir;
    technique: Technique;

}

export interface Session{
    id: string;
    name: string;
    startedAt: Date;
    endedAt: Date | null;
    sensation: number | null;
}

export interface Exercise{
    id: string;
    name: string;
    muscleGroup: MuscleGroup;
    active: boolean;
}


