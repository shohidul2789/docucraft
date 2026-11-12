const page = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Get Your API Key</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your API credentials and access your account programmatically.
        </p>
      </div>

      {/* API Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">API Status</p>
          <p className="text-xl font-bold text-green-600 mt-2">Active</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">API Requests</p>
          <p className="text-xl font-bold text-slate-900 mt-2">1,248</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Monthly Limit</p>
          <p className="text-xl font-bold text-indigo-600 mt-2">10,000</p>
        </div>
      </section>

      {/* API Key */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Your API Key</h2>
          <p className="text-sm text-slate-500 mt-1">
            Use this key to authenticate requests to our API.
          </p>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            API Key
          </label>

          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3">
            <code className="text-sm text-slate-700 break-all flex-1">
              sk_live_••••••••••••••••••••••••••••
            </code>
            <span className="text-xs font-medium text-green-600 shrink-0">
              Protected
            </span>
          </div>

          <p className="text-xs text-slate-400 mt-2">
            Your API key is hidden for security purposes.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase font-medium">
                Created On
              </p>
              <p className="text-sm text-slate-800 mt-1">November 01, 2026</p>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase font-medium">
                Last Used
              </p>
              <p className="text-sm text-slate-800 mt-1">November 11, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Permissions */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          API Permissions
        </h2>

        <div className="space-y-4">
          {[
            {
              name: "Read Events",
              description: "Access event information and details.",
            },
            {
              name: "Manage Bookings",
              description: "Access and manage event bookings.",
            },
            {
              name: "Read Attendees",
              description: "Retrieve attendee information.",
            },
            {
              name: "Manage Profile",
              description: "Access account profile information.",
            },
          ].map((permission) => (
            <div
              key={permission.name}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm font-medium text-slate-800">
                  {permission.name}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {permission.description}
                </p>
              </div>

              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full shrink-0">
                Enabled
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* API Documentation */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-800">
          API Documentation
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          Learn how to integrate our API into your applications.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 mt-4 overflow-x-auto">
          <p className="text-xs text-slate-400 mb-2">Example API Request</p>

          <pre className="text-sm text-green-400">
            {`fetch("https://api.example.com/events", {
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
});`}
          </pre>
        </div>

        <p className="text-xs text-indigo-600 font-medium mt-4">
          Refer to the API documentation for endpoints and usage guidelines.
        </p>
      </section>

      {/* Security Notice */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">🔒</span>
          <div>
            <h3 className="text-sm font-semibold text-amber-900">
              Keep Your API Key Secure
            </h3>
            <p className="text-sm text-amber-800 mt-2 leading-relaxed">
              Never share your API key publicly or commit it to version control.
              Store it in environment variables and use secure server-side
              requests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
