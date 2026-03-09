"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  type: z.string().min(1),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function ContactPageContent() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  const inputClasses =
    "w-full rounded-[8px] border border-surface-border bg-surface-card px-4 py-3 text-sm text-content placeholder:text-content-muted focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300";

  return (
    <div className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold text-content sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-content-secondary">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card flex items-start gap-3 p-5">
              <Mail size={18} strokeWidth={1.5} className="mt-0.5 text-accent" />
              <div>
                <p className="text-sm font-medium text-content">Email</p>
                <a
                  href={`mailto:${t("info.email")}`}
                  className="text-sm text-content-muted transition-colors duration-300 hover:text-accent"
                >
                  {t("info.email")}
                </a>
              </div>
            </div>
            <div className="glass-card flex items-start gap-3 p-5">
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 text-accent" />
              <div>
                <p className="text-sm font-medium text-content">Location</p>
                <p className="text-sm text-content-muted">
                  {t("info.location")}
                </p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-3 p-5">
              <CheckCircle size={18} strokeWidth={1.5} className="mt-0.5 text-accent" />
              <div>
                <p className="text-sm font-medium text-content">Status</p>
                <p className="text-sm text-accent">{t("info.availability")}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {status === "success" ? (
              <div className="glass-card border-accent/20 p-8 text-center">
                <CheckCircle size={32} strokeWidth={1.5} className="mx-auto text-accent" />
                <p className="mt-4 text-lg font-medium text-content">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-content-secondary">
                    {t("form.name")}
                  </label>
                  <input
                    {...register("name")}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {t("form.name")} required
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-content-secondary">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      Email invalide
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-content-secondary">
                    {t("form.type")}
                  </label>
                  <select
                    {...register("type")}
                    className={inputClasses}
                  >
                    <option value="">{t("form.type")}</option>
                    <option value="consulting">
                      {t("form.type_consulting")}
                    </option>
                    <option value="dev">{t("form.type_dev")}</option>
                    <option value="formation">
                      {t("form.type_formation")}
                    </option>
                    <option value="other">{t("form.type_other")}</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-content-secondary">
                    {t("form.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={inputClasses}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {t("form.message")} (min 10 chars)
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">{t("form.error")}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? "..." : t("form.submit")}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
