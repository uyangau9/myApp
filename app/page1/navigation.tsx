import { Button } from "./button";
import { Logo } from "./logo";
import { NavigationItem } from "./navigation-item";

export const Navigation = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "24px",
      paddingLeft: "139px"
    }}>
      <Logo />
      <div style={{
        display: "flex",
        gap: "20px",
      }}>
        <NavigationItem>Products</NavigationItem>
        <NavigationItem>Services</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
        <NavigationItem>Log In</NavigationItem>
        <Button type={"getaccess"} />
      </div>
    </div>
  );
};
