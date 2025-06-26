import { cn } from "@/utils/cn";

interface FiverrProps {
  className?: string;
}

export default function Facebook({ className, ...props }: Fiverr) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className={cn(className)}
      viewBox="0 0 508.02 508.02"
    >
      <circle className="a" fill="currentColor" cx="254.01" cy="254.01" r="254.01"/>
      <circle className="b" fill="black" cx="315.97" cy="162.19" r="26.87"/>
      <path className="b" fill="black" d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z" transform="translate(-1.83 -0.98)"/>
    </svg>
  );
}
