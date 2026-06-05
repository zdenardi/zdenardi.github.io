import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function BlogPost({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <li>
      <a href={url} class="text-lg hover:underline">
        {title}
      </a>
    </li>
  );
}
