import ItemDetail from "@/app/components/Productos/ItemDetail"
import ItemDetailContainer from "@/app/components/Productos/ItemDetailContainer"
import { productosData } from "@/app/ProductosData"

export function generateStaticParams() {
    const products = productosData

    return products.map((product) => ({
        categoria: product.category,
        producto: product.id,
      }))
  }


  export async function generateMetadata({ params }) {

    const isProduct = (product) =>{
        return product.id === params.producto
    }
    const productRef = productosData.find(isProduct)
    const category = productRef
    
    return {
      title: `${category.title}`
    }
  }

  export default function Page({ params }) {
    const { category, id } = params
    console.log(params)
    
    return(
        <ItemDetailContainer>
            <ItemDetail/>
        </ItemDetailContainer>
    )

  }
