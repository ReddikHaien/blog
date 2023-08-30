import React from "react";

export default function Paragraph({children} :{children: React.ReactNode}){
    return (<p className="flex mb-4 mt-0 text-base font-light leading-relaxed">
        {children}
    </p>)
}