/* eslint-disable react/no-array-index-key */
import classNames from 'classnames';
import { BaseProps } from '../../interface';

type Props =
& BaseProps
& {
  bodyData: string[][];
  hasSeparator?: boolean;
};

export default function DTableBody(
  {
    bodyData,
    hasSeparator,
    style,
    className,
  }: Props,
) {
  return (
    <tbody
      className={classNames({
        'table-group-divider': hasSeparator,
      }, className)}
      style={style}
    >
      {bodyData.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((data, dataIndex) => (
            <td key={dataIndex}>
              {data}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
