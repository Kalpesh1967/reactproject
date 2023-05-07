const router =require('express').Router()
const product=require('../controllers/productcontroller')
const reg=require('../controllers/regcontroller')

router.post('/reg',reg.insert);
router.post('/login',reg.login);
router.post('/productadd',product.productadd);
router.get('/adminAllproduct',product.adminAllproduct)
router.get('/singleproduct/:id',product.singleproduct)
router.put('/productupdate/:id',product.productupdate)
module.exports=router;