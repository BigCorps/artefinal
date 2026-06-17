import { Mail, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer Component
 * Modernismo Técnico Elegante - Minimal footer with links and social
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: 'Recursos', href: '#features' },
      { label: 'Preços', href: '#pricing' },
      { label: 'Documentação', href: '#' },
      { label: 'API', href: '#' },
    ],
    company: [
      { label: 'Sobre', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contato', href: '#' },
      { label: 'Carreiras', href: '#' },
    ],
    legal: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'LGPD', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-cyan-400 to-magenta-500">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048284867/MaaYaA7BwGWAx2Ce6KhZmp/artefinal-logo-e2fSxUNNvN96NSaR8emxnj.webp"
                  alt="ArteFinal"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-white">ArteFinal</span>
            </div>
            <p className="text-sm text-gray-400">Sua gráfica, turbinada com IA.</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Produto</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Empresa</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm">Conecte</h3>
            <div className="flex gap-3">
              <a
                href="mailto:contato@artefinal.app"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} ArteFinal. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Feito com ❤️ para profissionais gráficos
          </p>
        </div>
      </div>
    </footer>
  );
}
