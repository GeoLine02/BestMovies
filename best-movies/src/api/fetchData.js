export async function fetchData(url, options) {
  const res = await fetch(url, options);
  if (res.ok) {
    return res.json();
  }
  throw new Error("data fetch error!");
}
