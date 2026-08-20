"use client";

import { useId, useState } from "react";
import { clsx } from "clsx";
import { NEEDS_OPTIONS } from "@/lib/content/process";

const fieldClass =
  "peer w-full border-0 border-b border-green-950/25 bg-transparent px-0 py-3 font-sans text-base text-title placeholder-transparent outline-none transition-colors focus:border-green-950";

const labelClass =
  "pointer-events-none absolute left-0 top-3 font-sans text-base text-green-950/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-green-700 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-l-2 border-green-700 py-6 pl-6">
        <p className="font-display text-2xl italic text-title">Message bien reçu.</p>
        <p className="mt-3 max-w-md font-sans text-[15px] leading-relaxed text-green-950/70">
          Merci pour ces informations, je reviens vers vous rapidement pour qu&rsquo;on en
          discute.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        <div className="relative">
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            placeholder="Nom"
            className={fieldClass}
          />
          <label htmlFor={`${formId}-name`} className={labelClass}>
            Nom *
          </label>
        </div>

        <div className="relative">
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            placeholder="Entreprise"
            className={fieldClass}
          />
          <label htmlFor={`${formId}-company`} className={labelClass}>
            Entreprise
          </label>
        </div>

        <div className="relative">
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            placeholder="Email"
            className={fieldClass}
          />
          <label htmlFor={`${formId}-email`} className={labelClass}>
            Email *
          </label>
        </div>

        <div className="relative">
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            placeholder="Téléphone"
            className={fieldClass}
          />
          <label htmlFor={`${formId}-phone`} className={labelClass}>
            Téléphone (facultatif)
          </label>
        </div>
      </div>

      <div>
        <p className="font-sans text-sm font-medium text-title">Type de besoin</p>
        <div className="mt-4 flex flex-wrap gap-2.5" role="radiogroup" aria-label="Type de besoin">
          {NEEDS_OPTIONS.map((option) => (
            <label
              key={option}
              className="cursor-pointer rounded-full border border-green-950/20 px-4 py-2 font-sans text-sm text-green-950/75 transition-colors has-[:checked]:border-graphite has-[:checked]:bg-graphite has-[:checked]:text-cream-50"
            >
              <input type="radio" name="need" value={option} className="sr-only" />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="relative">
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          placeholder="Message"
          className={clsx(fieldClass, "resize-none")}
        />
        <label htmlFor={`${formId}-message`} className={labelClass}>
          Message *
        </label>
      </div>

      <div className="hidden">
        <label htmlFor={`${formId}-website`}>Ne pas remplir</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="font-sans text-sm text-rose-900">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-2.5 rounded-full bg-graphite px-8 py-4 font-sans text-sm font-semibold text-cream-50 transition-all duration-300 ease-[var(--ease-editorial)] hover:bg-rose-900 disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
        <span aria-hidden className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
