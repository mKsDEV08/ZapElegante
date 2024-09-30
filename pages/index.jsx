import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Envelope from '@/components/Envelope'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const poppins_title = Poppins({
    weight: '200',
    subsets: ['latin'],
})

function Home() {

    function anonymous() {
        const checkbox = document.getElementById('anonymous');
        const nameInput = document.getElementById('senderName');
        
        if (checkbox.checked) {
            nameInput.disabled = true;
            nameInput.value = 'Anônimo';
        } else {
            nameInput.disabled = false;
            nameInput.value = '';
        }
    }

    return (
        <div className={poppins_title.className}>
            <head>
                <meta name="google-site-verification" content="mTjlHsd9avNYot4O6wKixWD9gQWlJIYxxYn_Ynmp-_c" />
            </head>
            <title>Zap Elegante | 💘</title>
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

            <div className='flex justify-center mt-10 text-lg'>
                <form action="https://zap-api.mksdev08.online/" method="post" id='form-h'>
                    <div className='items-center grid grid-cols-1 md:grid-cols-2 gap-2 w-fit'>
                        <div className='mr-8 w-fit'>
                            <div>
                                <p>Seu nome:</p>
                                    <input
                                        type="text"
                                        name='senderName'
                                        id='senderName'
                                        placeholder='Peter Marks'
                                        className='px-2 py-1 bg-transparent border-2 border-zap rounded-lg w-[305px]'
                                        onFocus={(e) => e.target.style.outline = 'none'}
                                        required
                                    />
                            </div>
                            <div className='mt-2'>
                                <span>
                                    Admirador secreto:
                                    <input type="checkbox" name='anonymous' id='anonymous' className='ml-2' onChange={anonymous}/>
                                </span>
                            </div>
                            <div className='mt-4'>
                                <p>Seu Telefone:</p>
                                <PhoneInput
                                    defaultCountry='br'
                                    className='bg-transparent border-2 border-zap rounded-lg w-fit'
                                    name='senderPhone'
                                />
                            </div>
                            <div className='mt-2'>
                                <span>
                                    Compartilhar seu contato:
                                    <input type="checkbox" name='shareContact' id='shareContact' className='ml-2'/>
                                </span>
                            </div>
                            <div className='mt-4'>
                                <p>Nome do seu amado:</p>
                                    <input
                                        type="text"
                                        name='receiverName'
                                        id='receiverName'
                                        placeholder='Mary Clare'
                                        className='px-2 py-1 bg-transparent border-2 border-zap rounded-lg w-[305px]'
                                        onFocus={(e) => e.target.style.outline = 'none'}
                                        required
                                    />
                            </div>
                            <div className='mt-4'>
                                <p>Telefone do seu amado:</p>
                                <PhoneInput
                                    defaultCountry='br'
                                    className='bg-transparent border-2 border-zap rounded-lg w-fit'
                                    name='receiverPhone'
                                />
                            </div>
                        </div>
                        <div className='ml-8 w-fit mt-8 md:mt-0 text-center'>
                            <Envelope form="form-h" />
                            <div className='mt-6'>
                                <span>
                                    Sticker fofinho:
                                    <input type="checkbox" name='sticker' id='sticker' className='ml-2'/>
                                </span>
                            </div>
                            <input
                                type="submit"
                                value="Enviar"
                                className='px-2 py-1 bg-zap rounded-lg text-white mt-4 hover:cursor-pointer mb-8'
                            />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home