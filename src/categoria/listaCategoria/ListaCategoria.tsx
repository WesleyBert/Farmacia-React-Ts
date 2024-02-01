import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { buscar } from '../../service/Service';
import Categoria from '../../model/Categoria';
import CardCategoria from '../cardCategorias/CardCategoria';


function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);


    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao buscar Categorias.')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);
    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <>
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;