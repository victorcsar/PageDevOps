import { Linkedin, Github, Mail } from "lucide-react";
import type { DevopsMember } from "../../types/DevopsMember";

const team: DevopsMember[] = [
    {
        name: "Victor Cesar",
        role: "DevOps Engineer",
        description:
            "Atua com automação CI/CD, containers Docker, infraestrutura Linux e observabilidade.",
        photo: "/team/victor.jpg",
        linkedin: "https://linkedin.com/in/seu-linkedin",
        github: "https://github.com/seu-github",
        email: "victor@power.com",
    },
    {
        name: "Teste test1",
        role: "Site Reliability Engineer",
        description:
            "Responsável por confiabilidade, monitoramento e alta disponibilidade.",
        photo: "/team/test1.jpg",
        linkedin: "https://linkedin.com/in/teste",
        github: "https://github.com/teste1",
        email: "teste1@power.com",
    },
    {
        name: "Teste test2",
        role: "Cloud Engineer",
        description:
            "Especialista em cloud, segurança e infraestrutura como código.",
        photo: "/team/test2.jpg",
        linkedin: "https://linkedin.com/in/test2",
        github: "https://github.com/test2",
        email: "test2@power.com",
    },
];

export default function DevopsTeam() {
    return (
        <main className="bg-slate-950 text-gray-200 min-h-screen">
            {/* HERO */}
            <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-green-500">Equipe</span> DevOps Power
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-400 text-lg">
                        Automação, confiabilidade e escalabilidade para manter
                        nossos sistemas sempre disponíveis.
                    </p>
                </div>
            </section>

            {/* SOBRE */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Sobre a Equipe
                </h2>
                <p className="text-center text-gray-400 max-w-4xl mx-auto">
                    A equipe DevOps da Power integra desenvolvimento e operações,
                    promovendo entregas contínuas, ambientes seguros e escaláveis,
                    com foco em automação, monitoramento e boas práticas.
                </p>
            </section>

            {/* EQUIPE */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Nosso Time
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="
                bg-slate-900 
                border border-slate-800
                rounded-2xl 
                p-8 
                text-center 
                hover:border-green-500 
                hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
                transition
              "
                        >
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="
                  w-32 h-32 mx-auto rounded-full object-cover mb-6
                  border-4 border-slate-800
                "
                            />

                            <h3 className="text-xl font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-sm text-green-500 mb-4">
                                {member.role}
                            </p>

                            <p className="text-gray-400 text-sm mb-6">
                                {member.description}
                            </p>

                            <div className="flex justify-center gap-6">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-500 transition"
                                >
                                    <Linkedin size={22} />
                                </a>

                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-500 transition"
                                >
                                    <Github size={22} />
                                </a>

                                <a
                                    href={`mailto:${member.email}`}
                                    className="text-gray-400 hover:text-green-500 transition"
                                >
                                    <Mail size={22} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Power • DevOps Team
            </footer>
        </main>
    );
}
