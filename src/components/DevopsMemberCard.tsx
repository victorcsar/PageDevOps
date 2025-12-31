import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import type { DevopsMember } from "../types/DevopsMember";

interface Props {
  member: DevopsMember;
  index: number;
}

export function DevopsMemberCard({ member, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        bg-white dark:bg-slate-900
        border border-gray-200 dark:border-slate-800
        rounded-2xl p-6 sm:p-8
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
          w-24 h-24 sm:w-32 sm:h-32
          mx-auto rounded-full object-cover mb-5
          border-4 border-gray-200 dark:border-slate-800
        "
      />

      <h3 className="text-lg sm:text-xl font-semibold">
        {member.name}
      </h3>

      <p className="text-green-500 text-sm mb-3">
        {member.role}
      </p>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
        {member.description}
      </p>

      <div className="flex justify-center gap-6">
        <a
          href={member.linkedin}
          target="_blank"
          className="text-gray-500 hover:text-green-500"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={member.github}
          target="_blank"
          className="text-gray-500 hover:text-green-500"
        >
          <Github size={20} />
        </a>
        <a
          href={`mailto:${member.email}`}
          className="text-gray-500 hover:text-green-500"
        >
          <Mail size={20} />
        </a>
      </div>
    </motion.div>
  );
}
