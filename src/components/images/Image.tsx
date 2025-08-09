import { useEffect, useState } from "react";

interface Props {
    href?: string;
    enlace: string;
    clases?: string;
}

function Image(props: Props) {
    const { href, enlace, clases } = props;
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (props.href) {
            setHover(true)
        }
    }, [])

    return <a href={href} target="_blank" className="relative">
        {hover ? <div className="hidden lg:flex absolute bg-white/75 opacity-0 transition-opacity duration-400 hover:opacity-75 rounded-lg w-full h-full text-gray-800 text-xl lg:text-3xl items-center justify-center">
            Ver publicación
        </div>
            :
            ''
        }

        <img src={enlace} alt="Imagen" className={'rounded-lg ' + clases} />
    </a>
}

export default Image;