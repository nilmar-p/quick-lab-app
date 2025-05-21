import { useState } from "react";

function G_CPF() {
    const [cpf, setCpf] = useState("");

    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
    };

    function generateCpf() {
        let generatedCpf = '';
        for (let i = 0; i < 9; i++) {
            generatedCpf += Math.floor(Math.random() * 10);
        }

        let total = 0;
        for (let i = 0; i < 9; i++) {
            let digit = parseInt(generatedCpf[i]);
            total += digit * (10 - i);
        }

        let remainder = total % 11;
        let first_check_digit = remainder < 2 ? 0 : 11 - remainder;

        generatedCpf += first_check_digit;

        total = 0;
        for (let i = 0; i < 9; i++) {
            let digit = parseInt(generatedCpf[i]);
            total += digit * (11 - i)
        }

        total += first_check_digit * 2
        remainder = total % 11

        let second_check_digit = remainder < 2 ? 0 : 11 - remainder;

        generatedCpf += second_check_digit;

        if (isChecked) {
            setCpf(
                generatedCpf.slice(0, 3) + '.' +
                generatedCpf.slice(3, 6) + '.' +
                generatedCpf.slice(6, 9) + '-' +
                generatedCpf.slice(9, 11)
            );
        } else {
            setCpf(generatedCpf);
        }
    }


    return (
        <div>
            <div className="text-start border-bottom mb-4">
                <p className="fs-4 fw-semibold"><i class="bi bi-arrow-right-square-fill"></i> GERADOR DE CPF</p>
                <p>Gere um CPF válido em instantes! Basta clicar em 'Gerar CPF' e um novo número será criado automaticamente. Você também pode escolher se deseja exibir o número com ou sem pontuação.</p>
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
                            <button type="button" class="btn btn-primary fw-semibold shadow-sm" onClick={generateCpf}><i class="bi bi-arrow-clockwise"></i> Gerar CPF</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="fw-semibold">CPF Gerado: </p>
                    <input type="text" className="w-25 rounded p-2 fw-semibold text-center" value={cpf} disabled />
                </div>
            </div>
        </div>
    )
}

export default G_CPF;