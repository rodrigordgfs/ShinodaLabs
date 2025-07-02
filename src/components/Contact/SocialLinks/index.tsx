import { Zap } from "lucide-react";
import { SocialLink } from "..";

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <section aria-labelledby="social-media-heading">
      <h3 id="social-media-heading" className="sr-only">
        Redes Sociais
      </h3>
      <div className="relative group mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-lime-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div
          className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 hover:border-teal-500/40 transition-all duration-500"
          role="region"
          aria-label="Redes Sociais"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-lime-500 to-teal-500 rounded-xl">
              <Zap className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            Redes Sociais
          </h3>
          <nav aria-label="Links sociais">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {links.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className={`group/social relative block p-6 bg-gradient-to-r ${social.color} rounded-2xl ${social.hoverColor} transition-all duration-300 text-center hover:scale-105 hover:shadow-xl overflow-hidden`}
                    aria-label={`${social.label}: ${social.username}`}
                  >
                    <social.icon
                      className="w-8 h-8 text-white mx-auto mb-3 group-hover/social:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    <div className="text-sm text-white font-semibold mb-1">
                      {social.label}
                    </div>
                    <div className="text-xs text-white/80 group-hover/social:text-white transition-colors duration-300">
                      {social.username}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
