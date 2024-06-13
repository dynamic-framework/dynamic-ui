/* eslint-disable react/no-array-index-key */
import { BaseProps } from '../../interface';

type Props =
& BaseProps
& {
  headerData: string[];
};

export default function DTableHeader(
  {
    headerData,
    className,
    style,
  }: Props,
) {
  return (
    <thead className={className} style={style}>
      <tr>
        {headerData.map((data, index) => (
          <th
            key={index}
            scope="col"
          >
            {data}
          </th>
        ))}
      </tr>
    </thead>
  );
}
