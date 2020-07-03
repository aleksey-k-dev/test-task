export interface Call {
    id: number;
    startedAt: string;
    finishedAt: string;
    duration: number;
    contactPhone: string;
    wrapups: {
        wrapupId: number;
        agentId: number;
        wrapupComment: string;
    }[];
}
