export default function NotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen items-center justify-center bg-[#0A0A0B] text-[#F2F2F2]">
        <div className="text-center">
          <h1 className="font-mono text-6xl font-bold text-[#00D4FF]">
            404
          </h1>
          <p className="mt-4 text-lg text-[#8E8E93]">
            Page non trouvee
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-[8px] bg-[#00D4FF] px-6 py-3 text-sm font-medium text-[#0A0A0B] transition-colors hover:bg-[#00BFEA]"
          >
            Retour a l&apos;accueil
          </a>
        </div>
      </body>
    </html>
  );
}
