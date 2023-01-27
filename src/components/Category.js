import { data } from "./data";
export default function Cat() {
    const category = ["Vegetables", "Breads", "Meat", "Spreads"];

    return (
        <div>
            {
                category.map((e, i) => {
                    return (
                        <div>
                            <h3 className="mb-3 border-bottom" key={i}>{e}</h3>
                            {data.map((a) => {
                                if (a.category == e) {
                                    return (
                                        <div className="d-flex justify-content-between">
                                            <p className="col-4">{a.productName}</p>
                                            <p className="col-4" style={{ color: a.inStock ? "green" : "red" }}>{a.inStock ? "IN STOCK" : "OUT OF STOCK"}</p>
                                            <p className="col-1">${a.price}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}