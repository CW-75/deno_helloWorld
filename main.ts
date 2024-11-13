import express from "express"
import type { Request, Response} from "express"

const app = express()
const port = 3000

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello DenoWorld!')
})

export const add = (a: number, b: number): number => {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Hello, Deno!");
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}
