import React from 'react'
import Banner from '../Components/Banner'
import Filter from '../Components/Filter'
import ProductCard from '../Components/ProductCard'
import { useSelector } from 'react-redux'

const Shopping = () => {
    const products = useSelector(
    state => state.product.filteredProducts)

    return (
    <>
        <Banner/>
        <Filter/>
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    </>
    )
}

export default Shopping