/**
 * Footer Component
 * Modernismo Técnico Elegante - Simplified footer
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-blue-900 py-12 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-sm font-medium">
            © {currentYear} ArteFinal. Todos os direitos reservados.
          </p>
          <span className="hidden md:inline text-gray-300">|</span>
          <p className="text-sm font-medium">
            Feito com ❤️ para profissionais gráficos
          </p>
        </div>
      </div>
    </footer>
  );
}
