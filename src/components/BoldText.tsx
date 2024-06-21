import React from "react";

function BoldText(props:{text:string , boldText:string}) {
    const {text,boldText} = props;
    const parts = text.split(boldText);

    return (
        <p style={{marginTop: 5}}>
            {parts.map((part: string, index: React.Key | null | undefined) => (
                <React.Fragment key={index}>
                    {part}
                    {index !== parts.length - 1 &&
                        <strong style={{ fontWeight: 'bold'}}>
                            {boldText}
                        </strong>}
                </React.Fragment>
            ))}
        </p>
    );
}

export default BoldText;