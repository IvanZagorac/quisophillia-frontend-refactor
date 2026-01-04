export type QuizType = {
    id:number;
    code:string;
    pause: number;
    duration: number;
    user:string;
    prize: number;
    isFavorite: boolean;
    category: string;
    applied: boolean;
    title?: string;
    startAt: Date;
    questions: any;
}