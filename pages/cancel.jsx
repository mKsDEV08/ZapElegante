import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins_title = Poppins({
    weight: '200',
    subsets: ['latin'],
})

function Cancel() {
    return (
        <div className={poppins_title.className}>
            <title>Zap Elegante | ❌</title>
            <div className='flex justify-center'>
                <div className='text-4xl mt-2 text-zap'>
                    <div className="flex justify-center">
                        <a href="/">
                            <Image src="/images/logo-transparent.png" width={96} height={96} alt="zap elegante logo" />
                        </a>
                    </div>
                    <p className={"block mt-2"}>Zap Elegante</p>
                </div>
            </div>

            <div className='flex justify-center mt-16'>
                <div className='text-center text-red-600'>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    
                    <p className='text-3xl w-1/2 mx-auto drop-shadow'>Mensagem cancelada!</p>

                </div>
            </div>
            <div className='flex justify-center mt-24 text-2xl text-zap border-2 border-zap w-fit mx-auto p-2 rounded-lg hover:scale-105 transition duration-300 ease-in-out'>
                <a href="/">Voltar para o ZapElegante</a>
            </div>
        </div>
    )
}

export default Cancel