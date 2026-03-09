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

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-xl text-primary-600 dark:text-primary-300">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-0.5 text-accent" />
              <div>
                <p className="font-medium text-primary-900 dark:text-white">
                  Email
                </p>
                <a
                  href={`mailto:${t("info.email")}`}
                  className="text-sm text-primary-500 hover:text-accent dark:text-primary-400"
                >
                  {t("info.email")}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 text-accent" />
              <div>
                <p className="font-medium text-primary-900 dark:text-white">
                  Location
                </p>
                <p className="text-sm text-primary-500 dark:text-primary-400">
                  {t("info.location")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="mt-0.5 text-accent" />
              <div>
                <p className="font-medium text-primary-900 dark:text-white">
                  Status
                </p>
                <p className="text-sm text-accent">{t("info.availability")}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950">
                <CheckCircle size={48} className="mx-auto text-green-500" />
                <p className="mt-4 text-lg font-medium text-green-800 dark:text-green-200">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-700 dark:text-primary-300">
                    {t("form.name")}
                  </label>
                  <input
                    {...register("name")}
                    className="w-full rounded-lg border border-primary-300 bg-white px-4 py-3 text-primary-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-primary-600 dark:bg-primary-800 dark:text-white"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {t("form.name")} required
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-700 dark:text-primary-300">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-primary-300 bg-white px-4 py-3 text-primary-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-primary-600 dark:bg-primary-800 dark:text-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      Email invalide
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary-700 dark:text-primary-300">
                    {t("form.type")}
                  </label>
                  <select
                    {...register("type")}
                    className="w-full rounded-lg border border-primary-300 bg-white px-4 py-3 text-primary-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-primary-600 dark:bg-primary-800 dark:text-white"
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
                  <label className="mb-2 block text-sm font-medium text-primary-700 dark:text-primary-300">
                    {t("form.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full rounded-lg border border-primary-300 bg-white px-4 py-3 text-primary-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-primary-600 dark:bg-primary-800 dark:text-white"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {t("form.message")} (min 10 chars)
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">{t("form.error")}</p>
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
