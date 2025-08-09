import Seccion from "./components/Seccion";

function NotFoundPage() {
    return <Seccion clases="flex items-center flex-col justify-center gap-5">
        <div>
            <h2 className="text-3xl">Error</h2>
        </div>
        <div>
            La página que estás buscando no existe.
        </div>
    </Seccion>;
}

export default NotFoundPage;