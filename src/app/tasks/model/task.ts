export enum Status {
    TO_DO = 'TO DO',
    IN_PROGRESS = 'IN PROGRESS',
    COMPLETED = 'COMPLETED'
}

export interface Task {
    id: string;
    name: string;
    description: string;
    startTime: number;
    endTime: number;
    status: Status;
    createdAt: string;
    deletedAt: string;
}