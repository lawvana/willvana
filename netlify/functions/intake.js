export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const data = await req.formData();
  if (data.get("bot-field")) return Response.redirect("/thank-you.html", 302);
  try {
    const nf = new FormData();
    nf.append("form-name", "estate-intake");
    for (const [k,v] of data.entries()) { if (k !== "bot-field") nf.append(k, v); }
    await fetch("https://willvana.com/", { method: "POST", body: nf });
  } catch(e) { console.error(e.message); }
  return Response.redirect("/thank-you.html", 302);
};
export const config = { path: "/submit-intake" };
