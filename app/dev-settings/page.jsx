const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-5">
          Account Information
        </h2>

        <div className="space-y-2">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Full Name:{" "}
              <span className="text-sm font-medium text-slate-800 mt-1">
                Akash Ahmed
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Email Address:{" "}
              <span className="text-sm font-medium text-slate-800 mt-1">
                akash@example.com
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Account Type:{" "}
              <span className="text-sm font-medium text-slate-800 mt-1">
                Attendee
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Account Status:{" "}
              <span className="inline-flex mt-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                Active
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Notification Preferences
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Email Notifications
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Receive event updates and booking confirmations.
              </p>
            </div>
            <span className="text-xs font-semibold text-green-600">
              Enabled
            </span>
          </div>

          <div className="border-t border-slate-100" />

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Promotional Emails
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Receive news, offers, and special promotions.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Disabled
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Security</h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-slate-800">
              Password:{" "}
              <span className="text-sm text-slate-500 mt-1">
                Last updated: Not available
              </span>
            </p>
          </div>

          <div className="border-t border-slate-100" />

          <div>
            <p className="text-sm font-medium text-slate-800">
              Two-Factor Authentication:{" "}
              <span className="text-xs text-slate-500 mt-1">
                Additional account security is currently unavailable.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Account Details
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Member Since:{" "}
              <span className="text-sm text-slate-800 mt-1">November 2026</span>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              User ID:{" "}
              <span className="text-sm text-slate-800 mt-1">#USR-0006</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
