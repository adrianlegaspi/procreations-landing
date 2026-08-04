'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormCopy = {
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly send: string;
  readonly sending: string;
  readonly success: string;
  readonly genericError: string;
  readonly validation: {
    readonly nameRequired: string;
    readonly namePattern: string;
    readonly emailRequired: string;
    readonly emailPattern: string;
    readonly messageRequired: string;
    readonly messageMin: string;
    readonly messageMax: string;
  };
};

const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]{2,60}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: { name: '', email: '', message: '' },
  });

  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timeout = setTimeout(() => reset(), 100);
      return () => clearTimeout(timeout);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const payload = await response.json().catch(() => ({ success: false }));

      if (!response.ok || !payload.success) {
        throw new Error(copy.genericError);
      }
    } catch (error) {
      console.error(error);
      setServerError(error instanceof Error ? error.message : copy.genericError);
      throw error;
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-xl space-y-4">
      <div className="grid gap-4">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wide text-zinc-500" htmlFor="name">
            {copy.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            placeholder={copy.namePlaceholder}
            className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition ${
              errors.name
                ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/30'
                : 'border-white/10 focus:border-white/30 focus:ring-white/10'
            }`}
            {...register('name', {
              required: copy.validation.nameRequired,
              pattern: {
                value: NAME_REGEX,
                message: copy.validation.namePattern,
              },
            })}
          />
          {errors.name && <p className="text-xs text-rose-400">{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wide text-zinc-500" htmlFor="email">
            {copy.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            placeholder={copy.emailPlaceholder}
            className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition ${
              errors.email
                ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/30'
                : 'border-white/10 focus:border-white/30 focus:ring-white/10'
            }`}
            {...register('email', {
              required: copy.validation.emailRequired,
              pattern: { value: EMAIL_REGEX, message: copy.validation.emailPattern },
            })}
          />
          {errors.email && <p className="text-xs text-rose-400">{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wide text-zinc-500" htmlFor="message">
            {copy.messageLabel}
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder={copy.messagePlaceholder}
            className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition ${
              errors.message
                ? 'border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/30'
                : 'border-white/10 focus:border-white/30 focus:ring-white/10'
            }`}
            {...register('message', {
              required: copy.validation.messageRequired,
              minLength: { value: 10, message: copy.validation.messageMin },
              maxLength: { value: 2000, message: copy.validation.messageMax },
            })}
          />
          {errors.message && <p className="text-xs text-rose-400">{errors.message.message}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? copy.sending : copy.send}
        </button>
        {isSubmitSuccessful && !isSubmitting && (
          <span className="text-sm text-emerald-400">{copy.success}</span>
        )}
      </div>

      {serverError && <p className="text-sm text-rose-400">{serverError}</p>}
    </form>
  );
}
