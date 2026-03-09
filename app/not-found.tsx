export default function NotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-900 dark:text-white">
            404
          </h1>
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
            Page non trouvee
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-white hover:bg-accent-600"
          >
            Retour a l&apos;accueil
          </a>
        </div>
      </body>
    </html>
  );
}
