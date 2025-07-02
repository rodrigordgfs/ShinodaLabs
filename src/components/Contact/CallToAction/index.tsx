import { Mail, Phone } from "lucide-react";

export const CallToAction = () => {
  return (
    <footer className="text-center" aria-labelledby="cta-heading">
      <h3 id="cta-heading" className="sr-only">
        Chamada para Ação
      </h3>
      <div className="relative group inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para começar um projeto?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-md mx-auto">
            Entre em contato através do seu canal preferido e vamos transformar
            sua ideia em realidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shinodalabs@gmail.com"
              className="flex flex-row items-center justify-center gap-2 group/btn relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-teal-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
              aria-label="Enviar email para shinodalabs@gmail.com"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span className="relative ml-2">Enviar Email</span>
            </a>
            <a
              href="tel:+5551996236798"
              className="flex flex-row items-center justify-center group/btn relative px-8 py-4 border-2 border-teal-500/50 text-white rounded-2xl font-semibold hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 overflow-hidden"
              aria-label="Ligar para +55 (51) 9623 - 6798"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="relative ml-2">Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
