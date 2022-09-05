import { MSkeleton } from '@modyolabs/react-design-system';

export default function SkeletonLoader() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 w-100">
      <MSkeleton viewBox="0 0 320 70" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
        <rect x="0" y="0" rx="8" ry="8" width="320" height="70" />
      </MSkeleton>
      <div className="bg-white rounded py-4 w-100">
        <MSkeleton viewBox="0 0 320 355" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
          <rect x="0" y="0" rx="8" ry="8" width="320" height="54" />
          <rect x="80" y="65" rx="8" ry="8" width="164" height="18" />
          <rect x="0" y="120" rx="8" ry="8" width="320" height="54" />
          <rect x="0" y="200" rx="8" ry="8" width="320" height="54" />
          <rect x="0" y="280" rx="8" ry="8" width="320" height="54" />
        </MSkeleton>
      </div>
    </div>
  );
}
