const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const Cliente = require('../model/Cliente');

Cliente.sync();
//novo

//GET Retorna tarefas com paginação e ordenação
router.get('/Cliente', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    sequelize.query(`SELECT * FROM clientes ORDER BY updatedAt DESC LIMIT ? OFFSET ?`,
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
router.get('/Cliente/:id', async (req, res) => {
    sequelize.query(`SELECT * FROM clientes WHERE id = Cliente`, { replacements: [req.params.id] })
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
router.post('/Cliente', async (req, res) => {
    sequelize.query(`INSERT INTO clientes (nome,email,telefone,endereco, createdAt, updatedAt) VALUES (?, ?, ?,?, ?, ?)`,
        { replacements: [req.body.nome,
            req.body.email,
            req.body.telefone,  
            req.body.endereco , new Date(), new Date()] }
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
router.put('/Cliente/:id', async (req, res) => {
    sequelize.query(`UPDATE clientes SET nome= ? WHERE id = ?`,
        { replacements: [req.body.nome,
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
router.delete('/Cliente/:id', async (req, res) => {
    sequelize.query(`DELETE FROM clientes WHERE id = ?`, { replacements: [req.params.id] })
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

