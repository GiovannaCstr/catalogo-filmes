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

export async function listarTodos() {
    let comando = `
        SELECT  id_filme,
                nome_filme,
                sinopse,
                avaliacao,
                dt_lancamento,
                bt_disponivel
        FROM    tb_filmes
    `

    let resp = await conexao.query(comando);
    let lista = resp[0];

    return lista;
}