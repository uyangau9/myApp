import { Button } from "./button";
import { Logo } from "./logo";
import { NavigationItem } from "./navigation-item";

export const Navigation = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "24px",
      paddingLeft: "139px",
      paddingRight: "139px",
      alignItems: "center",
    }}>
      <Logo />
      <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "center"
      }}>
        <NavigationItem href="/blog">Blog</NavigationItem>
        <NavigationItem href="/blog/create">Create</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
        <NavigationItem>Log In</NavigationItem>
        <div>
          <Button type={"getaccess"} />
        </div>
      </div>
    </div>
  );
};
