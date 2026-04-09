interface PhotoPlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function PhotoPlaceholder({ label, aspectRatio = '4/3', className }: PhotoPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#1A1A1A',
        aspectRatio,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.02) 39px, rgba(255,255,255,0.02) 40px)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 600,
          fontSize: '9px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#888888',
        }}
      >
        {label}
      </span>
    </div>
  );
}
