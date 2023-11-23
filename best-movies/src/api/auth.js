export async function signUp(user) {
  const res = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (res.ok) {
    return await res.json();
  }
  throw new Error("user SignUp Error!");
}

export async function signIn(user) {
  const res = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error("User SignIn Error!");
}
