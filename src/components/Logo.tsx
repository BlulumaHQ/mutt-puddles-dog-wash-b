const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`font-display lowercase leading-none tracking-tight ${className}`}>
    <span className="text-secondary">mutt</span>
    <span className="text-primary">puddles</span>
  </span>
);
export default Logo;
