'use server'

export async function addReviewAction({ headphoneId, review }) {
    const result = await fetch(`http://localhost:3001/api/review/${headphoneId}`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {'Content-Type': 'application/json'},
      });

    return result.json();
}