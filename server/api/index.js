const router = require('express').Router();


router.use('/kittens', require('./kittens'));
router.use('/puppies', require('./puppies'));
router.use('/users', require('./users'));

router.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err)
  //Or one simple line like below
  // res.status(404).send('Not found');
});


module.exports = router;