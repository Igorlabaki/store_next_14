export default async function VerifyUserFetch(id: string) {
  const user = await fetch(`${process.env.AXIOS_BASE_URL}/api/auth/verifyEmail`, {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify({ id }),
  }).then((resp) => {
    return resp.json();
  });

  return user;
}
