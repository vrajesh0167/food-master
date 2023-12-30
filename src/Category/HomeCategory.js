import React from 'react'
import category_01 from '../images/category-01.png'
import category_02 from '../images/category-02.png'
import category_03 from '../images/category-03.png'
import category_04 from '../images/category-04.png'

export default function HomeCategory() {
    return (
        <div>
            <section className='home_category_section'>
                <div className=' container'>
                    <div className='home_category'>
                        <div>
                            <div className='category'>
                                <img src={category_01} alt="category-01" className='pe-3' />
                                <p className=' mb-0'>Fastfood</p>
                            </div>
                        </div>
                        <div>
                            <div className='category'>
                                <img src={category_02} alt="category-01" className='pe-3' />
                                <p className=' mb-0'>Pizza</p>
                            </div>
                        </div>
                        <div>
                            <div className='category'>
                                <img src={category_03} alt="category-01" className='pe-3' />
                                <p className=' mb-0'>Asian Food</p>
                            </div>
                        </div>
                        <div>
                            <div className='category'>
                                <img src={category_04} alt="category-01" className='pe-3' />
                                <p className=' mb-0'>Row Meat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
