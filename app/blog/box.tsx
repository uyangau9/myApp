export const Box = () => {
    return (<div style={{
        paddingLeft: "141px",
        paddingTop: "69px",
        fontFamily: "'Cabin', sans-serif"
    }}>

        <div id="box" style={{
            height: "440px",
            width: "363px",
            backgroundColor: "white",
            borderRadius: "30px",
            overflow: "hidden"
        }}>
            <img style={{ width: "370px", height: "147px" }} src="/pictureblog.png"></img>
            <div style={{ paddingLeft: "34px" }}>

                <p style={{
                    width: "330px",
                    height: "58px",
                    paddingTop: "22px",
                    fontSize: "24px",
                    lineHeight: "29.16px",
                    fontFamily:"'Cabin', sans-serif"
                }}>The Emotional Toll of Being in UX</p>


                <p style={{
                    width: "318px",
                    height: "63px",
                    paddingTop: "25px",
                    fontSize: "14px",
                    lineHeight: "21.08px",
                    fontFamily:"'Cabin', sans-serif;"
                }} >There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand</p>

                <div style={{
                    paddingTop: "57px",
                    display: "flex"
                }}>
                    <img src="/avatar.png"></img>
                    <div style={{
                        fontWeight: "600px",
                        fontSize: "12px",
                        display: "flex",
                        lineHeight: "21.7px",
                        gap: "10px",
                        alignItems: "center",
                        paddingLeft: "20.15px",
                        color: "#6D7D8B"
                    }}>
                        <p>Wade Warren</p>
                        <p>|</p>
                        <p>2nd January,2022</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    )
}