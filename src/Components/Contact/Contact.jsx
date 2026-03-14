const people = [
  {
name: "Mr. Naresh Kumar",
role: "Research Scholar",
dept: "Department of Library & Information Science, II Floor, Tutorial Building University of Delhi, Delhi-7",
email: "nkumar@libinfosci.du.ac.in; nareshiiim.kumar@gmail.com",
  },
  {
name: "Dr. Margam Madhusudhan",
role: "Professor",
dept: "Department of Library & Information Science, II Floor, Tutorial Building University of Delhi, Delhi-7",
Phone: "Ph: 011-27666656  +91-9911817540",
email: "mmadhusudhan@libinfosci.du.ac.in, madhumargam@gmail.com"
},
];

const Contact = () => {
  return (
    <div className="w-full min-h-full rounded-lg bg-white flex flex-col items-center p-6 shadow-lg">
      <div className="max-w-3xl w-full mx-auto py-5">
        <h1 className="text-3xl font-extrabold text-center text-black mb-5">
          Contact Us
        </h1>

        <div className="grid sm:grid-cols-2 gap-4">
          {people.map((p) => (
            <div
              key={p.email}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-1 border-t-2 border-black"
            >
              <h2 className="text-xl font-bold text-black">{p.name}</h2>
              <p className="text-black font-medium">{p.role}</p>
              <p className="text-black text-sm">{p.dept}</p>
              <a
                href={`mailto:${p.email}`}
                className="mt-3 text-black hover:text-gray-800 font-medium break-all transition-colors"
              >
                {p.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
