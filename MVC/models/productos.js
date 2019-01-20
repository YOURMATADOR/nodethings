const fs = require('fs')
const path = require('path')

const rootPath = require('../helpers/rootPath')

class Producto {
	constructor() {
		fs.readFile(path.join(rootPath, 'data', 'productos.json'), (err, res) => {
			if (err) {
				this.productos = []
				fs.mkdir(
					path.join(rootPath, 'data'),
					(error) =>
						!error &&
						fs.writeFile(
							path.join(rootPath, 'data', 'productos.json'),
							[],
							(e, r) => !!e && console.log('erro', e)
						)
				)
			} else {
				this.productos = JSON.parse(res)
			}
		})
	}
	getProductos() {
		return this.productos
	}

	agregarProducto(producto) {
		this.productos.push(producto)
		fs.writeFile(
			path.join(rootPath, 'data', 'productos.json'),
			JSON.stringify(this.productos),
			(e, r) => {
				console.log('error', e)
			}
		)
	}
	obtenerProducto(nombre){
		return filter.this.productos(i=> i.nombre === nombre)
	}
}

module.exports = {
	Producto
}
