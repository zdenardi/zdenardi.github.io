import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"post">;

interface BlogPostProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostProps) {
  return (
    // Wrap the entire clickable area in a single motion.a tag that handles navigation
    <motion.a
      href={`/posts/${post.id}`} // Use the actual link derived from post data
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }} // Reduced hover scale slightly since the whole card is clickable
      whileTap={{ scale: 0.98 }}
    >
      <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col cursor-pointer">
        <CardHeader className="bg-linear-to-r from-purple-500/5 to-pink-500/5 h-25 flex items-center justify-center">
          <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300 text-clip max-w-full">
            {post.data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          {post.data.bannerImg && (
            <figure className="w-full mb-10 overflow-hidden h-25% pt-3">
              <img
                src={post.data.bannerImg}
                alt={`Banner image for ${post.data.title || "this post"}`}
                className="w-full object-cover transition duration-300 hover:opacity-90"
              />
            </figure>
          )}
          <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
            {post.data.description}
          </ul>
        </CardContent>

        <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
          {/* REMOVED: The inner motion.a tag is no longer necessary here because the outer wrapper handles navigation */}
          <span className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8 cursor-pointer">
            View Post →
          </span>
        </CardFooter>
      </GlassCard>
    </motion.a>
  );
}
