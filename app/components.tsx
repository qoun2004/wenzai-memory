import Link from "next/link";

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="arrow-link" href={href}>
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status.includes("公開") || status.includes("可閱讀")
      ? "ready"
      : status.includes("授權")
        ? "permission"
        : "progress";
  return <span className={`status-badge ${tone}`}>{status}</span>;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  note,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  note?: string;
}) {
  return (
    <section className="page-hero">
      <div className="site-width page-hero-grid">
        <div>
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div>
          <p className="page-lead">{lead}</p>
          {note && <p className="page-note">{note}</p>}
        </div>
      </div>
    </section>
  );
}

export function InfoCard({
  label,
  title,
  children,
  status,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  status?: string;
}) {
  return (
    <article className="info-card">
      <p className="card-label">{label}</p>
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
      {status && <StatusBadge status={status} />}
    </article>
  );
}
