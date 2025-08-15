'use server'

export const apply = async (email: string) => {
  try {
    await fetch(process.env.API_URL + "/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })

    return { success: true }
  } catch {
    return { success: false, error: "Something went wrong. Try again later." }
  }
};