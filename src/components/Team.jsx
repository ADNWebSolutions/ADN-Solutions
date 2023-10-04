const mockUsers = [
    {
        ghName: 'debiabril',
        github: 'https://github.com/debiabril'
    },
    {
        ghName: 'arielLevita',
        github: 'https://github.com/arielLevita'
    },
    {
        ghName: 'MarcosCakin',
        github: 'https://github.com/MarcosCakin'
    },
    {
        ghName: 'JaCastro125',
        github: 'https://github.com/JaCastro125'
    },
    {
        ghName: 'Josenov',
        github: 'https://github.com/Josenov'
    },
    {
        ghName: 'JesicaJunco',
        github: 'https://github.com/JesicaJunco'
    },
    {
        ghName: 'tsuramii',
        github: 'https://github.com/tsuramii'
    },
    {
        ghName: 'Kapee87',
        github: 'https://github.com/Kapee87'
    },
    {
        ghName: 'MarceloZych',
        github: 'https://github.com/MarceloZych'
    },
    {
        ghName: 'EdGhioldi',
        github: 'https://github.com/EdGhioldi'
    },
]
export default function Team() {
    return (
        <section id="team" className={`flex flex-col lg:flex-row items-center justify-center bg-black bg-fixed p-12 text-white min-h-screen snap-start`}>
            <div className={`flex-1 p-6`}>
                <h1 className={`text-5xl sm:text-6xl mb-1`}>
                    Somos
                    <span className={`p-2 gradient-text`}>
                        ADN Solutions
                    </span>
                </h1>
                <p className={`text-2xl`}>
                    Somos un equipo de profesionales con sede en Argentina, dedicados a la creación de soluciones digitales de calidad mundial que ayudan a las empresas a ofrecer servicios y experiencias excepcionales a usuarios de todo el mundo.</p>
            </div>
            <div className={`m-0 md:w-1/2`}>
                <div className={`gallery mx-auto grid max-w-3xl justify-center gap-2`}>
                    {mockUsers.map((user,key) => (
                        <div className={`gallery-item h-32 hover:scale-105 transition-transform duration-700 text-center uppercase font-light`} key={key}>
                            <a className={`hover:scale-105 transition-transform duration-300`} href={user.github} target="_blank">
                                <img className={`w-full h-full object-cover cursor-pointer`} src={`https://unavatar.io/github/${user.ghName}`} alt="Foto de Perfil" />
                                <div className={`absolute inset-0 w-full h-full flex justify-center items-center bg-black/[0.9] opacity-0 hover:opacity-90`}>
                                    <h2 className={`text-light font-primar font-bold`}>{user.ghName}</h2>
                                </div>
                            </a>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}