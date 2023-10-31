const express = require('express');

async function homepage(req, res, next) {
    try {
        res.render('homepage/index')
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = {
    homepage,
}