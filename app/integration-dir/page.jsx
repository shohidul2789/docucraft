const page = () => {
  const integrations = [
    {
      name: "Google Calendar",
      description: "Sync your events and bookings with Google Calendar.",
      category: "Calendar",
      status: "Connected",
      icon: "📅",
      connected: true,
    },
    {
      name: "Zoom",
      description: "Create and manage virtual event meetings.",
      category: "Video Conferencing",
      status: "Not Connected",
      icon: "🎥",
      connected: false,
    },
    {
      name: "Google Meet",
      description: "Host online meetings and virtual events.",
      category: "Video Conferencing",
      status: "Connected",
      icon: "💻",
      connected: true,
    },
    {
      name: "Stripe",
      description: "Manage payments and ticket transactions securely.",
      category: "Payment",
      status: "Connected",
      icon: "💳",
      connected: true,
    },
    {
      name: "Slack",
      description: "Receive event notifications and team updates.",
      category: "Communication",
      status: "Not Connected",
      icon: "💬",
      connected: false,
    },
    {
      name: "Mailchimp",
      description: "Manage email campaigns and attendee newsletters.",
      category: "Marketing",
      status: "Not Connected",
      icon: "📧",
      connected: false,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Integrations</h1>
        <p className="text-sm text-slate-500 mt-1">
          Connect your favorite tools and services to enhance your event
          management experience.
        </p>
      </div>

      {/* Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Integrations</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">6</h3>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Connected</p>
          <h3 className="text-2xl font-bold text-green-600 mt-2">3</h3>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Available</p>
          <h3 className="text-2xl font-bold text-indigo-600 mt-2">3</h3>
        </div>
      </section>

      {/* Integration List */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-slate-800">
            Available Integrations
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Services available for your account.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">
                  {integration.icon}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {integration.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 max-w-md">
                    {integration.description}
                  </p>

                  <p className="text-xs text-slate-400 mt-2">
                    {integration.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center sm:justify-end gap-3 sm:min-w-36">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    integration.connected
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {integration.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Information */}
      <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-indigo-900">
          About Integrations
        </h3>
        <p className="text-sm text-indigo-700 mt-2 leading-relaxed">
          Integrations help you connect external services with your event
          management platform. Connected services can simplify scheduling,
          payments, communication, and marketing workflows.
        </p>
      </section>
    </div>
  );
};

export default page;
