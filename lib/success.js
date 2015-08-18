module.exports = function (res){

  return function (data, meta) {
    var body = {
      status: 'success',
      data: (typeof data !== 'undefined' && data !== null) ? data : null
    }

    if (meta && typeof meta !== 'undefined' && meta !== null) {
      body.meta = meta
    }

    return res.json(body)
  }

}
