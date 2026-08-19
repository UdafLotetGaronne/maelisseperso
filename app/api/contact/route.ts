import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/content/site";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  need?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Piège à robots : un champ caché rempli signale un envoi automatisé.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, company, email, phone, need, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Merci de compléter les champs obligatoires." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante : impossible d'envoyer l'email de contact.");
    return NextResponse.json(
      { error: "L'envoi du formulaire n'est pas encore configuré. Merci de réessayer plus tard." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Mae Com'Unique <onboarding@resend.dev>",
    to: CONTACT.email,
    replyTo: email,
    subject: `Nouvelle demande de contact — ${name}`,
    text: [
      `Nom : ${name}`,
      company?.trim() ? `Entreprise : ${company}` : null,
      `Email : ${email}`,
      phone?.trim() ? `Téléphone : ${phone}` : null,
      need?.trim() ? `Type de besoin : ${need}` : null,
      "",
      "Message :",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (error) {
    console.error("Erreur d'envoi Resend :", error);
    return NextResponse.json({ error: "Une erreur est survenue lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
