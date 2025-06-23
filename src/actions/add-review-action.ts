"use server";

import { revalidatePath } from "next/cache";

export async function addReviewAction({ headphoneId, review, pathname }) {
  const result = await fetch(
    `http://localhost:3001/api/review/${headphoneId}`,
    {
      method: "POST",
      body: JSON.stringify(review),
      headers: { "Content-Type": "application/json" },
    }
  );

  revalidatePath(pathname);

  return result.json();
}
