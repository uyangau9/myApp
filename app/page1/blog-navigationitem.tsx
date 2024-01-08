import { ReactNode } from "react";

export const BlogNavigationItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href || "/"}
      style={{
        
        lineHeight: "28.11px",
        alignItems:"center",

      }}
    >
      {children}
    </a>
  );
};
