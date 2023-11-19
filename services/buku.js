const  BukuRepository  = require('../repositories/buku')

function simpleGet(id) {
    const attributes = ['id','judul','harga','isbn','tahunTerbit']
    return BukuRepository.attributesFind(id, attributes)
}
module.exports = {
    simpleGet
}