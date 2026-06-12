// import "./index.css"
"use client"

import * as React from "react"

export function ResponseAccordionComponent({
  items,
}: {
  items: [
    {
      title: string,
      content: React.ReactNode
    }
  ]
}) {
  return (
    <div className="accordionContainer">
      {items.map((item: any, i: number) => (
        <ResponseAccordionItem item={item} key={`acc-${i}`} />
      ))}
    </div>
  )
}

const ResponseAccordionItem = ({
  item,
}: {
  item: {
    title: string
    content: React.ReactNode
  }
}) => {
  const [show, setShow] = React.useState(false)

  return (
    <React.Fragment>
      <button
        className="accordion font-medium"
        style={{ fontWeight: 600 }}
        aria-expanded={show}
        onClick={() => setShow((p) => !p)}
      >
        <span>{item.title}</span>
        <svg
          className="accordion-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="panel" style={{ display: show ? "block" : "none" }}>
        {item.content}
      </div>
    </React.Fragment>
  )
}
