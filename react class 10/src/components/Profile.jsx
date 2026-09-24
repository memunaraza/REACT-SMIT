import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-slate-800">
        Student Profile
      </h2>

      <div className="space-y-3 text-slate-600">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>

        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p>
          <span className="font-semibold">Role:</span> {user.role}
        </p>
      </div>
    </div>
  );
};

export default Profile;