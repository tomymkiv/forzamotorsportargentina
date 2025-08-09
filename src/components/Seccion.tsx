import type { ReactNode } from "react";

interface Props {
    apartado: string;
    children: ReactNode;
    clases?: string;
}

function Seccion(props: Props) {
    const { apartado, children, clases } = props;

    return <section className={"h-screen flex items-center w-screen text-gray-200 font-medium text-center " + clases} id={apartado} >
        {children}
    </section>;
}

export default Seccion;