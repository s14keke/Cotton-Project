"use client"

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 mt-26 py-12">
            <h2 className="text-center text-2xl font-bold mb-10">Contacto</h2>
            <div className="flex flex-col md:flex-row md:justify-center gap-10">
                {/* Izquierda: Información de contacto */}
                <div className="md:w-1/2 flex flex-col justify-center items-start bg-gray-50 p-8 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
                    <p className="mb-2">
                        <span className="font-medium">Teléfono:</span>{" "}
                        <a href="tel:+34123456789" className="text-blue-600 underline">+34 123 456 789</a>
                    </p>
                    <p>
                        <span className="font-medium">Email:</span>{" "}
                        <a href="mailto:info@cottonproject.com" className="text-blue-600 underline">
                            info@cottonproject.com
                        </a>
                    </p>
                </div>
                {/* Derecha: Formulario de contacto */}
                <div className="md:w-1/2 bg-white p-8 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="phone">Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;