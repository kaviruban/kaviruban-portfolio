import { navigation, type View } from "../data/portfolio";

type NavigationProps = {
  activeView: View | null;
  isDark: boolean;
  onNavigate: (view: View) => void;
  onToggleTheme: () => void;
};

export function Navigation({
  activeView,
  isDark,
  onNavigate,
  onToggleTheme,
}: NavigationProps) {
  return (
    <header className="site-header">
      <nav className="header-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <button
            className={activeView === item.id ? "active" : ""}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className={`theme-toggle ${isDark ? "is-dark" : ""}`}
          onClick={onToggleTheme}
          type="button"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <span className="theme-symbol" aria-hidden="true">
            {isDark ? "☾" : "☼"}
          </span>
          <span className="theme-toggle-label">{isDark ? "Night" : "Day"}</span>
        </button>
      </div>
    </header>
  );
}
