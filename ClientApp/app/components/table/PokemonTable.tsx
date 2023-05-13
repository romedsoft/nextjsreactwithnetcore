'use client'

const PokemonTable = (props : any)=> {
const stringLenght = 20;

return (
  <>
    <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr key="-1">
                            <th scope="col-4" className="px-6 py-4">#</th>
                            <th scope="col-4" className="px-6 py-4">Name</th>
                            <th scope="col-4" className="px-6 py-4">Url</th>
                            </tr>
                        </thead>
                        <tbody>
                        { props.data.map((pokemon : any, index : number) => (

                            <tr key={index}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                            <td className="whitespace-nowrap px-6 py-4">{pokemon.name}</td>
                            <td className="whitespace-nowrap px-6 py-4 font-medium"> 
                            <p><a  data-te-toggle="tooltip" title={pokemon.url}>{( pokemon?.url?.length > stringLenght ? pokemon?.url?.substring(0, stringLenght - 3) + "..." : pokemon?.url?.substring(0, stringLenght) )}</a></p>
                            </td>
                            </tr> 
                        ))}
                            
                        </tbody>
    </table>
  </>
)
}

export default PokemonTable;