import { Router } from "express"

const router = Router()

let products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
    { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics', inStock: true },
    { id: 3, name: 'Headphones', price: 199.99, category: 'Accessories', inStock: false },
    { id: 4, name: 'Coffee Maker', price: 49.99, category: 'Home Appliances', inStock: true },
    { id: 5, name: 'Desk Chair', price: 149.99, category: 'Furniture', inStock: true },
    { id: 6, name: 'Water Bottle', price: 19.99, category: 'Fitness', inStock: true },
    { id: 7, name: 'Blender', price: 89.99, category: 'Kitchen Appliances', inStock: false },
    { id: 8, name: 'Notebook', price: 2.99, category: 'Stationery', inStock: true },
    { id: 9, name: 'Backpack', price: 39.99, category: 'Accessories', inStock: true },
    { id: 10, name: 'Gaming Mouse', price: 59.99, category: 'Electronics', inStock: false }
  ]

router.get('/',(req,res)=>{
    res.status(200).json(products)
})

router.get('/:id',(req,res)=>{
    const {id} = req.params
    const product = products.find(product => product.id === Number(id))
    res.status(200).json(product)
})

router.post('/',(req,res)=>{

    const newProduct = req.body
    products.push(newProduct)
    res.status(200).send("producto creado")
})

router.put('/:id',(req,res)=>{

    const newProduct = req.body
    const {id} = req.params
    products = products.map(product => {
       
        if(product.id === Number(id)){
            return newProduct
        }

        return product
    })
    res.status(200).send("producto actualizado")
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params
    products = products.filter(product => product.id !== Number(id)  )
    res.status(200).send("producto borrado")
})

export default router