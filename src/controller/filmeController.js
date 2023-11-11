import { Router } from "express";
import { salvar, listarTodos, buscarPorNome, buscarPorId } from "../repository/filmeRepository.js";


const endpoints = Router();


endpoints.post('/filme', async (req, resp) => {
    let filme = req.body;
    let r = await salvar(filme);
    resp.send(r);
})


endpoints.get('/filme', async (req, resp) => {
    let r = await listarTodos();
    resp.send(r);
})


endpoints.get('/filme/busca', async (req, resp) => {
    let nome = req.query.nome;
    let r = await buscarPorNome(nome);
    resp.send(r);
})


endpoints.get('/filme/:id', async (req, resp) => {
    let id = req.params.id;
    let r = await buscarPorId(id);
    resp.send(r);
})


export default endpoints;
