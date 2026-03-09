export default function NotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen items-center justify-center bg-white text-[#222222]">
        <div className="text-center">
          <h1 className="font-sans text-[8rem] font-extralight leading-none tracking-tight">
            404
          </h1>
          <p className="mt-4 text-lg text-[#7B7B7B]">
            Page non trouvee
          </p>
          <a
            href="/"
            className="mt-6 inline-block text-sm text-[#222222] underline underline-offset-4 decoration-[#222222]/30 transition-all hover:decoration-[#222222]"
          >
            Retour a l&apos;accueil
          </a>
        </div>
      </body>
    </html>
  );
}
