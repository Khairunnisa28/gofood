function Create(){
    const products = [
        { id: 1, name: 'Ramen', price: 35000 },
        { id: 2, name: 'Sushi', price: 60000 },
        { id: 3, name: 'Kare', price: 45000 },
        //
    ];
    return(
        <div>
            <h2>Daftar Produk</h2>
            <ul>
            {products.map((product) => (
                <li key={product.id}>
                {product.name} - Rp.{product.price}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Create;