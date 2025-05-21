import { Link } from "react-router-dom";

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

                        <Link
                            to="/gerador_de_CPF"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de CPF</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="/gerador_de_CNPJ"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de CNPJ</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="/gRG"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de RG</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="/gCEP"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de CEP</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="/gTelefone"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de Telefone</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="/gCNH"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de CNH</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="/gTituloEleitor"
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <span>Gerador de Título de Eleitor</span>
                            <i className="bi bi-arrow-right"></i>
                        </Link>
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