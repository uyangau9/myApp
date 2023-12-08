export const Box = ({ title, description, image, avatar, name, date }) => {
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
            <img style={{ width: "370px", height: "147px" }} src={image}></img>
            <div style={{ paddingLeft: "34px" }}>

                <p style={{
                    width: "330px",
                    height: "58px",
                    paddingTop: "22px",
                    fontSize: "24px",
                    lineHeight: "29.16px",
                    fontFamily: "'Cabin', sans-serif"
                }}>{title}</p>


                <p style={{
                    width: "318px",
                    height: "63px",
                    paddingTop: "25px",
                    fontSize: "14px",
                    lineHeight: "21.08px",
                    fontFamily: "'Cabin', sans-serif;"
                }} > {description}</p>

                <div style={{
                    paddingTop: "57px",
                    display: "flex"
                }}>
                    <img src="reviewImage"></img>
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
                        <p>{name }</p>
                        <p>|</p>
                        <p>{ }</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    )
}

