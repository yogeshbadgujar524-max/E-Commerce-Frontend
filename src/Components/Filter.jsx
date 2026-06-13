import React from 'react'
import { useDispatch } from 'react-redux'
import {
    filterCategory,
    filterPrice,
    filterRating,
    sortProducts,
    clearFilters
} from '../Redux/ProductSlice'

const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div className=" bg-slate-950 text-amber-50 p-2 rounded-xl shadow flex justify-evenly gap-10 m-5 overflow-auto scrollbar-none">
            <select onChange={(e) => dispatch(filterCategory(e.target.value))}>
                <option value="All">All</option>
                <option value="men's clothing">Men's Clothes</option>
                <option value="jewelery">Jewelary</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothes</option>
            </select>

            <select
                onChange={(e) =>
                    dispatch(filterPrice(e.target.value))
                }
            >
                <option>Price</option>
                <option value="0-50">0-50</option>
                <option value="50-100">50-100</option>
                <option value="100+">100+</option>
            </select>

            <select
                onChange={(e) =>
                    dispatch(filterRating(e.target.value))
                }
            >
                <option>Rate</option>
                <option value="3">3★ & Above</option>
                <option value="4">4★ & Above</option>
            </select>


            <select>
                <option>Offer</option>
                <option>10%</option>
                <option>20%</option>
                <option>50%</option>
            </select>

            <select
                onChange={(e) =>
                    dispatch(sortProducts(e.target.value))
                }
            >
                <option>Sort By</option>

                <option value="low">
                    Price Low → High
                </option>

                <option value="high">
                    Price High → Low
                </option>

                <option value="rating">
                    Top Rated
                </option>
            </select>

            <button
                onClick={() =>
                    dispatch(clearFilters())
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Clear Filters
            </button>

        </div>
    )
}

export default Filter
