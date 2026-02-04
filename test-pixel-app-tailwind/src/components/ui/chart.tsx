"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import * as RechartsPrimitive from "recharts@2.15.2";
import { cn } from "./utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
  light: "",
  dark: ".dark"
} as const;
export type ChartConfig = { [k in string]: {
  label?: React.ReactNode;
  icon?: React.ComponentType;
} & ({
  color?: string;
  theme?: never;
} | {
  color?: never;
  theme: Record<keyof typeof THEMES, string>;
}) };
type ChartContextProps = {
  config: ChartConfig;
};
const ChartContext = React.createContext<ChartContextProps | null>(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return <ChartContext.Provider value={{
    config
  }}>
      <div data-slot="chart" data-chart={chartId} {..._stylex.props(_styles.$1, className)} {...props}>
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>;
}
const ChartStyle = ({
  id,
  config
}: {
  id: string;
  config: ChartConfig;
}) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
  if (!colorConfig.length) {
    return null;
  }
  return <style dangerouslySetInnerHTML={{
    __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
      const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
      return color ? `  --color-${key}: ${color};` : null;
    }).join("\n")}
}
`).join("\n")
  }} />;
};
const ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> & React.ComponentProps<"div"> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
}) {
  const {
    config
  } = useChart();
  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label as keyof typeof config]?.label || label : itemConfig?.label;
    if (labelFormatter) {
      return <div {..._stylex.props(_styles.$2, labelClassName)}>
          {labelFormatter(value, payload)}
        </div>;
    }
    if (!value) {
      return null;
    }
    return <div {..._stylex.props(_styles.$2, labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return <div {..._stylex.props(_styles.$3, className)}>
      {!nestLabel ? tooltipLabel : null}
      <div {..._stylex.props(_styles.$4)}>
        {payload.map((item, index) => {
        const key = `${nameKey || item.name || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const indicatorColor = color || item.payload.fill || item.color;
        return <div key={item.dataKey} {..._stylex.props(_styles.$5, indicator === "dot" && "items-center")}>
              {formatter && item?.value !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : <>
                  {itemConfig?.icon ? <itemConfig.icon /> : !hideIndicator && <div {..._stylex.props(_styles.$6, {
              "h-2.5 w-2.5": indicator === "dot",
              "w-1": indicator === "line",
              "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
              "my-0.5": nestLabel && indicator === "dashed"
            })} style={{
              "--color-bg": indicatorColor,
              "--color-border": indicatorColor
            } as React.CSSProperties} />}
                  <div {..._stylex.props(_styles.$7, nestLabel ? "items-end" : "items-center")}>
                    <div {..._stylex.props(_styles.$4)}>
                      {nestLabel ? tooltipLabel : null}
                      <span {..._stylex.props(_styles.$8)}>
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && <span {..._stylex.props(_styles.$9)}>
                        {item.value.toLocaleString()}
                      </span>}
                  </div>
                </>}
            </div>;
      })}
      </div>
    </div>;
}
const ChartLegend = RechartsPrimitive.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}: React.ComponentProps<"div"> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
  hideIcon?: boolean;
  nameKey?: string;
}) {
  const {
    config
  } = useChart();
  if (!payload?.length) {
    return null;
  }
  return <div {..._stylex.props(_styles.$10, verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
      {payload.map(item => {
      const key = `${nameKey || item.dataKey || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      return <div key={item.value} {..._stylex.props(_styles.$11)}>
            {itemConfig?.icon && !hideIcon ? <itemConfig.icon /> : <div {..._stylex.props(_styles.$12)} style={{
          backgroundColor: item.color
        }} />}
            {itemConfig?.label}
          </div>;
    })}
    </div>;
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
  let configLabelKey: string = key;
  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key as keyof typeof payloadPayload] === "string") {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }
  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
const _styles = _stylex.create({
  $1: {
    display: "flex",
    justifyContent: "center",
    fontSize: ".75rem",
    lineHeight: "1rem"
  },
  $2: {
    fontWeight: "500"
  },
  $3: {
    display: "grid",
    minWidth: "8rem",
    alignItems: "flex-start",
    gap: ".375rem",
    borderRadius: ".5rem",
    borderStyle: "solid",
    borderWidth: "1px",
    paddingInline: ".625rem",
    paddingBlock: ".375rem",
    fontSize: ".75rem",
    lineHeight: "1rem",
    "--tw-shadow": "0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a)"
  },
  $4: {
    display: "grid",
    gap: ".375rem"
  },
  $5: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "stretch",
    gap: ".5rem"
  },
  $6: {
    flexShrink: "0",
    borderRadius: "2px",
    borderColor: "var(--color-border)",
    backgroundColor: "var(--color-bg)"
  },
  $7: {
    display: "flex",
    flex: "1",
    justifyContent: "space-between",
    lineHeight: "1"
  },
  $8: {},
  $9: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    fontWeight: "500",
    "--tw-numeric-spacing": "tabular-nums",
    fontVariantNumeric: "tabular-nums"
  },
  $10: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem"
  },
  $11: {
    display: "flex",
    alignItems: "center",
    gap: ".375rem"
  },
  $12: {
    height: ".5rem",
    width: ".5rem",
    flexShrink: "0",
    borderRadius: "2px"
  }
});