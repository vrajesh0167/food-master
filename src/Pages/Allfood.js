import React, { useEffect, useState } from 'react'
import TitlePage from './TitlePage.js/TitlePage'
import products from '../API/products'
import Product from '../Category/Product'
import Helmet from '../Component/Helmet'
import ReactPaginate from 'react-paginate'

export default function Allfood() {
    // A_Z High and Lowe price
    const [allProduct, setAllproduct] = useState(products);
    const [category, setCategory] = useState('A-Z');

    // search item
    const [search, setSearch] = useState("");

    //pagination 
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const visitedPage = currentPage * itemsPerPage;
    const serachData = allProduct.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    const pageslice = serachData.slice(visitedPage, visitedPage+itemsPerPage);
    
    const pageCount = Math.ceil(allProduct.length / itemsPerPage)

    const pageChangeHandler = ({selected}) =>{
        setCurrentPage(selected)
    }

    useEffect(() => {
        // const sortProduct = [...products];
        const sortProduct = products.filter((item) => item.title);

        if(category === 'A-Z'){
            setAllproduct(sortProduct.sort((a, b) => {return (a.title.localeCompare(b.title))}))
        }
        if(category === 'Hight_price'){
            setAllproduct(sortProduct.sort((a, b) => {return (b.price - a.price)}))
        }
        if(category === 'Low_price'){
            setAllproduct(sortProduct.sort((a, b) => {return (a.price - b.price)}))
        }

        
    }, [category])

    return (
        <Helmet title={'All Foods'}>
            <TitlePage title="All Foods"></TitlePage>

            <section className='all_foods_section'>
                <div className=' container'>
                    <div className=' all_foods'>
                        <div className='foods_search position-relative'>
                            <input type="text" placeholder='Search item' className=' form-control' onChange={(e) => {setSearch(e.target.value); setCurrentPage(0)}} />
                            <i className="ri-search-line search_ico"></i>
                        </div>
                        <div className='item_select'>
                            <select  onChange={(e) => setCategory(e.target.value)} className=' form-select'>
                                <option value="A-Z">A-Z</option>
                                <option value="Hight_price">High price</option>
                                <option value="Low_price">Low Price</option>
                            </select>
                        </div>
                    </div>
                    <div className='product'>
                        {
                            pageslice.map((item) => {
                                return <div className='product_item' key={item.id}>
                                    <Product item={item}></Product>
                                </div>
                            })
                        }
                    </div>
                    <div className='item_pagination '>
                        <ReactPaginate pageCount={pageCount} onPageChange={pageChangeHandler} previousLabel="< Prev" nextLabel="Next >" className='pagination text-center'></ReactPaginate>
                    </div>
                </div>
            </section>
        </Helmet>
    )
}
