import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="text-start">
                <p className="fs-4 fw-bold"><i class="bi bi-arrow-right-square-fill"></i> PRINCIPAIS FERRAMENTAS</p>
            </div>

            <div className="d-flex flex-column gap-4">
                <div className="row">
                    <Link to="/gerador_de_CPF" className="col card-link">
                        <div className="card">
                            <img src="/src/assets/card-img/cpf-card.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text link-primary fw-semibold">
                                    Gerador de CPF
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="#" className="col card-link">
                        <div className="card">
                            <img src="/src/assets/card-img/cnh-card.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text link-primary fw-semibold">
                                    Gerador de CNH
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/gerador_de_CNPJ" className="col card-link">
                        <div className="card">
                            <img src="/src/assets/card-img/cnpj-card.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text link-primary fw-semibold">
                                    Gerador de CNPJ
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div className="row">
                    <a href="https://www.probocontabilidade.com.br/wp2019/wp-content/uploads/2021/01/cpf.jpg" className="col card-link">
                        <div className="card">
                            <img src="/src/assets/card-img/jurosCompostos-card.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text link-primary fw-semibold">
                                    Juros compostos
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.probocontabilidade.com.br/wp2019/wp-content/uploads/2021/01/cpf.jpg" className="col card-link">
                        <div className="card">
                            <img src="/src/assets/card-img/regra3-card.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text link-primary fw-semibold">
                                    Regra de 3
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.probocontabilidade.com.br/wp2019/wp-content/uploads/2021/01/cpf.jpg" className="col card-link">
                        <div className="card">
                            <img src="/src/assets/card-img/imc-card.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text link-primary fw-semibold">
                                    Calcular IMC
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="mt-4 px-3 py-4 bg-light rounded shadow-sm">
                <div className="row">
                    <div className="col">
                        <h2 className="fw-bold text-primary mb-3">👋 Bem-vindo ao QuickLab</h2>
                        <p className="fs-5 text-secondary text-justify">
                            O <strong>QuickLab</strong> foi criado para oferecer suporte a desenvolvedores e estudantes através de ferramentas online, gratuitas e acessíveis.
                            Nossa missão é tornar o processo de aprendizado e desenvolvimento mais ágil, simples e eficiente.
                        </p>
                        <p className="fs-5 text-secondary text-justify">
                            Aqui você encontra <strong>calculadoras</strong>, <strong>geradores</strong>, <strong>conversores</strong> e outras utilidades essenciais
                            para o dia a dia na programação e análise de dados.
                        </p>
                        <p className="fs-5 text-secondary mb-0 text-justify">
                            Estamos sempre evoluindo! Caso sinta falta de alguma funcionalidade,
                            <a href="#" className="ms-1 link-primary text-decoration-none">entre em contato conosco</a>. Sua sugestão pode ser a próxima novidade!
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;