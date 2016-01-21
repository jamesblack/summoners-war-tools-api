/* @flow */

import express from 'express'

const router = express.Router()

router.get('/', (req : Object, res, next) : express.Response => {
  let { wanted, have } = req.body

  function test(awesome : string) {
    return awesome.repeat(5)
  }

  test(req.body.awesome)
})

export default router
