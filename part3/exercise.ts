const enum questionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

interface requestType {
    topicId: number,
    status: questionStatus

}

interface responseType {
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: questionStatus
}

const request: requestType = {
    topicId: 5,
    status: questionStatus.PUBLISHED
};

const resp: responseType =
    {
        question: "Как осуществляется доставка?",
        answer: "Быстро!",
        tags: [
            "popular",
            "new"
        ],
        likes: 3,
        status: questionStatus.PUBLISHED
    }

async function getFaqs(req: requestType): Promise<responseType> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: responseType = await res.json();
    return data;
}