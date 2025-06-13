// import { useRequireAuth } from "../../hooks/Authenticate";

import { useAuthRoute } from "../../Hooks/useAuthroute";

function Finance() {

  useAuthRoute();
  const user = sessionStorage.getItem("user");
  console.log(user);
  

  return (
    <div className="flex justify-center items-center h-screen w-full">
      finance
    </div>
  );
}

export default Finance;
