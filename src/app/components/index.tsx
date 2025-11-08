import Link from "next/link"

const data = [
    { id: 1, nome: "Games" },
    { id: 2, nome: "Eletrodomesticos" }
]


export const Menu = () => {
    return (
        <nav className="bg-black p-4">

            <div className="flex justify-between">
                <h1 className="text-white hover:text-red-500">Chopts</h1>

                < div>
                    <ul className="flex space-x-4">
                        {
                            data.map((menu) => (
                                <li key={menu.id}>

                                    <li> <Link className="text-white hover:text-red-500" href={"'/home'"}>

                                        Games

                                     {menu.nome}
                                    </Link>
                                    </li>
                                </li>
                            ))
                        }
                        <li> <Link className="text-white hover:text-red-500" href={"'/home'"}>

                            Eletrodomesticos
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}