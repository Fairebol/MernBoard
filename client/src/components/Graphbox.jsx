import { useEffect, useRef, useState } from 'react';


export default function Graphbox(props) {

    return (
        <div className="flex my-2 p-2 h-fit w-fit border-[1px] border-gray-600">
            {props.children}
        </div>
    );
}