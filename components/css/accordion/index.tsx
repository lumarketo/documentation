// import "./index.css"
"use client"

import * as React from "react"

export function ResponseAccordionComponent({
  items,
}: {
  items: [
    {
      title: string,
      content: JSX.Element
    }
  ]
}) {
  return (
    <div className="accordionContainer">
      {items.map((item: any, i: number) => (
        <ResponseAccordionItem item={item} key={`${i}-acc-${Date.now()}`} />
      ))}
    </div>
  )
}

const ResponseAccordionItem = ({
  item,
}: {
  item: {
    title: string
    content: JSX.Element
  }
}) => {
  const [show, setShow] = React.useState(false)

  return (
    <React.Fragment>
      <button
        className="accordion font-medium"
        style={{ fontWeight: 600 }}
        onClick={() => setShow((p) => !p)}
      >
        {item.title}
      </button>
      <div className="panel" style={{ display: show ? "block" : "none" }}>
        {item.content}
      </div>
    </React.Fragment>
  )
}
