
function App() {

  function calculateDiscount(price: number, discountPercentage: number): number {
    return price - (price * discountPercentage) / 100
  }

  const result = calculateDiscount(1000, 20)
  console.log(result)

  const сategories: string[] = ["Electronics", "Clothes"]

  type OrderStatus = "pending" | "shipped" | "delivered"

  const status: OrderStatus = "pending"

  type PaymentMethod = string | number

  const payment: PaymentMethod = "card"

  interface Product {
    readonly id: number
    title: string
    price: number
    isAvailable: boolean
    colors: string[]
    description?: string
    manufacturer: {
      country: string
      city: string
    }
  }

  const myProduct: Product = {
    id: 1,
    title: "Phone",
    price: 100000,
    isAvailable: true,
    colors: ["black", "white"],
    description: "Uni Phone",
    manufacturer: {
      country: "South Korea",
      city: "Seoul"
    }
  }

  interface User {
    id: number
    name: string
    email: string
  }

  interface Admin extends User {
    role: "admin"
    banUser(username: string): void
  }

  const superAdmin: Admin = {
    id: 1,
    name: "Binazira",
    email: "admin@gmail.com",
    role: "admin",
    banUser(username: string) {
      console.log(username + " заблокирован")
    }
  }

  superAdmin.banUser("John")

  function processData(data: unknown): void {
    if (typeof data === "string") {
      console.log("Данные - строка, длина:", data.length)
    } else if (typeof data === "number") {
      console.log("Данные - число, умноженное на 10:", data * 10)
    } else if (Array.isArray(data)) {
      console.log("Данные - массив, элементов:", data.length)
    }
  }

  processData("Hello")
  processData(10)
  processData([1, 2, 3])
  console.log(сategories)
  console.log(status)
  console.log(payment)
  console.log(myProduct)

  return (
    <>
      <h1>TypeScript</h1>
    </>
  )
}

export default App
