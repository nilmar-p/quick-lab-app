import { useState } from "react";

function G_CNPJ() {
    const [cnpj, setCnpj] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
    };

    function generateCnpj() {
        let generatedCnpj = '';

        for (let i = 0; i < 8; i++) {
            generatedCnpj += Math.floor(Math.random() * 10);
        }

        generatedCnpj += '0001';

        let firstMultipliers = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let total = 0;

        for (let i = 0; i < 12; i++) {
            let digit = parseInt(generatedCnpj[i]);
            total += digit * firstMultipliers[i];
        }

        let remainder = total % 11;
        let first_check_digit = remainder < 2 ? 0 : 11 - remainder;
        generatedCnpj += first_check_digit;

        let secondMultipliers = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        total = 0;

        for (let i = 0; i < 13; i++) {
            let digit = parseInt(generatedCnpj[i]);
            total += digit * secondMultipliers[i];
        }

        remainder = total % 11;
        let second_check_digit = remainder < 2 ? 0 : 11 - remainder;
        generatedCnpj += second_check_digit;

        if (isChecked) {
            setCnpj(
                generatedCnpj.slice(0, 2) + '.' +
                generatedCnpj.slice(2, 5) + '.' +
                generatedCnpj.slice(5, 8) + '/' +
                generatedCnpj.slice(8, 12) + '-' +
                generatedCnpj.slice(12, 14)
            );
        } else {
            setCnpj(generatedCnpj)
        }
    }

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
                            <button type="button" class="btn btn-primary fw-semibold shadow-sm" onClick={generateCnpj}><i class="bi bi-arrow-clockwise"></i> Gerar CNPJ</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="fw-semibold">CNPJ Gerado: </p>
                    <input type="text" className="w-25 rounded p-2 fw-semibold text-center" value={cnpj} disabled />
                </div>
            </div>
        </div>
    )
}

export default G_CNPJ;