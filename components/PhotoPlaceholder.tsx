interface PhotoPlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function PhotoPlaceholder({ label, aspectRatio = '4/3', className }: PhotoPlaceholderProps) {
  return (
    <div className={`photo ${className ?? ''}`.trim()} style={{ aspectRatio }} role="img" aria-label={label}>
      <span className="photo-label">{label}</span>
    </div>
  );
}
