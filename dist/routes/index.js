"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const router = _express.Router.call(void 0, )

router.get('/', (req, res) => {
  res.render('home')
})
router.get('/contato', (req, res) => {
  res.render('contato')
})
router.get('/criancas', (req, res) => {
  res.render('criancas')
})
router.get('/galcrianca1', (req, res) => {
  res.render('galcrianca1')
})
router.get('/diacono', (req, res) => {
  res.render('diacono')
})
router.get('/galeriateatro', (req, res) => {
  res.render('galeriateatro')
})
router.get('/galmocidade1', (req, res) => {
  res.render('galmocidade1')
})
router.get('/galteatro', (req, res) => {
  res.render('galteatro')
})
router.get('/ipritapira', (req, res) => {
  res.render('ipritapira')
})
router.get('/layouts', (req, res) => {
  res.render('layouts')
})
router.get('/direcao', (req, res) => {
  res.render('direcao')
})
router.get('/galcrianca', (req, res) => {
  res.render('galcrianca')
})
router.get('/galjcm', (req, res) => {
  res.render('galjcm')
})
router.get('/galmocidade', (req, res) => {
  res.render('galmocidade')
})
router.get('/historiaipr', (req, res) => {
  res.render('historiaipr')
})
router.get('/jcm', (req, res) => {
  res.render('jcm')
})
router.get('/mocidade', (req, res) => {
  res.render('mocidade')
})
router.get('/presbitero', (req, res) => {
  res.render('presbitero')
})
router.get('/danca', (req, res) => {
  res.render('danca')
})
router.get('/galdanca', (req, res) => {
  res.render('galdanca')
})
router.get('/galjubilo', (req, res) => {
  res.render('galjubilo')
})
router.get('/galpastor', (req, res) => {
  res.render('galpastor')
})
router.get('/jubilo', (req, res) => {
  res.render('jubilo')
})
router.get('/varoes', (req, res) => {
  res.render('varoes')
})

exports. default = router
