export async function GetItemById(id) {
  const url = `https://api.osta.ee/api/items/active/${id ? id : "153970942"}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function GetRandomActiveItem() {
  const url = `https://api.osta.ee/api/items/active`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const randomJsonResponse = jsonResponse[RandomRange(0, jsonResponse.length)];
  return randomJsonResponse;
}

const RandomRange = (min, max) => {
  let val = Math.round(Math.random() * (max - min) + min);
  return val;
};

export function GetDateDifference(date) {
  let utcDate = new Date(date);
  return (utcDate.getTime() - new Date().getTime()) / 1000;
}
