import {EmojiSad } from "iconsax-react"
import styles from './styles.module.css'
import Button from "./components/UI/Button"
import Link from "next/link"

export default function NotFound(){
    return(
        <div className="h-full">
            <div className='p-10 flex justify-center h-full items-center'>
            <div className='w-10/12 bg-background2 p-7 rounded-xl text-center relative md:w-6/12 border border-black/10'>
            <div className='absolute top-4 left-4 opacity-50'>
                    <EmojiSad size='140' color='var(--accent2)'/>
                </div>
               <div className="relative flex flex-col items-end">
                    <h2 className={styles.title}>Error</h2>
                    <div className="w-10/12 text-justify mb-5">La página que estás buscando no existe, sin embargo, te invitamos a seguir mirando nuestros productos y servicios</div>
                    <Link href={'/'} className={styles.buttonType2}>Volver a la página de inicio</Link>
               </div>
                
            </div>
        </div>
        </div>
    )
}
