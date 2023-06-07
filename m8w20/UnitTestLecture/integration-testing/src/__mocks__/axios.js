const data = [
    {
        id: 1,
        name: "Player 1",
        points: 15
    },
    {
        id: 2,
        name: "Bryan",
        points: 10
    },
    {
        id: 3,
        name: "Player 3",
        points: 5
    },
    {
        id: 4,
        name: "Bob",
        points: 5
    }
]

export default {
    defaults: { baseUrl: '' },
    get: jest.fn((url) => {
        if(url === '/high-scores'){
            return Promise.resolve({
                status: 200,
                statusText: "OK",
                data
            })
        }
    })
}