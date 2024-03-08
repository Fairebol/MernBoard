import { useEffect, useRef, useState } from 'react';


export default function Graphbox(props) {

    return (
        <div className="flex my-2 p-2 h-fit w-fit">
            {props.children}
        </div>
    );
}