import { Button } from "./button";
import { Logo } from "./logo";
import { BlogNavigationItem } from "./blog-navigationitem";

export const BlogNavigation = () => {
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
                <BlogNavigationItem href="/blog">Blog</BlogNavigationItem>
                <BlogNavigationItem href="/blog/create">Create</BlogNavigationItem>
                <BlogNavigationItem>Contact</BlogNavigationItem>
                <BlogNavigationItem>Log In</BlogNavigationItem>
                <div>
                    
                </div>
            </div>
        </div>
    );
};
