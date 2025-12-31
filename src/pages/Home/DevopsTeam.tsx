import { motion } from "framer-motion";
import { DevopsMemberCard } from "../../components/DevopsMemberCard";
import { ThemeToggle } from "../../components/ThemeToggle";
import type { DevopsMember } from "../../types/DevopsMember";

const team: DevopsMember[] = [
    {
        name: "Victor Cesar",
        role: "DevOps Engineer",
        description: "CI/CD, Docker, Linux e observabilidade.",
        photo: "/team/victor.jpg",
        linkedin: "#",
        github: "#",
        email: "victor@power.com",
    },
    {
        name: "Ana Souza",
        role: "SRE",
        description: "Alta disponibilidade, métricas e confiabilidade.",
        photo: "/team/ana.jpg",
        linkedin: "#",
        github: "#",
        email: "ana@power.com",
    },
];

export default function DevopsTeam() {
    return (
        <main className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-200 min-h-screen">
            <ThemeToggle />

            {/* HERO */}
            <section className="py-20 sm:py-28 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-5xl font-bold mb-6"
                >
                    <span className="text-green-500">Equipe</span> DevOps
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400"
                >
                    Automação, confiabilidade e escalabilidade para
                    sistemas modernos e seguros.
                </motion.p>
            </section>

            {/* TEAM */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="
                    grid gap-6
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                ">
                    {team.map((member, index) => (
                        <DevopsMemberCard
                            key={member.email}
                            member={member}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
