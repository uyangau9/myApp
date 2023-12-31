import { ReactNode } from "react";

export const NavigationItem = ({
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
        color: "white",
        textDecorationColor: "white",
        lineHeight: "28.11px",
        alignItems:"center",

      }}
    >
      {children}
    </a>
  );
};
