const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const Pedido = require('../model/Pedido');

Pedido.sync();


//GET Retorna tarefas com paginação e ordenação
router.get('/Pedido', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    sequelize.query(`SELECT * FROM pedidos ORDER BY updatedAt DESC LIMIT ? OFFSET ?`,
        { replacements: [parseInt(limit), (page - 1) * parseInt(limit)] }
    )
    .then(([results, metadata]) => {
        res.json(results);
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//GET Consulta uma tarefa pelo ID
router.get('/Pedido/:id', async (req, res) => {
    sequelize.query(`SELECT * FROM pedidos WHERE id = Pedido`, { replacements: [req.params.id] })
    .then(([results, metadata]) => {
        if (results.length === 0) {
            res.status(404).json({
                success: false,
                message: "tarefa não encontrada",
            });
        } else {
            res.json({
                success: true,
                task: results[0],
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//POST Cria uma tarefa
router.post('/Pedido', async (req, res) => {
    sequelize.query(`INSERT INTO edidos (clienteid,carroid,dataPedido,statusPedido, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?,)`,
        { replacements: [req.body.clienteid,
            req.body.carroid,
            req.body.dataPedido,
            req.body.statusPedido, new Date(), new Date()] }
    )
    .then(([results, metadata]) => {
        res.status(201).json({
            success: true,
            message: "Tarefa criada com sucesso",
        });
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//PUT Atualiza uma tarefa pelo ID
router.put('/Pedido/:id', async (req, res) => {
    sequelize.query(`UPDATE pedidos SET description = ? WHERE id = ?`,
        { replacements: [req.body.clienteid,
            req.body.carroid,
            req.body.dataPedido,
            req.body.statusPedido, 
             req.params.id] }
    )
    .then(([results, metadata]) => {
        if (metadata.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "tarefa não encontrada",
            });
        } else {
            res.json({
                success: true,
                message: "Tarefa atualizada com sucesso",
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

//DELETE Deleta uma tarefa pelo ID
router.delete('/Pedido/:id', async (req, res) => {
    sequelize.query(`DELETE FROM pedidos WHERE id = ?`, { replacements: [req.params.id] })
    .then(([results, metadata]) => {
        if (metadata.affectedRows === 0) {
            res.status(404).json({
                success: false,
                message: "tarefa não encontrada",
            });
        } else {
            res.json({
                success: true,
                message: "Tarefa deletada com sucesso",
            });
        }
    }).catch((error) => {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    });
});

module.exports = router;

