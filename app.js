const express = require('express');

const app = express();
const PORT = 3030;

// Página inicial
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>

            <p>Bem-vindo ao catálogo de heróis da Marvel e da DC!</p>

            <h2>Empresas</h2>

            <ul>
                <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC</a></li>
            </ul>

            <hr>

            <h2>Personagens</h2>

            <ul>
                <li>
                    <a href="/personagem/marvel/Thor">
                        Thor
                    </a>
                </li>

                <li>
                    <a href="/personagem/marvel/Homem-Aranha">
                        Homem-Aranha
                    </a>
                </li>

                <li>
                    <a href="/personagem/dc/Batman">
                        Batman
                    </a>
                </li>

                <li>
                    <a href="/personagem/dc/Superman">
                        Superman
                    </a>
                </li>
            </ul>
        </body>
        </html>
    `);
});

// Página da Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel</title>
        </head>
        <body>
            <h1>Marvel</h1>

            <p>
                A Marvel é uma empresa conhecida por seus super-heróis,
                como Thor, Homem-Aranha e muitos outros.
            </p>

            <h2>Personagens da Marvel</h2>

            <ul>
                <li>
                    <a href="/personagem/marvel/Thor">
                        Thor
                    </a>
                </li>

                <li>
                    <a href="/personagem/marvel/Homem-Aranha">
                        Homem-Aranha
                    </a>
                </li>
            </ul>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Página da DC
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC</title>
        </head>
        <body>
            <h1>DC</h1>

            <p>
                A DC é uma empresa conhecida por seus super-heróis,
                como Batman, Superman e muitos outros.
            </p>

            <h2>Personagens da DC</h2>

            <ul>
                <li>
                    <a href="/personagem/dc/Batman">
                        Batman
                    </a>
                </li>

                <li>
                    <a href="/personagem/dc/Superman">
                        Superman
                    </a>
                </li>
            </ul>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Rota com dois parâmetros obrigatórios
app.get('/personagem/:empresa/:nome', (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>${nome}</title>
        </head>
        <body>
            <h1>Personagem</h1>

            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Nome:</strong> ${nome}</p>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});