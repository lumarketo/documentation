import * as React from "react"

export const ObjectInfoCard = ({
  required = true,
  type,
  title,
  description,
  content,
}: {
  title: string
  type: string
  required: boolean
  description: string
  content: JSX.Element
}) => {
  return (
    <div
      style={{
        display: "block",
        border: "1px solid #d3d3d3",
        height: "auto",
        backgroundColor: "rgb(243 243 243 / 5%)",
        borderRadius: 10,
        padding: "2px 10px 10px 10px",
        position: "relative",
        marginTop: 5,
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <h6
          className="font-medium"
          style={{ fontWeight: 500, fontSize: 12, height: 5 }}
        >
          {title}
        </h6>
        <h6
          className="font-medium"
          style={{ fontWeight: 400, marginLeft: 5, fontSize: 11, height: 5 }}
        >
          {type}
        </h6>
        {required && (
          <h6
            style={{
              fontWeight: 400,
              marginLeft: 5,
              fontSize: 11,
              color: "red",
              height: 5,
            }}
          >
            required
          </h6>
        )}
      </div>
      <div style={{ width: "100%" }}>
        <h6
          className="font-medium"
          style={{
            fontWeight: 400,
            fontSize: 13,
            height: "auto",
            margin: "15px 0px 0px 0px",
          }}
        >
          {description}
        </h6>
        {content && content}
      </div>
    </div>
  )
}

export const JsonViewer = ({ json }: { json: any }) => {
  return <div>{json}</div>
}
