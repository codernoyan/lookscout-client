export default function Onboarding() {
  return (
    <section className="w-full md:w-2/4 mx-auto rounded-md mb-10">
      <div className="mt-8">
        <h2 className="text-center text-3xl font-sembold mb-8">Lookscout</h2>
      </div>
      <main className="border rounded-lg">
        {/* form header */}
        <div className="flex justify-between mt-4 bg-slate-100/50 px-9 py-6">
          {/* account */}
          <div className="flex flex-col gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p>Account</p>
          </div>
          {/* personal */}
          <div className="flex flex-col gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p>Personal</p>
          </div>
          {/* billing */}
          <div className="flex flex-col gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Billing</p>
          </div>
          {/* Done */}
          <div className="flex flex-col gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            <p>Done</p>
          </div>
        </div>
        {/* form */}
        <form className="space-y-4 p-7 md:px-12 md:py-8 bg-white">
          {/* name */}
          <div className="space-y-2">
            <label htmlFor="name" className="font-medium">Name</label>
            <input type="text" id="name" name="name" className="w-full border-slate-300 rounded-md" placeholder="Bryan Koelpin" />
          </div>
          {/* email */}
          <div className="space-y-2">
            <label htmlFor="email" className="after:content-['*'] font-medium">Email</label>
            <input type="email" id="email" className="w-full border-slate-300 rounded-md" placeholder="Email Address" required />
          </div>
          {/* password */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="space-y-2">
              <label htmlFor="password" className="after:content-['*'] font-medium">Password</label>
              <input type="password" id="password" className="w-full border-slate-300 rounded-md" placeholder="Password" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm__password" className="after:content-['*'] font-medium">Confirm Password</label>
              <input type="password" id="confirm__password" className="w-full border-slate-300 rounded-md" placeholder="Confirm Password" required />
            </div>
          </div>
          {/* checkbox */}
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="terms" id="terms" className="accent-pink-500" />
            <label htmlFor="terms" className="font-medium">I accept the Terms and Privacy Policy</label>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="flex gap-1 items-center bg-blue-500 px-4 py-3 text-white font-semibold rounded-sm">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}
