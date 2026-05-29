import { Resend } from "resend";

export const runtime = "nodejs";

const TO = "info@fdm-group.de";
const FROM = "FDM Kontaktformular <kontakt@fdm-group.de>";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const honeypot = String(body.honeypot ?? "");
  if (honeypot.trim()) {
    // Bot detected – pretend success without sending.
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subject = String(body.subject ?? "Allgemeine Anfrage").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Bitte Name, E-Mail und Nachricht ausfüllen." },
      { status: 422 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "E-Mail-Versand ist derzeit nicht konfiguriert." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Kontaktformular: ${subject}`,
    html: `
      <h2>Neue Anfrage über das Kontaktformular</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Betreff:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return Response.json(
      { error: "Versand fehlgeschlagen. Bitte später erneut versuchen." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
