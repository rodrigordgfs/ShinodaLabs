import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiStripe,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

type TechIcons = {
  [key: string]: React.ReactNode;
};

export const techIcons: TechIcons = {
  React: <SiReact className="w-4 h-4 text-teal-400" />,
  "Next.js": <SiNextdotjs className="w-4 h-4 text-white" />,
  "Vue.js": <SiVuedotjs className="w-4 h-4 text-green-400" />,
  Stripe: <SiStripe className="w-4 h-4 text-zinc-500" />,
  PostgreSQL: <SiPostgresql className="w-4 h-4 text-blue-600" />,
  Firebase: <SiFirebase className="w-4 h-4 text-orange-500" />,
  Vuetify: <SiVuetify className="w-4 h-4 text-teal-500" />,
};
