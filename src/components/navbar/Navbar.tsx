import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {



    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Farmacia</div>

                    <div className='flex gap-4'>
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar