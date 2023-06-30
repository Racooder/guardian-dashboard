import "dotenv/config"

const apiUrl = process.env.API_URL;

export async function listFeedback() {
    const response = await fetch(`${apiUrl}/feedback`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    
    const feedback = await response.json();
    return feedback;
}

export async function getStatistics() {
    const response = await fetch(`${apiUrl}/statistics`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    
    const statistics = await response.json();
    return statistics;
}
