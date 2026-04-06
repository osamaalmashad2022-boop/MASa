import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "zoom" | "flip";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  zoom: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  flip: {
    hidden: "opacity-0 rotateY-12",
    visible: "opacity-100 rotateY-0",
  },
};

const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  as: Tag = "div",
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({ threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  const { hidden, visible } = animationClasses[animation];

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? visible : hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
