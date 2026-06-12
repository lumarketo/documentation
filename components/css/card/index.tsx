import * as React from "react"

export const ObjectInfoCard = ({
  required = true,
  type,
  title,
  description,
  content,
}: {
  title: string
  type?: string
  required?: boolean
  description?: string
  content?: React.ReactNode
}) => {
  return (
    <div
      className="mt-2.5 rounded-lg border border-border"
      style={{ backgroundColor: "hsl(var(--muted) / 0.3)" }}
    >
      <div className="flex items-start gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="font-mono text-sm font-semibold text-foreground">
              {title}
            </span>
            {type ? (
              <span className="font-mono text-xs text-muted-foreground">
                {type}
              </span>
            ) : null}
          </div>
          {description ? (
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {required ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Required
          </span>
        ) : (
          <span className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            Optional
          </span>
        )}
      </div>
      {content ? (
        <div className="px-4 pb-3">
          <div className="border-l-2 border-border pl-3.5">{content}</div>
        </div>
      ) : null}
    </div>
  )
}

export const JsonViewer = ({ json }: { json: any }) => {
  return <div>{json}</div>
}
