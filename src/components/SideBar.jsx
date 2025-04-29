function SideBar() {
    return (
        <div className="d-flex flex-column gap-3">
            <div>
                <h5><a href="" className="text-decoration-none">DOCUMENTOS</a></h5>
                <div className="d-flex flex-column gap-3">
                    <div className="list-group text-start">
                        <button type="button" className="list-group-item list-group-item-action fw-bold" aria-current="true">
                            GERADORES
                        </button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de CPF <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de CNPJ <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de RG <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de CEP <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de Telefone <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de CNH <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Gerador de Título de Eleitor <i class="bi bi-arrow-right"></i></button>
                    </div>

                    <div className="list-group text-start">
                        <button type="button" className="list-group-item list-group-item-action fw-bold" aria-current="true">
                            VALIDADORES
                        </button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar CPF <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar CNPJ <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar RG <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar CEP <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar Telefone <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar CNH <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Validadar Título de Eleitor <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div>
                <h5><a href="" className="text-decoration-none">MATEMÁTICA</a></h5>
                <div className="d-flex flex-column gap-3">
                    <div className="list-group text-start">
                        <button type="button" className="list-group-item list-group-item-action fw-bold" aria-current="true">
                            CALCULADORAS
                        </button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de IMC <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de MMC <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de Juros Compostos <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de Porcentagem <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de Desconto <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de Média Aritmética <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Calculadora de Fatorial <i class="bi bi-arrow-right"></i></button>
                    </div>

                    <div className="list-group text-start">
                        <button type="button" className="list-group-item list-group-item-action fw-bold" aria-current="true">
                            CALCULAR ÁREAS
                        </button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Círculo <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Quadrado <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Retângulo <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Triângulo <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Trapézio <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Losango <i class="bi bi-arrow-right"></i></button>
                        <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between">Área do Hexágono <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default SideBar;