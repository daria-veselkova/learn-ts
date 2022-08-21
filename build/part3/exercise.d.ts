declare const enum questionStatus {
    PUBLISHED = "published",
    DRAFT = "draft",
    DELETED = "deleted"
}
interface requestType {
    topicId: number;
    status: questionStatus;
}
interface responseType {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: questionStatus;
}
declare const request: requestType;
declare const resp: responseType;
declare function getFaqs(req: requestType): Promise<responseType>;
//# sourceMappingURL=exercise.d.ts.map