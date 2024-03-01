import { useEffect, useRef, useState } from 'react';


export default function Graphbox(props) {

    return (
        <div className="h-auto flex m-2 p-2">
            {props.children}
        </div>
    );
}