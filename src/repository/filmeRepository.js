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


export async function buscarPorNome(nome) {
    let comando = `
        SELECT  id_filme        as id,
                nome_filme      as nome,
                sinopse         as sinopse,
                avaliacao       as avaliacao,
                dt_lancamento   as lancamento,
                bt_disponivel   as disponivel
        FROM    tb_filmes
        WHERE   nome_filme like ?
    `

    let resp = await conexao.query(comando, ['%'+nome+'%']);
    let lista = resp[0];

    return lista;
}


export async function buscarPorId(id) {
    let comando = `
        SELECT  id_filme        as id,
                nome_filme      as nome,
                sinopse         as sinopse,
                avaliacao       as avaliacao,
                dt_lancamento   as lancamento,
                bt_disponivel   as disponivel,
                img_filme       as imagem
        FROM    tb_filmes
        WHERE   id_filme = ?
    `

    let resp = await conexao.query(comando, [id]);
    let lista = resp[0];

    return lista[0];
}


export async function alterar(id, filme) {
    let comando = `
        UPDATE  tb_filmes
        SET     nome_filme = ?,
                sinopse = ?,
                avaliacao = ?,
                dt_lancamento = ?,
                bt_disponivel = ?
        WHERE   id_filme = ?
    `

    let resp = await conexao.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id])
    let info = resp[0];

    return info.affectedRows;
}


export async function deletar(id) {
    let comando = `DELETE FROM tb_filmes WHERE id_filme = ?`

    let resp = await conexao.query(comando, [id])
    let info = resp[0];

    return info.affectedRows;
}