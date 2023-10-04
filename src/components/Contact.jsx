import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
    const form = useRef();
    const [isFormSended, setIsFormSended] = useState('')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact-form', form.current, 'ly3HRv4UR8fqjzOmK')
            .then((result) => {
                console.log(result.text + 'success');
                setIsFormSended('Mensaje Enviado Correctamente!')
            }, (error) => {
                console.log(error.text + 'falló');
                setIsFormSended('Hubo un problema en el envío del mensaje')
            });
        const timeoutResponse = setTimeout(() => {
            setIsFormSended('')
            e.target.reset()
            clearTimeout(timeoutResponse)
        }, 30000)
    };
    return (
        <section id="contactanos" className="flex justify-center items-center min-h-screen pt-20 pb-4 snap-start">
            <form className="
            bg-dark text-light 
            w-3/4
            [&>label]:font-bold [&>label]:text-left [&>label]:pb-1
            [&>input]:mb-3 [&>select]:mb-3 [&>textarea]:mb-3
            [&>input]:p-2 [&>input]:bg-dark [&>input]:border
            [&>textarea]:p-2 [&>textarea]:bg-dark [&>textarea]:border
            [&>select]:p-2 [&>select]:bg-dark [&>select]:border
            [&>button]:p-2 [&>button]:bg-dark [&>button]:border
            border-light
            flex flex-col"
                id="contact-form"
                onSubmit={sendEmail}
                ref={form}
            >
                <h1 className="text-3xl font-bold text-center xl:text-5xl">Tus clientes ya están en Internet, <span className="gradient-text">¿Y vos?</span></h1>
                <p className="text-center md-4 md:mb-9 xl:text-2xl">No te quedes atrás sin presencia en línea. Creamos sitios web modernos y funcionales que se adaptan a
                    tus necesidades y atraen a tus clientes. </p>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Ingrese su nombre completo" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Ingrese su dirección de correo electrónico"
                    required />

                <label htmlFor="servicio">Servicio de interés</label>
                <select id="servicio" className="w-1/2" name='servicio' defaultValue="">
                    <option value="" disabled>Seleccione un servicio de interés</option>
                    <option value="Diseño de sitios web">Diseño de sitios web</option>
                    <option value="Desarrollo de aplicaciones web">Desarrollo de aplicaciones web</option>
                    <option value="Optimización de SEO">Optimización de SEO</option>
                </select>

                <label htmlFor="message">Mensaje</label>
                <textarea className="resize-y" id="message" name="message" rows="5"
                    placeholder="Cuéntenos sobre su proyecto o requerimientos" required></textarea>

                <button role="submit" className="inline-block cursor-pointer w-28">Enviar</button>
                <p className={`${isFormSended === 'Mensaje Enviado Correctamente!' ? 'text-lime-500' : 'text-orange-500'}`}>{isFormSended ?? isFormSended}</p>
            </form>
        </section>
    )
}

export default Contact;