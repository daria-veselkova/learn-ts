"use strict";
[];
const request = {
    topicId: 5,
    status: "published" /* questionStatus.PUBLISHED */
};
const resp = [
    {
        question: "Как осуществляется доставка?",
        answer: "Быстро!",
        tags: [
            "popular",
            "new"
        ],
        likes: 3,
        status: "published" /* questionStatus.PUBLISHED */
    }
];
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
