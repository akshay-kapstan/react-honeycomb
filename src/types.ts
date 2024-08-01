export interface CommonHoneycombProps<T = any> {
  size: number;
  items: Array<T>;
  renderItem(item: T, index: number): React.ReactElement;
  className?: string;
  gap?: number;
}

export interface StaticHoneycombProps extends CommonHoneycombProps {
  columns: number;
}

export interface ResponsiveHoneycombProps extends CommonHoneycombProps {
  children?: React.ReactElement;
  defaultWidth: number;
}

export interface HoneycombCellProps {
  children?: React.ReactElement;
  row: number;
  column: number;
}

export interface HexagonProps {
  children?: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
}
