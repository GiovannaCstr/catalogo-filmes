import conexao from './connection.js';

export async function salvar(filme) {
    let comando = `
        INSERT INTO tb_filmes (nome_filme, sinopse, avaliacao, dt_lancamento, bt_disponivel, img_filme) 
        VALUES (?, ?, ?, ?, ?, ?)
    `

    let resp = await conexao.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, filme.imagem])
    let info = resp[0];

    filme.id = info.insertId;
    return filme;
}