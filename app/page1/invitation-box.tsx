import { MainText } from "./maintext";
import { Button } from "./button";
import { EmailInput } from "./emailinput";

export const InvitationBox = () => {
    return (
        <div style={{
            paddingLeft: "139px"
        }}>
            <MainText></MainText>
            <EmailInput email="" />
            <Button />
        </div>
    )
}