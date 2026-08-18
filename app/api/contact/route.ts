import { NextResponse } from "next/server";

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

  const { name, email, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Merci de compléter les champs obligatoires." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  // L'envoi réel du message (email, CRM, etc.) doit être branché ici une
  // fois un fournisseur choisi — aucune information d'envoi n'a été fournie.
  console.info("Nouvelle demande de contact reçue :", { ...data, message: undefined });

  return NextResponse.json({ ok: true });
}
