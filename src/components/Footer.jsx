import logoAlt from "../assets/quick-lab-logo-alt.png";

function Footer() {
    return (
        <div className="bg-dark mt-4">

            <div className="row p-3 m-0">
                <div className="col-7 border-bottom align-items-center gap-3">
                    <div
                        className="overflow-hidden rounded"
                        style={{ width: '160px', height: '136px', flexShrink: 0 }}
                    >
                        <img
                            src={logoAlt}
                            alt="Logo Quick Lab"
                            className="logo-zoom-fixed w-100 h-100"
                            style={{ transform: 'scale(1.3)', objectFit: 'cover' }}
                        />
                    </div>

                    <p className="text-light m-0 mb-3">#["A maneira mais rápida de gerar e validar seus documentos";]</p>
                </div>

                <div className="col border-bottom d-flex align-items-end justify-content-center">
                    <div className="d-flex flex-wrap justify-content-center mb-3">
                        <a href="#" className="custom-footer-link text-light mx-2">Fale conosco</a>
                        <a href="#" className="custom-footer-link text-light mx-2">Licença</a>
                        <a href="#" className="custom-footer-link text-light mx-2">Termos de uso</a>
                        <a href="#" className="custom-footer-link text-light mx-2">Sobre nós</a>
                    </div>
                </div>
            </div>
            <div className="row mt-2 m-0">
                <div className="col d-flex align-items-center justify-content-center">
                    <p className="text-light fw-semibold">
                        2025 © Nilmar Pereira
                    </p>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <p className="text-light">
                        (51) 9 9439-7413
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer;