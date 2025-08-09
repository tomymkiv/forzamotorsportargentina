interface Props {
    apartado: string;
    text: string;
    clases?: string;
}

function NavLinks(props: Props) {
    const { apartado, text, clases } = props;

    return <a href={apartado}>
        <li className={'pl-3 ' + clases}>{text}</li>
    </a>
}

export default NavLinks;