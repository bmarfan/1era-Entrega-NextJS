import Header from '../../components/Productos/Header'
import Sidebar from '../../components/Productos/Sidebar'
import ItemListContainer from '../../components/Productos/ItemListContainer'

export async function generateMetadata({ params }) {
    return {
      title: `${params.categoria}`
    }
  }


export default function Page({ params }) {
    
    return (
        <div className='relative flex justify-center flex-wrap'>
          <div className='grid md:grid-cols-[332px_minmax(409px,_1fr)] gap-2 my-16 container'>
            <Sidebar/>
            <ItemListContainer/>
          </div>
        </div>
      )
  }
