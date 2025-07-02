import { Zap } from "lucide-react";

export function Availability() {
  return (
    <section aria-labelledby="availability-heading">
      <h3 id="availability-heading" className="sr-only">
        Disponibilidade
      </h3>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-lime-500 to-teal-500 rounded-xl">
              <Zap className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            Disponibilidade
          </h3>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                  aria-hidden="true"
                ></div>
                <span className="text-green-400 font-semibold">
                  Disponível para novos projetos
                </span>
              </div>
              <p className="text-zinc-300 text-sm">
                Atualmente aceitando novos clientes e projetos freelance.
              </p>
            </div>

            <div className="p-6 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl">
              <h4 className="text-white font-semibold mb-3">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Segunda - Sexta</span>
                  <span className="text-teal-400">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Sábado</span>
                  <span className="text-teal-400">9h - 14h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Domingo</span>
                  <span className="text-zinc-500">Fechado</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-2xl">
              <h4 className="text-white font-semibold mb-3">
                Tempo de Resposta
              </h4>
              <p className="text-zinc-300 text-sm">
                Respondo todas as mensagens em até{" "}
                <span className="text-teal-400 font-semibold">24 horas</span>{" "}
                durante dias úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
