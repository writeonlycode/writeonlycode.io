import dynamic from "next/dynamic";

interface IconProps {
  className?: string;
  icon?: string;
}

export default function Icon({ icon, className, ...props }: IconProps) {
  switch (icon) {
    case "facebook":
      const Facebook = dynamic(() => import("../icons/_Facebook"));
      return <Facebook className={className} />;
    case "github":
      const GitHub = dynamic(() => import("../icons/_GitHub"));
      return <GitHub className={className} />;
    case "twitter":
      const Twitter = dynamic(() => import("../icons/_TwitterX"));
      return <Twitter className={className} />;
    case "fiverr":
      const Fiverr = dynamic(() => import("../icons/_Fiverr"));
      return <Fiverr className={className} />;
    case "upwork":
      const Upwork = dynamic(() => import("../icons/_Upwork"));
      return <Upwork className={className} />;
    case "contra":
      const Contra = dynamic(() => import("../icons/_Contra"));
      return <Contra className={className} />;
    case "linkedin":
      const LinkedIn = dynamic(() => import("../icons/_LinkedIn"));
      return <LinkedIn className={className} />;
    default:
      const Component = dynamic(() => import("../icons/_TwitterX"));
      return <Component className={className} />;
  }
}

