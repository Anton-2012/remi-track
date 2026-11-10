interface Serie {

    id: string;
    pesoKg: number;
    reps: number;
    rir: Rir;
    tecnica: Tecnica;

}


type Rir = "FAIL" | "RIR1" | "RIR2" | "RIR3";
type Tecnica  = "PERFECT" | "IMPROVABLE" | "BAD";