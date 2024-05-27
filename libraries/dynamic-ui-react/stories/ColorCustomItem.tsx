export type Props = {
  title: string;
  subtitle: string;
  color: string;
};

const PALLETE = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function ColorCustomItem({
  title,
  subtitle,
  color,
}: Props) {
  return (
    <div className="">
      <div className={`p-3 mb-2 text-bg-${color}`}>
        <p className="m-0 fw-bold">
          {title}
        </p>
        <p className="m-0">
          {subtitle}
        </p>
      </div>
      <div className="d-flex flex-column">
        {PALLETE.map((value) => (
          <div
            key={value}
            className={`p-3 text-bg-${color}-${value}`}
          >
            <div className="d-flex justify-content-between">
              <small>
                {value}
              </small>
              <small>
                {`var(--bs-${color}-${value})`}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
