import './App.css';
// imagenes
import logo from './assets/logo-fma-blanco.png'
import fmPhoto from './assets/fm.webp'
import contactImg from './assets/contacto-img.jpeg'
import Menu from './functions/Menu';
import Intro from './components/Intro';
import NavLinks from './components/nav/NavLinks';
import Seccion from './components/Seccion';
import Image from './components/images/Imagen';
import SeccionPrincipal from './components/SeccionPrincipal';
import { useEffect, useRef } from 'react';


function App() {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const year = new Date().getFullYear();

  // Efecto de aparicion progresiva, con el scroll
  useEffect(() => {
    if (!container1Ref.current || !container2Ref.current)
      return; // Si no existe ningun apartado, salgo

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Que se muestre si paso por encima
        if (entry.isIntersecting && entry.target.classList.contains('opacity-0')) {
          entry.target.classList.replace('opacity-0', 'opacity-100');
          entry.target.classList.replace('-top-[10%]', 'top-0');
        }
        // Lo oculto al pasarle por encima
        if (!entry.isIntersecting) {
          entry.target.classList.replace('opacity-100', 'opacity-0');
          entry.target.classList.replace('top-0', '-top-[10%]');
        }
      })
    }, {
      threshold: 0.7
    });

    observer.observe(container1Ref.current);
    observer.observe(container2Ref.current);

    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <>
      <Intro />
      <header className='w-auto sticky inset-x-0 top-0 z-4 bg-[#000e] p-0 md:py-6 shadow-md shadow-black'>
        <nav>
          <div className='md:hidden'>
            <button id='menu-btn' onClick={Menu} className='flex p-6 flex-col gap-1 mx-3'>
              <div className="w-[25px] h-[2px] bg-gray-300"></div>
              <div className="w-[15px] h-[2px] bg-gray-300"></div>
              <div className="w-[4px] h-[2px] bg-gray-300"></div>
            </button>
            <ul id='mobile-ul' className='backdrop-blur-sm absolute z-1 top-0 -left-0 bg-black/40 flex flex-col gap-7 justify-center h-screen text-2xl text-gray-300 w-0 overflow-hidden duration-500'>
              <button onClick={Menu} className='absolute -space-y-0.5 top-0 -right-0 p-5'>
                <svg className='w-7 fill-gray-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
                </svg>
              </button>
              <NavLinks apartado='#home' text='Inicio' clases='text-gray-200' />
              <NavLinks apartado='#sobrenosotros' text='Sobre nosotros' clases='text-gray-200' />
              <NavLinks apartado='/categorias' text='Categorias' clases='text-gray-200' />
              <NavLinks apartado='/carreras' text='Últimas carreras' clases='text-gray-200' />
              <NavLinks apartado='#contacto' text='Contacto' clases='text-gray-200' />
            </ul>
          </div>
          <ul className='hidden md:flex items-center md:justify-between lg:justify-around'>
            <div>
              <a href="#home">
                <img src={logo} alt="" className='ml-5 w-full max-w-[150px] drop-shadow-fma-blue transition-all duration-400' />
              </a>
            </div>
            <div className='flex justify-center gap-5 text-lg font-medium mr-10'>
              <NavLinks apartado='#sobrenosotros' text='Sobre nosotros' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
              <NavLinks apartado='/categorias' text='Categorías' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
              <NavLinks apartado='/carreras' text='Últimas carreras' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
              <NavLinks apartado='#contacto' text='Contacto' clases='text-gray-500 hover:text-gray-200 transition-colors duration-350' />
            </div>
          </ul>
        </nav>
      </header>
      <main id='home'>
        <Seccion apartado='presentacion' clases='!my-0 !block'>
          <div className='w-full flex items-center justify-center'>
            <img src={fmPhoto} className='w-screen h-screen opacity-30 lg:animate-[zoom_12s_ease-in-out_infinite_alternate] -z-1 object-cover block object-center' alt="" />
          </div>
          <div className='absolute top-[40%] left-[50%] -translate-[50%] z-0 flex flex-col items-center justify-center gap-10 max-w-[800px] w-[90%]'>
            <article className='flex flex-col items-center gap-8'>
              <header>
                <h1 className='text-3xl md:text-[50px] font-bold'>¡Bienvenido a nuestro sitio web!</h1>
              </header>
              <div>
                <p className='text-lg font-thin'>Date una vuelta por nuestra página y mirá todo lo que tenemos para ofrecerte.</p>
              </div>
            </article>
          </div>
        </Seccion>
        <Seccion apartado='sobrenosotros' clases='!h-160 lg:!h-185 scroll-mt-[90px] bg-[#090909]'>
          <div ref={container1Ref} className="flex flex-col gap-10 lg:gap-6.5 p-8 relative -top-[10%] scroll-mt-[50px] transition-all duration-500 opacity-0 w-full">
            <SeccionPrincipal img1={<Image enlace={fmPhoto} clases='md:max-w-[500px] lg:max-w-[370px] lg:w-full 2xl:max-w-[600px]' />} title='¿Quiénes somos?' text='Forza Motorsport Argentina (FMA) es una comunidad dedicada al simracing en Forza Motorsport. Promovemos una competencia justa y responsable, con reglamentos estrictos que garantizan el respeto en pista. Nuestro objetivo es fomentar un entorno sano, donde el compromiso y la deportividad sean los pilares de cada carrera.' />
          </div>
        </Seccion>
        <Seccion apartado='contacto' clases='!h-160 lg:!h-185 bg-[#090909]'>
          <div ref={container2Ref} className="flex flex-col gap-10 scroll-mt-[50px] p-8 relative -top-[10%] w-full transition-all duration-500 opacity-0">
            <SeccionPrincipal img1={<Image enlace={contactImg} clases='md:max-w-[500px] lg:max-w-[370px] lg:w-full 2xl:max-w-[600px]' />} title='Contactanos' text='¿Te interesa participar? Seguinos en nuestras redes sociales y te contamos mucho más.' >
              <div className="flex flex-wrap items-center justify-center gap-10">
                <a href="https://www.instagram.com/liga_fma/" target='__blank'>
                  <svg className='drop-shadow-white transition-all duration-500 w-[50px] fill-gray-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </a>
                <a href="https://www.twitch.tv/liga_fma" target='_blank'>
                  <svg className='drop-shadow-white transition-all duration-500 w-[50px] fill-gray-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M455.4 167.5L416.8 167.5L416.8 277.2L455.4 277.2L455.4 167.5zM349.2 167L310.6 167L310.6 276.8L349.2 276.8L349.2 167zM185 64L88.5 155.4L88.5 484.6L204.3 484.6L204.3 576L300.8 484.6L378.1 484.6L551.9 320L551.9 64L185 64zM513.3 301.8L436.1 374.9L358.9 374.9L291.3 438.9L291.3 374.9L204.4 374.9L204.4 100.6L513.3 100.6L513.3 301.8z" /></svg>
                </a>
                <a href="https://discord.gg/uttTUQZv" target='_blank'>
                  <svg className="drop-shadow-white transition-all duration-500 w-[50px] fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M524.5 133.8C524.3 133.5 524.1 133.2 523.7 133.1C485.6 115.6 445.3 103.1 404 96C403.6 95.9 403.2 96 402.9 96.1C402.6 96.2 402.3 96.5 402.1 96.9C396.6 106.8 391.6 117.1 387.2 127.5C342.6 120.7 297.3 120.7 252.8 127.5C248.3 117 243.3 106.8 237.7 96.9C237.5 96.6 237.2 96.3 236.9 96.1C236.6 95.9 236.2 95.9 235.8 95.9C194.5 103 154.2 115.5 116.1 133C115.8 133.1 115.5 133.4 115.3 133.7C39.1 247.5 18.2 358.6 28.4 468.2C28.4 468.5 28.5 468.7 28.6 469C28.7 469.3 28.9 469.4 29.1 469.6C73.5 502.5 123.1 527.6 175.9 543.8C176.3 543.9 176.7 543.9 177 543.8C177.3 543.7 177.7 543.4 177.9 543.1C189.2 527.7 199.3 511.3 207.9 494.3C208 494.1 208.1 493.8 208.1 493.5C208.1 493.2 208.1 493 208 492.7C207.9 492.4 207.8 492.2 207.6 492.1C207.4 492 207.2 491.8 206.9 491.7C191.1 485.6 175.7 478.3 161 469.8C160.7 469.6 160.5 469.4 160.3 469.2C160.1 469 160 468.6 160 468.3C160 468 160 467.7 160.2 467.4C160.4 467.1 160.5 466.9 160.8 466.7C163.9 464.4 167 462 169.9 459.6C170.2 459.4 170.5 459.2 170.8 459.2C171.1 459.2 171.5 459.2 171.8 459.3C268 503.2 372.2 503.2 467.3 459.3C467.6 459.2 468 459.1 468.3 459.1C468.6 459.1 469 459.3 469.2 459.5C472.1 461.9 475.2 464.4 478.3 466.7C478.5 466.9 478.7 467.1 478.9 467.4C479.1 467.7 479.1 468 479.1 468.3C479.1 468.6 479 468.9 478.8 469.2C478.6 469.5 478.4 469.7 478.2 469.8C463.5 478.4 448.2 485.7 432.3 491.6C432.1 491.7 431.8 491.8 431.6 492C431.4 492.2 431.3 492.4 431.2 492.7C431.1 493 431.1 493.2 431.1 493.5C431.1 493.8 431.2 494 431.3 494.3C440.1 511.3 450.1 527.6 461.3 543.1C461.5 543.4 461.9 543.7 462.2 543.8C462.5 543.9 463 543.9 463.3 543.8C516.2 527.6 565.9 502.5 610.4 469.6C610.6 469.4 610.8 469.2 610.9 469C611 468.8 611.1 468.5 611.1 468.2C623.4 341.4 590.6 231.3 524.2 133.7zM222.5 401.5C193.5 401.5 169.7 374.9 169.7 342.3C169.7 309.7 193.1 283.1 222.5 283.1C252.2 283.1 275.8 309.9 275.3 342.3C275.3 375 251.9 401.5 222.5 401.5zM417.9 401.5C388.9 401.5 365.1 374.9 365.1 342.3C365.1 309.7 388.5 283.1 417.9 283.1C447.6 283.1 471.2 309.9 470.7 342.3C470.7 375 447.5 401.5 417.9 401.5z" /></svg>
                </a>
                <a href="https://www.youtube.com/@ForzaMotorsportARG">
                  <svg className="drop-shadow-white transition-all duration-500 w-[50px] fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" /></svg>
                </a>
              </div>
            </SeccionPrincipal>
          </div>
        </Seccion>
      </main>
      <footer className='flex flex-col items-center justify-center gap-5 px-5 py-12 bg-gradient-to-b from-[#090909] to-[#222]'>
        <ul className='hidden sm:flex items-center flex-wrap justify-center gap-10 text-gray-300 font-medium'>
          <NavLinks apartado='#home' text='Inicio' clases='!p-3 text-center' />
          <NavLinks apartado='#sobrenosotros' text='Sobre nosotros' clases='!p-3 text-center' />
          <NavLinks apartado='/categorias' text='Categorías' clases='!p-3 text-center' />
          <NavLinks apartado='/carreras' text='Últimas carreras' clases='!p-3 text-center' />
          <NavLinks apartado='#contacto' text='Contacto' clases='!p-3 text-center' />
        </ul>
        <p className='text-sm font-medium text-gray-300'>Forza Motorsport Argentina - {year}</p>
      </footer>
    </>
  );
}

export default App;