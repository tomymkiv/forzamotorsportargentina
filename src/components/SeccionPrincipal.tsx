import { type JSX, type ReactNode } from "react";

interface Props {
    img1: JSX.Element;
    img2?: JSX.Element;
    title?: string;
    text?: string;
    clases?: string;
    children?: ReactNode
}

function SeccionPrincipal(props: Props) {
    const { img1, img2, title, text, clases, children } = props;
    let wrap = 'flex-wrap';
    let categoriasWidth = 'lg:w-[33.34%]';

    if(props.title === 'Categorías activas'){
        wrap = ''
        categoriasWidth = '';
    }
    return <div className={'flex flex-col lg:flex-row justify-around space-y-7 lg:space-x-5 ' + clases}>
        <div className={"img-container flex items-center justify-center w-full gap-5 lg:w-[33.34%] " + wrap + ' ' + categoriasWidth} >
            {img1}
            {img2}
        </div>
        <article className='flex flex-col items-center justify-center space-y-6 lg:w-[66.7%] text-gray-200'>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='min-w-[135px] max-w-[788px] lg:mx-20'>{text}</p>
            {children}
        </article>
    </div>;
}

export default SeccionPrincipal;