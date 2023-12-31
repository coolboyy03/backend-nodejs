const express = require('express');
const path = require('path');

const configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, '../public')));
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
}

module.exports  = configViewEngine;