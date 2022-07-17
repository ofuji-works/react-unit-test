import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Counter } from "../../src/components/Counter"

describe("Counter component test", () => {
  beforeEach(() => {
    render(<Counter />)
  })

  it("初期値の0が表示されている", () => {
    expect(screen.getByText(0)).toBeInTheDocument()
    expect(screen.queryByText(1)).toBeNull()
  })

  it("+ボタン押下するとカウントが１足される", () => {
    fireEvent.click(screen.getByRole("button", { name: "add" }))
    expect(screen.getByText(1)).toBeInTheDocument()
  })

  it("-ボタン押下するとカウントが１引かれる", () => {
    fireEvent.click(screen.getByRole("button", { name: "substract" }))
    expect(screen.getByText(-1)).toBeInTheDocument()
  })
})
