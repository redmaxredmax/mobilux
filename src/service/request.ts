export const url = process.env.NEXTAUTH_URL;
export const headers = new Headers({
  "Content-Type": "application/json",
});

export const stringify = (data: any) => {
  return JSON.stringify(data);
};
