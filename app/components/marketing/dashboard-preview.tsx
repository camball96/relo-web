import { CircleUser, PackageSearch, DollarSign } from "lucide-react";

const stats = [
  {
    label: "Total customers",
    value: "24",
    delta: "+5.4%",
    icon: <CircleUser className="w-4 h-4" />,
  },
  {
    label: "Total products",
    value: "12",
    delta: "+2.1%",
    icon: <PackageSearch className="w-4 h-4" />,
  },
  {
    label: "Monthly revenue",
    value: "$4,200",
    delta: "+8.3%",
    icon: <DollarSign className="w-4 h-4" />,
  },
];

const quickLinks = [
  { title: "Product catalog", sub: "Manage services and billing cycles", icon: <PackageSearch className="w-4 h-4" /> },
  { title: "Customer directory", sub: "12 active clients on record", icon: <CircleUser className="w-4 h-4" /> },
];

const chartBars = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 4 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 6 },
  { day: "Fri", value: 5 },
  { day: "Sat", value: 9 },
  { day: "Sun", value: 3 },
];
const maxBar = Math.max(...chartBars.map((b) => b.value));

export function DashboardPreview() {
  return (
    <div
      className="dashboard-preview mt-[4.5rem] rounded-[10px] overflow-hidden font-sans"
      style={{
        background: "var(--relo-bg)",
        border: "0.5px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        className="dashboard-preview__browser flex items-center gap-[7px] px-[14px] py-[9px]"
        style={{
          background: "var(--relo-dark2)",
          borderBottom: "0.5px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="w-[9px] h-[9px] rounded-full bg-[#e8736a]" />
        <div className="w-[9px] h-[9px] rounded-full bg-[#e8b86a]" />
        <div className="w-[9px] h-[9px] rounded-full bg-[#6abf7a]" />
        <span
          className="ml-[6px] text-[11px] px-[10px] py-[2px] rounded-[4px]"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "0.5px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          app.relocrm.au/
        </span>
      </div>

      {/* App shell */}
      <div className="dashboard-preview__shell flex">
        {/* Sidebar */}
        <div
          className="dashboard-preview__sidebar w-[172px] flex flex-col flex-shrink-0"
          style={{
            background: "var(--relo-white)",
            borderRight: "0.5px solid var(--relo-border)",
          }}
        >
          {/* User row */}
          <div
            className="flex items-center gap-[9px] px-3 py-[14px]"
            style={{ borderBottom: "0.5px solid var(--relo-border)" }}
          >
            <div
              className="w-[30px] h-[30px] rounded-md flex items-center justify-center text-[11px] font-medium text-white flex-shrink-0"
              style={{ background: "var(--relo-green)" }}
            >
              C
            </div>
            <div>
              <div
                className="text-[12px] font-medium"
                style={{ color: "var(--relo-text)" }}
              >
                Cam
              </div>
              <div
                className="text-[10px]"
                style={{ color: "var(--relo-muted)" }}
              >
                CEO of Relo
              </div>
            </div>
          </div>

          {/* Nav items */}
          <div className="p-2 flex-1">
            {["Dashboard", "Customers", "Products", "Settings"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-2 py-[7px] rounded-[5px] text-[11px] mb-[1px] cursor-default"
                style={
                  item === "Dashboard"
                    ? {
                        background: "var(--relo-gbg)",
                        color: "var(--relo-green)",
                        fontWeight: 500,
                      }
                    : { color: "var(--relo-muted)" }
                }
              >
                {item}
              </div>
            ))}
          </div>

          {/* Add customer button */}
          <div
            className="p-2"
            style={{ borderTop: "0.5px solid var(--relo-border)" }}
          >
            <button
              className="w-full py-2 rounded-[5px] text-[11px] text-white cursor-default"
              style={{ background: "var(--relo-green)" }}
            >
              + Add customer
            </button>
          </div>
        </div>

        {/* Main content */}
        <div
          className="dashboard-preview__content flex-1 p-[20px_22px] overflow-hidden"
          style={{ background: "var(--relo-bg)" }}
        >
          <div
            className="text-[10px] tracking-[0.6px] uppercase mb-1"
            style={{ color: "var(--relo-muted)" }}
          >
            Workspace overview
          </div>
          <div
            className="text-[22px] font-medium tracking-[-0.4px] mb-[18px]"
            style={{ color: "var(--relo-text)" }}
          >
            Good evening, Cam
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-[10px] mb-[14px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[7px] p-[11px_13px]"
                style={{
                  background: "var(--relo-white)",
                  border: "0.5px solid var(--relo-border)",
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div
                    className="dashboard-preview__stat-icon w-[26px] h-[26px] rounded-[5px] flex items-center justify-center"
                    style={{ background: "var(--relo-gbg)" }}
                  >
                    {stat.icon}
                  </div>
                  <span
                    className="text-[10px] px-[6px] py-[2px] rounded-[10px]"
                    style={{ color: "#1a6640", background: "#d0eddc" }}
                  >
                    {stat.delta}
                  </span>
                </div>
                <div
                  className="text-[20px] font-medium"
                  style={{ color: "var(--relo-text)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[10px] mt-[2px]"
                  style={{ color: "var(--relo-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom grid */}
          <div
            className="grid gap-[12px]"
            style={{ gridTemplateColumns: "1fr 200px" }}
          >
            {/* Chart */}
            <div
              className="rounded-[7px] p-[13px_14px]"
              style={{
                background: "var(--relo-white)",
                border: "0.5px solid var(--relo-border)",
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div
                    className="text-[12px] font-medium"
                    style={{ color: "var(--relo-text)" }}
                  >
                    Customer growth
                  </div>
                  <div
                    className="text-[10px] mt-[2px]"
                    style={{ color: "var(--relo-muted)" }}
                  >
                    New acquisitions this week
                  </div>
                </div>
                <div className="flex gap-1">
                  {["Week", "Month"].map((t) => (
                    <div
                      key={t}
                      className="text-[10px] px-[9px] py-[3px] rounded-[4px] cursor-default"
                      style={
                        t === "Week"
                          ? {
                              background: "var(--relo-green)",
                              color: "#fff",
                              border: "0.5px solid var(--relo-green)",
                            }
                          : {
                              color: "var(--relo-muted)",
                              border: "0.5px solid var(--relo-border)",
                            }
                      }
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              {/* Bars */}
              <div className="flex items-end gap-[5px] h-[100px] pt-1">
                {chartBars.map((bar) => (
                  <div
                    key={bar.day}
                    className="flex flex-col items-center gap-1 flex-1"
                  >
                    <div
                      className="w-full rounded-t-[3px]"
                      style={{
                        height: `${Math.round((bar.value / maxBar) * 90)}px`,
                        background:
                          bar.value === maxBar
                            ? "var(--relo-green)"
                            : "var(--relo-bg)",
                      }}
                    />
                    <span
                      className="text-[9px]"
                      style={{ color: "var(--relo-muted)" }}
                    >
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-[10px]">
              {quickLinks.map((q) => (
                <div
                  key={q.title}
                  className="rounded-[7px] p-3"
                  style={{
                    background: "var(--relo-white)",
                    border: "0.5px solid var(--relo-border)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-[5px] mb-2 flex items-center justify-center"
                    style={{ background: "var(--relo-gbg)" }}
                  >
                    {q.icon}
                  </div>
                  <div
                    className="text-[12px] font-medium"
                    style={{ color: "var(--relo-text)" }}
                  >
                    {q.title}
                  </div>
                  <div
                    className="text-[10px] mt-[2px] leading-[1.4]"
                    style={{ color: "var(--relo-muted)" }}
                  >
                    {q.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
