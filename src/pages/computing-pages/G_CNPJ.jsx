import { useState } from "react";

function G_CNPJ() {
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <div className="text-start border-bottom mb-4">
                <p className="fs-4 fw-semibold"><i class="bi bi-arrow-right-square-fill"></i> GERADOR DE CNPJ</p>
                <p>Gere um CNPJ válido em instantes! Basta clicar em 'Gerar CNPJ' e um novo número será criado automaticamente. Você também pode escolher se deseja exibir o número com ou sem pontuação.</p>
            </div>
            <div className="d-flex flex-column gap-4">
                <div className="row">
                    <div className="col border-end">
                        <p className="fw-semibold">1. Gerar com pontuação?</p>
                        <div className="d-flex justify-content-center">
                            <div class="form-check form-switch">
                                <input class="form-check-input border-primary border-2" type="checkbox" role="switch" id="switchCheckDefault"
                                    checked={isChecked}
                                    onChange={handleSwitchChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="button" class="btn btn-primary fw-semibold shadow-sm"><i class="bi bi-arrow-clockwise"></i> Gerar CPF</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="fw-semibold">CNPJ Gerado: </p>
                    <input type="text" className="w-25 rounded p-2 fw-semibold text-center" disabled />
                </div>
            </div>
        </div>
    )
}

export default G_CNPJ;