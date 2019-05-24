import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.render('home', { actHome: 'current_page_item' })
})
router.get('/contato', (req, res) => {
  res.render('contato', { actContato: 'current_page_item' })
})
router.get('/criancas', (req, res) => {
  res.render('criancas', { actGrupos: 'current_page_item' })
})
router.get('/galcrianca1', (req, res) => {
  res.render('galcrianca1', { actGaleria: 'current_page_item' })
})
router.get('/diacono', (req, res) => {
  res.render('diacono', { actDirecao: 'current_page_item' })
})
router.get('/galeriateatro', (req, res) => {
  res.render('galeriateatro', { actGaleria: 'current_page_item' })
})
router.get('/galmocidade1', (req, res) => {
  res.render('galmocidade1', { actGaleria: 'current_page_item' })
})
router.get('/galteatro', (req, res) => {
  res.render('galteatro', { actGaleria: 'current_page_item' })
})
router.get('/ipritapira', (req, res) => {
  res.render('ipritapira', { actHistoria: 'current_page_item' })
})
router.get('/direcao', (req, res) => {
  res.render('direcao', { actDirecao: 'current_page_item' })
})
router.get('/galcrianca', (req, res) => {
  res.render('galcrianca', { actGaleria: 'current_page_item' })
})
router.get('/galjcm', (req, res) => {
  res.render('galjcm', { actGaleria: 'current_page_item' })
})
router.get('/galmocidade', (req, res) => {
  res.render('galmocidade', { actGaleria: 'current_page_item' })
})
router.get('/historiaipr', (req, res) => {
  res.render('historiaipr', { actHistoria: 'current_page_item' })
})
router.get('/jcm', (req, res) => {
  res.render('jcm', { actJCM: 'current_page_item' })
})
router.get('/mocidade', (req, res) => {
  res.render('mocidade', { actGrupos: 'current_page_item' })
})
router.get('/presbitero', (req, res) => {
  res.render('presbitero', { actDirecao: 'current_page_item' })
})
router.get('/danca', (req, res) => {
  res.render('danca', { actGrupos: 'current_page_item' })
})
router.get('/galdanca', (req, res) => {
  res.render('galdanca', { actGaleria: 'current_page_item' })
})
router.get('/galjubilo', (req, res) => {
  res.render('galjubilo', { actGaleria: 'current_page_item' })
})
router.get('/galpastor', (req, res) => {
  res.render('galpastor', { actGaleria: 'current_page_item' })
})
router.get('/jubilo', (req, res) => {
  res.render('jubilo', { actGrupos: 'current_page_item' })
})
router.get('/varoes', (req, res) => {
  res.render('varoes', { actGrupos: 'current_page_item' })
})

export default router
