/* eslint-disable react/no-array-index-key */
import { BaseProps } from '../../interface';

type Props =
& BaseProps
& {
  footerData: string[];
};

export default function DTableFooter(
  {
    className,
    style,
    footerData,
  }: Props,
) {
  return (
    <tfoot
      className={className}
      style={style}
    >
      <tr>
        {footerData.map((data, index) => (
          <td key={index}>
            {data}
          </td>
        ))}
      </tr>
    </tfoot>
  );
}
